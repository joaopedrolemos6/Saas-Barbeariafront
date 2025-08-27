import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom' // <<< Importe esta linha

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>  {/* <<< Adicione esta tag */}
      <App />
    </BrowserRouter> {/* <<< E esta tag de fechamento */}
  </React.StrictMode>,
)