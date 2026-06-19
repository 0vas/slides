import { person } from '../../../data/speaker/person.js'

export const speaker = {
  ...person,
  talkRole: 'GitHub Enterprise Platform',
  shortName: '@0vas',
  location: '0 = cero, no letra O',
  profiles: [
    { label: 'GitHub', value: 'github.com/0vas', url: 'https://github.com/0vas' },
    { label: 'X', value: 'x.com/0vas', url: 'https://x.com/0vas' }
  ],
  tags: person.tags
}
