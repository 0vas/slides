const {chromium}=require('playwright-chromium');
const assert=require('node:assert/strict');
const fs=require('node:fs');
assert.equal(fs.readFileSync('decks/olympus-workshop/slides.md','utf8').split(/\n---\n(?:[^\n]+\n)*?---\n/).length,20,'Exactly 20 slides');
const base=process.env.WORKSHOP_URL||'http://127.0.0.1:4187/olympus-workshop/';
const out='/tmp/olympus-workshop-qa';fs.mkdirSync(out,{recursive:true});
(async()=>{const browser=await chromium.launch();try{
 const page=await browser.newPage({viewport:{width:1440,height:900},reducedMotion:'reduce'});
 const errors=[],network=[];
 page.on('pageerror',e=>{if(!e.message.includes('Wake Lock'))errors.push(e.message)});
 await page.route('**/*',route=>{if(!route.request().url().startsWith('http://127.0.0.1:4187/')&&!route.request().url().startsWith('data:')){network.push(route.request().url());return route.abort()}return route.continue()});
 const visible=()=>page.locator('.slidev-layout:visible');
 const clipping=[];
 for(let n=1;n<=20;n++){
  await page.goto(`${base}#/${n}`);await page.waitForTimeout(850);await visible().waitFor();
  assert.equal(await visible().locator('.speaker-profile,.ol-cover').count(),0,'No introductory/profile slides');
  assert(await visible().innerText(),`Slide ${n} has content`);
  const images=await visible().locator('img').evaluateAll(es=>es.map(e=>({src:e.src,ok:e.complete&&e.naturalWidth>0})));assert(images.every(i=>i.ok),JSON.stringify(images));
  const bad=await visible().evaluate(root=>{const r=root.getBoundingClientRect();return [...root.querySelectorAll('h1,h2,h3,p,li,label,button,a,dl,.ol-bottom,.ol-tag,.ol-section-number')].filter(e=>{const x=e.getBoundingClientRect();return x.width&&x.height&&(x.bottom>r.bottom-8||x.top<r.top-2||x.left<r.left-2||x.right>r.right+2)}).map(e=>e.textContent.trim().slice(0,70))});
  if(bad.length)clipping.push({n,bad});
  await page.mouse.move(1430,0);await page.screenshot({path:`${out}/${String(n).padStart(2,'0')}.png`});
  if(await visible().locator('.ship-assembly').count()){
    const ship=visible().locator('.ship-assembly');for(let state=0;state<4;state++){await ship.getByRole('button').nth(state).click();await page.waitForTimeout(450);assert.equal(await ship.locator('.chosen').count(),1);await page.screenshot({path:`${out}/3-ship-${state}.png`});}await ship.getByRole('button',{name:'Separar las piezas ↔'}).click();await page.screenshot({path:`${out}/3-exploded.png`});
  }
  if(await visible().locator('.cap-demo').count()) {
   const demo=visible().locator('.cap-demo');
   if(await demo.getByRole('checkbox').count()) {
    const run=demo.getByRole('button',{name:'Simular respuesta →'});assert(await run.isDisabled());
    for(const c of await demo.getByRole('checkbox').all())await c.check();await run.click();
    await demo.getByText('Respuesta sustentada',{exact:true}).waitFor();
   } else {
    for(const scope of ['skill','agent','workspace']){await demo.getByRole('button',{name:scope,exact:false}).click();await demo.getByRole('button',{name:'Simular publicación →'}).click();await demo.getByText(/Revisión simulada/).waitFor();await page.screenshot({path:`${out}/${n}-${scope}.png`});}
   }
   await page.screenshot({path:`${out}/${n}-result.png`});await demo.getByRole('button',{name:'Reiniciar',exact:true}).click();
  }
  if(n===10) for(let state=0;state<4;state++){await visible().locator('.journey-stations button').nth(state).click();await page.screenshot({path:`${out}/10-journey-${state}.png`});assert.equal(await visible().locator('.journey-stations button').nth(state).getAttribute('aria-pressed'),'true');}
  if(await visible().locator(".ol-scene").count())for(let state=0;state<3;state++){
    const buttons=visible().locator('.ol-scene-rail button');await buttons.nth(state).click();await page.waitForTimeout(450);assert.equal(await buttons.nth(state).getAttribute('aria-pressed'),'true');
    await page.screenshot({path:`${out}/${n}-state-${state}.png`});
  }
  assert(!/práctica|ejercicio|temporizador/i.test(await visible().innerText()),'No exercise content');
  if(await visible().locator('.onboard-check').count())for(let state=0;state<3;state++){
    const check=visible().locator('.onboard-check');const button=check.locator('nav button').nth(state);
    await button.click();await page.waitForTimeout(500);assert.equal(await button.getAttribute('aria-pressed'),'true');
    assert((await check.locator('.onboard-proof p').innerText()).length>30);
    const bad=await check.evaluate(e=>{const r=e.closest('.slidev-layout').getBoundingClientRect();return [...e.querySelectorAll('p,h3,small,button,footer')].filter(x=>x.getBoundingClientRect().bottom>r.bottom-8).map(x=>x.textContent)});
    assert.deepEqual(bad,[],`Onboarding ${n}/${state} fits`);await page.screenshot({path:`${out}/${n}-onboarding-${state}.png`});
  }

 }
 fs.writeFileSync(`${out}/report.json`,JSON.stringify({clipping,errors,network},null,2));
 assert.deepEqual(clipping,[],'No slide content crosses its bounds');assert.deepEqual(errors,[]);assert.deepEqual(network,[],'Core rendering stays local');
 await page.goto(`${base}#/1`);await page.keyboard.press('ArrowRight');await page.waitForTimeout(400);assert.match(page.url(),/#\/2/);
 await page.reload();await page.waitForTimeout(850);await visible().waitFor();assert.match(await visible().innerText(),/Tres entidades/);
 await page.mouse.move(120,880);await page.locator('button[title="Show slide overview"]').click();await page.waitForTimeout(300);await page.screenshot({path:`${out}/overview.png`});await page.keyboard.press('Escape');
 await page.setViewportSize({width:1512,height:982});await page.goto(`${base}#/8`);await page.waitForTimeout(850);await visible().waitFor();await page.screenshot({path:`${out}/laptop.png`});
 for(const file of ['nota-reunion.md','guia-onboarding.md'])assert.equal((await page.request.get(`${base}media/${file}`)).status(),200);
 console.log('PASS: 20 slides, nine onboarding states, no exercises, bounds, images, local assets, keyboard navigation, hash reload, overview, downloads.');
}finally{await browser.close()}})().catch(e=>{console.error(e);process.exitCode=1});
