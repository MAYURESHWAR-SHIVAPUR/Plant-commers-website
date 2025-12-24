import React, { useEffect, useState } from 'react'
import Approuter from './routes/Approuter'
import Error from "./pages/Error/Error"

const App = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(
    window.innerWidth < 1000
  )

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1000)
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return isSmallScreen ? <Error /> : <Approuter />
}

export default App
