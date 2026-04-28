import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';
import SearchContextShare from './context/SearchContextShare.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <GoogleOAuthProvider clientId="540404990086-ilnemfk4b71i6ieu9v61779s3mb13es4.apps.googleusercontent.com">
      <SearchContextShare>
         <App />
      </SearchContextShare>
     
      </GoogleOAuthProvider>
    
    </BrowserRouter>
   
  </StrictMode>
)
