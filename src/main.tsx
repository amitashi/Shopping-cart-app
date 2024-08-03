import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./index.css"
import { store } from './Redux/Store.ts'
import { Provider as ReduxProvider } from "react-redux";


ReactDOM.createRoot(document.getElementById('root')!).render(
 <ReduxProvider store={store}>
   <React.StrictMode>
    <App />
  </React.StrictMode>
 </ReduxProvider>,
)
