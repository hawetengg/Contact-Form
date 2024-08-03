import { useState } from 'react'
import {ContactForm} from "./components/ContactForm"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ContactForm/>

    </div>
    
  )
}

export default App
