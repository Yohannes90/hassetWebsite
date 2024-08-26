import './App.css'
import AboutUs from './components/AboutUs'
// import BecomeAnAgent from './components/BecomeAnAgent'
import Footer from './components/Footer'
import Hero from './components/Hero'
import LatestPackages from './components/LatestPackages'
import Navbar from './components/Navbar'
import NeigborhoodListings from './components/NeigborhoodListings'
import Services from './components/Services'
import Team from './components/Team'
import Testimonials from './components/Testimonials'

function App() {

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <AboutUs />
        <LatestPackages />
        <Services />
        <NeigborhoodListings />
        <Team />
        <Testimonials />
        {/* <BecomeAnAgent /> */}

      </main>

      <Footer />
    </>
  )
}

export default App
