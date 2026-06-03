import linkedinQrImage from '../shared/public/speaker/linkedin-qr.svg?url'

export const person = {
  name: 'Oscar Lobaton Salas',
  shortName: 'Oscar Lobaton',
  initials: 'OL',
  headline: 'Platform Product Lead',
  organization: 'Credicorp',
  location: 'LatAm',
  email: '',
  website: '',
  photoImage: '',
  linkedin: {
    label: 'LinkedIn',
    handle: 'in/oscarlobatons',
    url: 'https://www.linkedin.com/in/oscarlobatons/',
    qrImage: linkedinQrImage
  },
  profiles: [
    { label: 'GitHub', value: '@0vas', url: 'https://github.com/0vas' },
    { label: 'X', value: '@0vas', url: 'https://x.com/0vas' }
  ],
  roles: [
    'Platform Product Lead en Credicorp',
    'Investigador colaborador en LABIAR-UNI',
    'DevOps Ambassador de PeopleCert'
  ],
  tags: [
    'Platform engineering',
    'GitHub governance',
    'DevSecOps',
    'AI adoption'
  ]
}
