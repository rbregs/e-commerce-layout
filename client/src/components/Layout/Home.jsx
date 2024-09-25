import React from 'react'
import MyCarousel from './MyCarousel'
import ProductCollection from './ProductCollection'
import ProductofTheMonth from './ProductofTheMonth'

export default function Home() {
  return (
    <>
    <div><MyCarousel/>
        <ProductCollection/>
        <ProductofTheMonth />
    
    </div>
    </>
    
  )
}
