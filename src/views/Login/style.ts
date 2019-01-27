import styled from 'styled-components'

import media from '../../lib/media'

export const Container = styled.div`
  height: 100%;
  background: ${props => props.theme.blueDarker};
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 15px;
  width: 100%;
  justify-content: center;
  align-items: center;

  ${media.tablet`
    grid-template-columns: 400px;
  `}
`
