// import { useState } from 'react'
import Header from './components/Header/Header'
import './App.css';
import Empower from './components/Empower/Empower';
import Why from './components/Why/Why';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <main>
        <Empower/>
        <Why/>
      </main>
    </>
  )
}

export default App
