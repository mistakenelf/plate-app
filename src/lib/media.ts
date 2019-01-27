import { css, ThemedCssFunction } from 'styled-components'

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576
}

const media = (Object.keys(sizes) as (keyof typeof sizes)[]).reduce(
  (acc, label) => {
    acc[label] = (first: any, ...interpolations: any[]) => css`
      @media (min-width: ${sizes[label]}px) {
        ${css(first, ...interpolations)}
      }
    `
    return acc
  },
  {} as { [key in keyof typeof sizes]: ThemedCssFunction<any> }
)

export default media
