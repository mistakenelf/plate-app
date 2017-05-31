import AdvertisingSection from './components/AdvertisingSection'
import DonateSection from './components/DonateSection'
import Footer from '../../components/Footer/Footer'
import Header from './components/Header'
import React from 'react'

export default function Home() {
  return (
    <div>
      <Header />
      <AdvertisingSection />
      <DonateSection />
      <Footer />
    </div>
  )
}
