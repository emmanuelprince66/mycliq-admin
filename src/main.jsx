import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from "redux-persist/integration/react";
import {store,persistor} from './utils/store/store.js'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <PersistGate loading={null} persistor={persistor}>
  <Provider store={store} >
    <App />
    </Provider>
    </PersistGate>
  </React.StrictMode>,
)
