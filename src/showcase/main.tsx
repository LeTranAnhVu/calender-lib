import { RootStyles } from '@/lib/themes/root'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RootStyles />
    <App />
  </React.StrictMode>
)
