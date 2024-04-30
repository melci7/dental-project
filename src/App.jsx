import './styles.css'
import Top from "./components/Top"
import Maps from './components/Maps'
import Card from './components/Card'
import Services from './components/Services'
import Footer from './components/Footer'
import TopFooter from './components/TopFooter'

function App() {

  return (
    <div>
      <Top />
      <Services />
      <Card />
      <Maps />
      <TopFooter />
      <Footer />
    </div>
  )
}

export default App
