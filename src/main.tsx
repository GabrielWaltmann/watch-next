import React from 'react'
import ReactDOM from 'react-dom/client'
import { Login } from './Pages/login/Index'
import { GlobalStyle } from './Style/Index'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle/>
    <Login />
  </React.StrictMode>,
)
