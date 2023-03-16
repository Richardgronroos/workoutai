import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import React from 'react'
import { Link } from 'react-router-dom'
import { About } from '../OtherSections/About'
import { Footer } from '../OtherSections/Footer'
import { Hero } from '../OtherSections/Hero'
import { OfferSection } from '../OtherSections/OfferSection'
import { PredefinedPlans } from '../Predefined/PredefinedPlans'
import { ButtonWithArrow } from '../Shared/ButtonWithArrow'
import './HomeScreen.css'
export const HomeScreen = () => {
  return (
    <Grid
      container
      direction="column"
      spacing={2}
      className="home-screen-container"
    >
      <Grid item>
        <Hero />
      </Grid>

      <Grid item>
        <OfferSection />
      </Grid>

      <Grid item>
        <About />
      </Grid>
    </Grid>
  )
}

{
  /* <Grid item>
        <Grid container mt={2} border="1px solid black" padding="20px">
          <Typography variant="h5">Predefined templates</Typography>
          <PredefinedPlans />
        </Grid>
      </Grid> */
}
