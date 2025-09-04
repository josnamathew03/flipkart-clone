import React from 'react'

import Header from './components/header/Header'
import './App.css'
import Body from './components/body/Body'
import Footer from './components/footer/Footer'
import HeaderM from './mobileComponent/headerM/HeaderM'
import BodyM from './mobileComponent/bodyM/BodyM'

import ProductsProvider from './components/body/ProductsProvider'

function App () {
  return (
    <div className='App'>
        

      <div className='desktop'>
        <Header />
        <Body />
        <Footer />
      </div>
      <div className='mobile'>
        
        <ProductsProvider>
          <HeaderM />
          <BodyM />
        </ProductsProvider>
      </div>
    </div>
  )
}

export default App
