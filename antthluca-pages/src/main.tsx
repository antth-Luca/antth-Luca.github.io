import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SobreMim from './pages/SobreMim'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SobreMim />
  </StrictMode>,
)
