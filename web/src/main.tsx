import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'sonner'
import './styles/globals.css'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Toaster richColors position='top-right' />
      <App />
    </BrowserRouter>
  </StrictMode>,
)



