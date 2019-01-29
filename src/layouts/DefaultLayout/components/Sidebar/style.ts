import styled from 'styled-components/macro'

import media from '../../../../lib/media'

export const SidebarContainer = styled.div`
  width: 220px;
  height: 100%;
  position: fixed;
  background: ${props => props.theme.blueDarker};
  display: flex;
  flex-direction: column;
  display: none;

  ${media.tablet`
    display: flex;
  `}
`

export const Title = styled.div`
  color: ${props => props.theme.blueLightest};
  font-size: 28px;
  margin-bottom: 20px;
  text-align: center;
`

export const LinkContainer = styled.div`
  color: ${props => props.theme.blueLightest};
`
