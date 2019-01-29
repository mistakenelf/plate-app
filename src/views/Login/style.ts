import styled from 'styled-components/macro'

import media from '../../lib/media'

export const Container = styled.div`
  height: 100%;
  background: ${props => props.theme.blueDarker};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
`

export const Icon = styled.div`
  font-size: 30px;
`

export const FormContainer = styled.div`
  width: 100%;

  ${media.tablet`
    width: 500px;
  `}
`
