import React, { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home'
import Services from './pages/Services'
import ReactLenis from 'lenis/react'
import About from './pages/About'
import Work from './pages/Work'
import ContactSummary from './pages/ContactSummary'
import Contact from './pages/Contact'
import Loader from './components/Loader'

const App = () => {
  const [showLoader, setShowLoader] = useState(true);
  return (
    <ReactLenis root className='relative w-screen overflow-hidden min-h-screen'>


      {
        showLoader && <Loader onFinish={() => setShowLoader(false)} />
      }
        {!showLoader && (
        <>
          <NavBar />
          <Home />
          <Services />
          <About />
          <Work />
          <ContactSummary />
          <Contact />
        </>
      )}
    </ReactLenis>
  )
}

export default App