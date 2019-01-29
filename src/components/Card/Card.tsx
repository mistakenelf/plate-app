import React from 'react'

import { Container, Header, Title, Content } from './style'

interface CardProps {
  title: string
  extra: React.ReactNode
  children: React.ReactNode
}

function Card({ title, extra, children }: CardProps) {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        {extra}
      </Header>
      <Content>{children}</Content>
    </Container>
  )
}

export default Card
