import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContentContainer from './ContentContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="App">
      <Header/>
      <ContentContainer/>
      <div className='test'></div>
      <Footer/>
    </div>
  )
}

export default App
