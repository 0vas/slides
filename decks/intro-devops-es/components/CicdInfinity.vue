<template>
  <section class="cicd-infinity" aria-label="CI/CD como flujo continuo">
    <svg viewBox="0 0 1200 540" role="img" aria-labelledby="cicd-title cicd-desc">
      <title id="cicd-title">CI/CD como flujo continuo</title>
      <desc id="cicd-desc">
        Diagrama en forma de infinito que conecta integración continua,
        pruebas continuas, entrega continua y feedback operativo.
      </desc>
      <defs>
        <linearGradient id="cicd-loop" x1="120" x2="1080" y1="100" y2="440" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#a78bfa"/>
          <stop offset="0.28" stop-color="#60a5fa"/>
          <stop offset="0.52" stop-color="#22d3ee"/>
          <stop offset="0.78" stop-color="#5eead4"/>
          <stop offset="1" stop-color="#86efac"/>
        </linearGradient>
        <linearGradient id="cicd-sheen" x1="120" x2="1080" y1="90" y2="450" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#ffffff" stop-opacity="0.34"/>
          <stop offset="0.48" stop-color="#e0f2fe" stop-opacity="0.18"/>
          <stop offset="1" stop-color="#ffffff" stop-opacity="0.28"/>
        </linearGradient>
        <filter id="cicd-shadow" x="-18%" y="-18%" width="136%" height="136%">
          <feDropShadow dx="0" dy="18" stdDeviation="15" flood-color="#000000" flood-opacity="0.42"/>
        </filter>
        <path
          id="cicd-path"
          d="M150 270 C245 92 465 92 600 270 C735 448 955 448 1050 270 C955 92 735 92 600 270 C465 448 245 448 150 270"
        />
      </defs>

      <g filter="url(#cicd-shadow)">
        <use href="#cicd-path" class="loop-outline"/>
        <use href="#cicd-path" class="loop-main"/>
        <use href="#cicd-path" class="loop-sheen"/>
      </g>

      <g class="loop-arrows">
        <path d="M180 266 L234 212 L292 258"/>
        <path d="M904 136 L970 208 L902 260"/>
        <path d="M908 406 L974 342 L1040 396"/>
        <path d="M330 404 L396 456 L462 400"/>
      </g>

      <g class="loop-core">
        <circle cx="382" cy="270" r="94"/>
        <circle cx="818" cy="270" r="94"/>
        <text x="382" y="302">CI</text>
        <text x="818" y="302">CD</text>
      </g>

      <g class="center-test">
        <rect x="502" y="214" width="196" height="112" rx="22"/>
        <text x="600" y="262" class="center-title">Test</text>
        <text x="600" y="296" class="center-detail">Continuous testing</text>
      </g>

      <g class="stage-labels">
        <g class="stage-label purple" transform="translate(276 58)">
          <rect width="164" height="66" rx="18"/>
          <text x="82" y="28" class="stage-number">01</text>
          <text x="82" y="51">Plan</text>
        </g>
        <g class="stage-label blue" transform="translate(62 230)">
          <rect width="164" height="66" rx="18"/>
          <text x="82" y="28" class="stage-number">02</text>
          <text x="82" y="51">Code</text>
        </g>
        <g class="stage-label cyan" transform="translate(276 416)">
          <rect width="164" height="66" rx="18"/>
          <text x="82" y="28" class="stage-number">03</text>
          <text x="82" y="51">Build</text>
        </g>
        <g class="stage-label green" transform="translate(760 58)">
          <rect width="164" height="66" rx="18"/>
          <text x="82" y="28" class="stage-number">04</text>
          <text x="82" y="51">Release</text>
        </g>
        <g class="stage-label green" transform="translate(974 230)">
          <rect width="164" height="66" rx="18"/>
          <text x="82" y="28" class="stage-number">05</text>
          <text x="82" y="51">Deploy</text>
        </g>
        <g class="stage-label cyan" transform="translate(760 416)">
          <rect width="164" height="66" rx="18"/>
          <text x="82" y="28" class="stage-number">06</text>
          <text x="82" y="51">Operate</text>
        </g>
      </g>

      <g class="feedback">
        <path d="M430 472 C492 496 544 496 600 472 C656 496 708 496 770 472"/>
        <text x="600" y="526">feedback operativo</text>
      </g>
    </svg>
  </section>
</template>

<style scoped>
.cicd-infinity {
  display: grid;
  margin: 20px auto 0;
  max-width: 940px;
  width: min(100%, 760px);
}

.cicd-infinity svg {
  display: block;
  overflow: visible;
  width: 100%;
}

.loop-outline,
.loop-main,
.loop-sheen {
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.loop-outline {
  stroke: #020617;
  stroke-width: 104;
}

.loop-main {
  stroke: url("#cicd-loop");
  stroke-width: 78;
}

.loop-sheen {
  stroke: url("#cicd-sheen");
  stroke-width: 28;
}

.loop-arrows path {
  fill: none;
  opacity: 0.78;
  stroke: #07111f;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 9;
}

.loop-core circle {
  fill: rgba(2, 6, 23, 0.9);
  stroke: rgba(191, 219, 254, 0.22);
  stroke-width: 2;
}

.loop-core text {
  fill: #f8fafc;
  font-size: 86px;
  font-weight: 900;
  text-anchor: middle;
}

.center-test rect,
.stage-label rect {
  fill: rgba(15, 23, 42, 0.96);
  stroke-width: 2;
}

.center-test rect {
  stroke: rgba(103, 232, 249, 0.56);
}

.center-test text,
.stage-label text,
.feedback text {
  font-family: Inter, ui-sans-serif, system-ui, sans-serif;
  text-anchor: middle;
}

.center-title {
  fill: #f8fafc;
  font-size: 32px;
  font-weight: 900;
}

.center-detail {
  fill: #dbeafe;
  font-size: 18px;
  font-weight: 760;
}

.stage-label {
  filter: drop-shadow(0 12px 20px rgba(0, 0, 0, 0.28));
}

.stage-label text {
  fill: #f8fafc;
  font-size: 24px;
  font-weight: 900;
}

.stage-label .stage-number {
  font-size: 13px;
  letter-spacing: 0.16em;
}

.stage-label.purple rect {
  stroke: #a78bfa;
}

.stage-label.blue rect {
  stroke: #60a5fa;
}

.stage-label.cyan rect {
  stroke: #22d3ee;
}

.stage-label.green rect {
  stroke: #34d399;
}

.stage-label.purple .stage-number {
  fill: #c4b5fd;
}

.stage-label.blue .stage-number {
  fill: #93c5fd;
}

.stage-label.cyan .stage-number {
  fill: #67e8f9;
}

.stage-label.green .stage-number {
  fill: #86efac;
}

.feedback path {
  fill: none;
  opacity: 0.9;
  stroke: #4ade80;
  stroke-dasharray: 14 14;
  stroke-linecap: round;
  stroke-width: 5;
}

.feedback text {
  fill: #4ade80;
  font-size: 24px;
  font-weight: 900;
}
</style>
