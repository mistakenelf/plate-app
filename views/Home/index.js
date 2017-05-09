import AdvertisingSection from './components/AdvertisingSection'
import Footer from '../../components/Footer/Footer'
import Header from './components/Header'
import PriceSection from './components/PriceSection/PriceSection'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Header />
      <AdvertisingSection />
      <PriceSection />
      <Footer />
    </div>
  )
}

export default Home
