import { person } from '../../../data/person.js'

export const speaker = {
  ...person,
  talkRole: 'GitHub Enterprise Platform',
  tags: person.tags
}
