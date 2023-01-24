import userEvent from '@testing-library/user-event'
import React, { useContext, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navigation } from './component/Navigation/Navigation'
import { FormScreen } from './component/Screens/FormScreen'
import { HomeScreen } from './component/Screens/HomeScreen'
import { LoginScreen } from './component/Screens/LoginScreen'
import { SignupScreen } from './component/Screens/SignupScreen'
import { ThemeContext } from './Contexts/ThemeContext'
import { UserContext, UserContextProvider } from './Contexts/UserContext'
function App() {
  const mode = useContext(ThemeContext)
  const user = useContext(UserContext)

  useEffect(() => {
    //TODO: När man loggar in ska man egentlingen skicka in sitt användarnamn som parameter.
    //i backend kommer man kommunicera med sql servern och mappa användarnamnet till en användare
    //om den hittas så loggas man in
    //och då sparas användaren i en context så vi har tillgång till den datan i hela appen
    const url =
      'https://localhost:44349/api/account/9e9f9f17-75f2-4e74-9577-b70de859af77'

    fetch(url)
      .then((res) => res.json())
      .then((userResponse) => user?.setUser(userResponse))
  })
  return (
    <UserContextProvider>
      <div
        className="App"
        style={{ backgroundColor: mode.primary.main, color: mode.primary.text }}
      >
        <Navigation />
        <div style={{ minHeight: '90vh' }}>
          <Routes>
            <Route path="/get-started" element={<FormScreen />}></Route>
            <Route path="/signup" element={<SignupScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/" element={<HomeScreen />}></Route>
          </Routes>
        </div>
        <div className="footer">
          Woai AB
          <p>richard.gronroos@hotmail.com</p>
          <p>Hittepåvägen 23 302 99 Halmstad</p>
        </div>
      </div>
    </UserContextProvider>
  )
}

export default App
