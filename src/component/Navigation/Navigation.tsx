import { Grid } from '@mui/material'
import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { UserContext } from '../../Contexts/UserContext'
import { FormScreen } from '../Screens/FormScreen'
import { HomeScreen } from '../Screens/HomeScreen'
import { SignupScreen } from '../Screens/SignupScreen'
import styles from './Navbar.module.css'
export const Navigation = () => {
  const user = useContext(UserContext)

  const logoutHandler = () => {
    user?.setUser(null)
  }

  const LoggedInUserLinks = () => {
    if (user?.user) {
      return (
        <Grid container>
          <a href="/myPlans">My plans</a>
          <a href="/myWorkouts">My Workouts</a>
        </Grid>
      )
    } else return null
  }
  return (
    <div className="navigation">
      <nav className={styles.navbar}>
        <a href="/" className={styles.brand}>
          Workout & Diet Planner
        </a>
        <div className={styles.menu}>
          <a href="/">Home</a>
          <LoggedInUserLinks />

          <a href="/signup">Signup</a>

          {user?.user ? (
            <a onClick={logoutHandler} href="/">
              Logout
            </a>
          ) : (
            <a href="/login">Login</a>
          )}
        </div>
      </nav>
    </div>
  )
}
