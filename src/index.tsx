import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import Router from './router/Router' // Import your custom Router component
import WishlistProvider from './context/wishlist/WishlistProvider'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <WishlistProvider>
        <Router />
      </WishlistProvider>
    </BrowserRouter>
  </React.StrictMode>
)

reportWebVitals()
