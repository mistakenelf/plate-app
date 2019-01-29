import styled from 'styled-components/macro'

import media from '../../../../lib/media'

export const Nav = styled.div`
  background: ${props => props.theme.blueDarker};
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;

  ${media.tablet`
    display: none;
  `}
`

export const Brand = styled.div`
  color: ${props => props.theme.blueLightest};
  font-size: 28px;
  font-weight: 400;
`
