/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import Navbar from './components/LandingPage/Navbar/Navbar'
import './index.css'
import { store } from './redux/store'
import routes from './routes'

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar/>
     <Provider store={store}>
     <RouterProvider router={routes} />
     </Provider>
    
    

    
  </React.StrictMode>,
)
