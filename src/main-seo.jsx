import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppSeo from './App-seo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppSeo />
  </StrictMode>,
)
