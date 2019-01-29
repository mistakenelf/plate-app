import styled from 'styled-components/macro'

import { AppTheme } from '../../lib/theme'
interface InputProps {
  hasError: boolean
  theme: AppTheme
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Input = styled.input`
  background: ${props => props.theme.greyLight};
  border: 2px solid
    ${(props: InputProps) =>
      props.hasError ? props.theme.red : props.theme.greyLighter};
  color: ${props => props.theme.greyDarkest};
  border-radius: 5px;
  padding: 10px;
  font-size: 18px;

  &:focus {
    outline: none;
  }
`

export const Label = styled.label`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${props => props.theme.darkGrey};
  margin-bottom: 5px;
`
