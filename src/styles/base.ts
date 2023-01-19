import { MediaQueries, Breakpoints } from './types'

export const breakpointMap: { [key: string]: number } = {
  xs: 0,
  sm: 767,
  md: 999,
  lg: 1239,
  xl: 1488,
}

const breakpoints: Breakpoints = Object.values(breakpointMap).map(
  (breakpoint) => `${breakpoint}px`,
)

const mediaQueries: MediaQueries = {
  xs: `@media screen and (min-width: ${breakpointMap.xs}px)`,
  sm: `@media screen and (min-width: ${breakpointMap.sm}px)`,
  md: `@media screen and (min-width: ${breakpointMap.md}px)`,
  lg: `@media screen and (min-width: ${breakpointMap.lg}px)`,
  xl: `@media screen and (min-width: ${breakpointMap.xl}px)`,
}

export default {
  breakpoints,
  mediaQueries,
}
