import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BuscadorUsuariios from './components/BuscadorUsuarios'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BuscadorUsuariios />
  </StrictMode>,
)
