import styled from 'styled-components/macro'

export const Container = styled.div`
  background: ${props => props.theme.white};
  width: 100%;
  border-radius: 15px;
`

export const Header = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${props => props.theme.blue};
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`

export const Title = styled.div`
  color: ${props => props.theme.blueLightest};
  font-size: 30px;
  font-weight: 600;
`

export const Content = styled.div`
  padding: 15px;
`
