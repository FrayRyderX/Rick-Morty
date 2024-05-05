import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Rick&MortyApp.tsx'
import './style/global.styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
