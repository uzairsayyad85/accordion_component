import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app-v1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
