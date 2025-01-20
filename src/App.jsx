import { useState } from 'react'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import Home from '../src/pages/Homepage'
import Forrent from './pages/Forrentpage'
import Forsale from '../src/pages/Forsalepage'
import Advertisewithus from '../src/pages/Advertise'
import Contact from '../src/pages/Contactpage'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/forsale',
    element: <Forsale />,
  },
  {

    path: '/forrent',
    element: <Forrent />,
  },
  {

    path: '/advert',
    element: <Advertisewithus />,
  },
  {

    path: '/contact',
    element: <Contact/>,
  }
  
]);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router} />
      
        
    
    </>
  )
}

export default App
