import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import store from './utils/store/store.js'
import { Provider } from 'react-redux'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store} >
    <App />
    </Provider>
  </React.StrictMode>,
)
