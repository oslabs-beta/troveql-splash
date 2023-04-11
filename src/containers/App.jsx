import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContentContainer from './ContentContainer'
import Team from './Team'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="App">
      <Header/>
      <ContentContainer/>
      <Team/>
      <Footer/>
    </div>
  )
}

export default App
