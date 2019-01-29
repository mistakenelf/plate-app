import styled from 'styled-components/macro'

export const StyledButton = styled.button`
  border: 0;
  padding: 10px;
  background: ${props => props.theme.tealDark};
  border-radius: 5px;
  color: ${props => props.theme.tealLightest};
  font-size: 16px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 600;

  &:hover {
    background: ${props => props.theme.teal};
  }

  &:focus {
    outline: none;
  }
`
