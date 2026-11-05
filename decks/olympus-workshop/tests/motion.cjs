const {chromium}=require('playwright-chromium');const assert=require('node:assert/strict');
(async()=>{const browser=await chromium.launch();try{for(const reducedMotion of ['no-preference','reduce']){
const page=await browser.newPage({viewport:{width:1440,height:900},reducedMotion});
await page.goto('http://127.0.0.1:4187/olympus-workshop/#/3');const root=page.locator('.slidev-layout:visible');
await root.getByRole('button',{name:'Separar las piezas ↔'}).focus();await page.keyboard.press('Enter');await page.waitForTimeout(750);
assert.notEqual(await root.locator('.ship-piece').first().evaluate(e=>getComputedStyle(e).transform),'none');
const duration=await root.locator('.ship-piece').first().evaluate(e=>getComputedStyle(e).transitionDuration);
assert(reducedMotion==='reduce'?duration==='0s':duration.includes('0.65s'));
await root.getByRole('button',{name:'Reunir las piezas ↔'}).click();
for(const n of [6,8,11,12,17]){
 await page.goto(`http://127.0.0.1:4187/olympus-workshop/#/${n}`);await page.waitForTimeout(850);await root.waitFor();
 if(n===6){for(const c of await root.getByRole('checkbox').all())await c.check();await root.getByRole('button',{name:'Simular respuesta →'}).click();await root.getByText('Respuesta sustentada',{exact:true}).waitFor();}
 if([8,12,17].includes(n)){await root.locator('.onboard-check nav button').last().click();}
 if(n===11){await root.locator('.ol-scene-rail button').last().click();}
 await page.waitForTimeout(750);
 const bad=await root.evaluate(e=>{const r=e.getBoundingClientRect();return [...e.querySelectorAll('p,button,strong,li,h3')].filter(x=>{const a=x.getBoundingClientRect();return a.width&&a.height&&(a.bottom>r.bottom-8||a.right>r.right+1)}).map(x=>x.textContent)});assert.deepEqual(bad,[],`${n} final state bounds`);
 await page.screenshot({path:`/tmp/olympus-workshop-qa/motion-${n}-${reducedMotion}.png`});
}
await page.close();}console.log('PASS: animated/reduced motion, keyboard ship control and final result bounds');}finally{await browser.close()}})().catch(e=>{console.error(e);process.exitCode=1});
