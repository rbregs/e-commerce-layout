import React from 'react'
import MyCarousel from './MyCarousel'
import ProductCollection from './ProductCollection'
import ProductofTheMonth from './ProductofTheMonth'
import Section from './Section'
import Footer from './Footer'
import Login from '../auth/Login'

export default function Home() {
  return (
    <>
    <div>
      <MyCarousel/>
        <ProductCollection/>
        <ProductofTheMonth />
        <Section />
        <Footer />
    
    </div>
    </>
    
  )
}
