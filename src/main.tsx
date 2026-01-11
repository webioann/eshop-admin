import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { ClerkProvider } from '@clerk/clerk-react'
import App from './components/App/App.tsx'
import { BrowserRouter } from "react-router-dom"
import './index.css'

// Import your Publishable Key ==========================================
  const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
  if (!PUBLISHABLE_KEY) {
    throw new Error('Add your Clerk Publishable Key to the .env file')
  }

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
