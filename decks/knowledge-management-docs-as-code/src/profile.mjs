import { escape as encode, label, fact, link } from './visuals.mjs';

const talks = [
  ['2026 / Ponencia','DevOpsDays Buenos Aires','Construyendo un framework de Platform Engineering: de silos DevSecOps a X-as-a-Service'],
  ['2026 / Ponencia','DevOpsDays Medellín','Números Bonitos, Madurez Falsa'],
  ['2025 / Ponencia','Agile Summit','Más allá de DevOps: InnerSource como catalizador de la agilidad'],
  ['2025 / Ponencia','DevOpsDays Lima','Las Mentiras de las Métricas: Midiendo sin Caer en Trampas'],
  ['2025 / Ponencia','InnerSource Summit','Building Bridges: Scaling InnerSource'],
  ['2025 / Ponencia','DevOpsDays Santiago','La Evolución del Open Source en la Cultura Empresarial'],
  ['2024 / Ponencia','DevSecOps Fest','Gestionando el conocimiento con Documentation as Code'],
  ['2024 / Ponencia','DevOpsDays Medellín','Adopción de GenAI para revolucionar el desarrollo de software'],
  ['2024 / Entrevista','GitHub · YouTube','Impulsando la productividad del desarrollador con GitHub Copilot']
];

export function profile(speaker, qr, portrait) {
  const cards = talks.map(([date, event, title], i) =>
    `<article class="bio-talk" data-position="${['active','next'][i] ?? 'off'}" aria-hidden="${i !== 0}">${fact(date,event,title)}</article>`).join('');
  const education = [
    ['UNI','Ingeniería de Sistemas · Primer puesto'],
    ['MIT Professional Education','Programa de IA agéntica'],
    ['Hanyang Cyber University','Ingeniería de IA · En curso']
  ].map(([school,subject]) => `<div><strong>${school}</strong><p>${subject}</p></div>`).join('');
  return `<div class="bio-grid">
    <div class="bio-info">
      <div class="bio-identity">
        <figure class="bio-photo"><img src="${portrait}" alt="Retrato de Oscar Lobaton Salas"></figure>
        <div class="bio-role-block"><p class="bio-role"><b>${encode(speaker.headline)}</b> · ${encode(speaker.organization)}</p>${label(encode(speaker.roles[0]))}</div>
      </div>
      <div class="bio-columns">
        <div class="bio-education">${label('Formación')}${education}</div>
        <div class="bio-talks">${label('Charlas y comunidad')}<div class="bio-talk-stack" role="group" aria-roledescription="carrusel" aria-label="Charlas y participaciones">${cards}</div></div>
      </div>
      ${link(['0vas.com','https://0vas.com/'])}
    </div>
    <div class="bio-contact"><h3>Sigamos<br>conversando.</h3><a class="qr" href="${encode(speaker.linkedin.url)}" target="_blank" rel="noopener">
      <img width="318" height="318" src="${qr}" alt="Código QR del perfil de Oscar en LinkedIn"><b>LinkedIn ↗</b><span>@oscarlobatons</span></a>
    </div>
  </div>`;
}
