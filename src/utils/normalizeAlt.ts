import { capitalize } from 'lodash'

const normalizeAlt = (alt: string) =>
  alt
    .split('-')
    .map(capitalize)
    .join(' ')

export default normalizeAlt