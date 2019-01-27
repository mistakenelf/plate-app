import styled from 'styled-components/macro'

export const Container = styled.div`
  background: ${props => props.theme.greyLightest};
  border-radius: 3px;
  width: 100%;
`

export const Header = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.div`
  color: ${props => props.theme.greyDarkest};
  font-size: 24px;
  font-weight: 600;
`

export const Content = styled.div`
  padding: 10px;
`
