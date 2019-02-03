import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

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
  font-size: 30px;
  margin-bottom: 20px;
  text-align: center;
  padding-top: 10px;
  text-transform: uppercase;
`

export const LinkContainer = styled(Link)`
  color: ${props => props.theme.blueLightest};
  padding-left: 10px;
  height: 40px;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;

  &:hover {
    background: ${props => props.theme.blueDark};
  }
`
