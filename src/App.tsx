import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseCallbackPage from './modules/AsFunction/UseCallbackPage'
import { Home } from './modules/Home'
import UseEffectCounter from './modules/AsFunction/UseEffectCounter'
import AsFunctionPage from './modules/AsFunction/AsFunctionPage'
import ContextDemo from './modules/ContextDemo/ContextDemo'
import CustomHookPage from './modules/AsFunction/CustomHookPage'
import MuiPage from './modules/Mui/MuiPage'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* { <UseCallbackPage />} */}
     {/* <CustomHookPage/> */}
     { <AsFunctionPage/> }
     {/* <Home/> */}
     {/* <ContextDemo/> */}
     {/* <MuiPage/> */}
    </>
  )
}

export default App
