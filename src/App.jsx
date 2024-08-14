import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/header'
import Footer from './components/footer/Footer'
import Content from './components/contents/Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  )
}

export default App
