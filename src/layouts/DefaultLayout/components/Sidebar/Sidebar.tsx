import React from 'react'

import { SidebarContainer, Title, LinkContainer } from './style'

function Sidebar() {
  return (
    <SidebarContainer>
      <Title>Plate</Title>
      <LinkContainer to="/dashboard">Dashboard</LinkContainer>
      <LinkContainer to="/tasks">Tasks</LinkContainer>
    </SidebarContainer>
  )
}

export default Sidebar
