import styled from 'styled-components'

interface SpaceProps {
  margin: string
}

export const Space = styled.div`
  margin: ${(props: SpaceProps) => props.margin};
`
