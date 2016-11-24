import { Banner, Heading } from 'rebass'

import React from 'react'
import heroImage from '../../assets/images/background.png'

function Header() {
  return (
    <Banner
      align="center"
      backgroundImage={heroImage}
    >
      <Heading
        level={2}
        size={0}
      >
        Plate
      </Heading>
    </Banner>
  )
}

export default Header
