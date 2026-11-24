export const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const label = text => `<span class="label">${text}</span>`;
export const fact = (tag,title,copy) => `${tag?label(tag):''}<strong>${title}</strong>${copy?'<p>'+copy+'</p>':''}`;
export const link = ([title,url]) => `<a href="${escape(url)}" target="_blank" rel="noopener">${escape(title)} <span aria-hidden="true">↗</span></a>`;
export const show = (step,cls,content) => `<div class="reveal ${cls}" data-show="${step}">${content}</div>`;
export const svg = (viewBox,content) => `<svg class="drawing" viewBox="${viewBox}" aria-hidden="true">${content}</svg>`;
export const stroke = (step,path) => `<path class="ink-trace" pathLength="1" data-from="${step}" d="${path}"/>`;
export const paper = (tag,title,copy) => `${label(tag)}<b>${title}</b>${copy?'<small>'+copy+'</small>':''}<i aria-hidden="true"></i>`;
const icons = {
  book:'M7 10h19l6 6 6-6h19v43H38l-6 4-6-4H7zM32 16v41m-18-38h11m-11 8h11m14-8h11m-11 8h11',
  search:'M42 42l14 14M48 29a19 19 0 1 1-38 0 19 19 0 0 1 38 0Z',
  route:'M15 14h26a10 10 0 1 1 0 20H23a10 10 0 1 0 0 20h22m-9-9 9 9-9 9',
  check:'M32 7 54 16v15c0 13-9 23-22 29-13-6-22-16-22-29V16Zm-9 26 6 6 12-14',
  code:'m21 19-13 13 13 13m22-26 13 13-13 13M37 11 27 53',
  box:'m7 20 25-13 25 13v25L32 59 7 45zm0 0 25 13 25-13M32 33v26',
  person:'M42 21a10 10 0 1 1-20 0 10 10 0 0 1 20 0ZM12 56v-7c0-10 8-16 20-16s20 6 20 16v7Z',
  node:'M12 12h13v13H12zm27 27h13v13H39zM25 18h16v21m-22-14v16h20',
  clock:'M31 13a21 21 0 1 0 0 42 21 21 0 0 0 0-42Zm0 10v12l8 6'
};
export const icon = key => `<svg class="glyph" viewBox="0 0 64 64" aria-hidden="true"><path d="${icons[key]}"/></svg>`;
export const shell = (filename,contents) => `<figure class="terminal"><figcaption><i></i><i></i><i></i><span>${filename}</span></figcaption><pre>${contents.trim().replace(/>\s+</g,'><')}</pre></figure>`;

const sourceGroups = {
  practice: [
    ['Charla del expositor · DevSecOps 2024',null],
    ['Manifiesto por el Desarrollo Ágil de Software','https://agilemanifesto.org/iso/es/manifesto.html'],
    ['KCS v6 Practices Guide','https://library.serviceinnovation.org/KCS/KCS_v6/KCS_v6_Practices_Guide'],
    ['Diátaxis · Brújula','https://diataxis.fr/compass/'],
    ['Write the Docs · Docs as Code','https://www.writethedocs.org/guide/docs-as-code/'],
    ['DORA · Documentation quality','https://dora.dev/capabilities/documentation-quality/']
  ],
  implementation: [
    ['GitHub Docs · CODEOWNERS','https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners'],
    ['MkDocs · CLI','https://www.mkdocs.org/user-guide/cli/'],
    ['Material for MkDocs · Changelog','https://squidfunk.github.io/mkdocs-material/changelog/'],
    ['Zensical · Migración desde MkDocs','https://zensical.org/docs/compatibility/mkdocs/migration/'],
    ['Docusaurus · Documentación','https://docusaurus.io/docs'],
    ['Backstage · TechDocs','https://backstage.io/docs/features/techdocs/'],
    ['Vale · Documentación','https://docs.vale.sh/'],
    ['Gitleaks · Documentación','https://github.com/gitleaks/gitleaks'],
    ['Atlassian · Planes de Confluence Cloud','https://support.atlassian.com/confluence-cloud/docs/learn-about-confluence-cloud-plans'],
    ['OpenAPI Specification','https://spec.openapis.org/oas/latest.html'],
    ['Architectural Decision Records','https://adr.github.io/'],
    ['Microsoft Learn · Acceso por documento','https://learn.microsoft.com/en-us/azure/search/search-document-level-access-overview']
  ]
};
export function bibliography(group) {
  return `<div class="bibliographic-list">${sourceGroups[group].map(([title,url])=>
    `<article><strong>${url?link([title,url]):escape(title)}</strong></article>`
  ).join('')}</div>`;
}
