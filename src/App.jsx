import React, { useEffect, useState } from 'react'
import Approuter from './routes'
import Error from "./pages/Error/Error"
import Butterfly from './components/RiveButterfly/Butterfly'

const App = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(
    window.innerWidth < 500
  )

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 500)
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return isSmallScreen ? <Error /> :
    <div>
      <Butterfly />
      <Approuter />
    </div>
}

export default App
