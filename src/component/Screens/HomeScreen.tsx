import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import React from 'react'
import { Link } from 'react-router-dom'
import { PredefinedPlans } from '../Predefined/PredefinedPlans'
import { ButtonWithArrow } from '../Shared/ButtonWithArrow'
import './HomeScreen.css'
export const HomeScreen = () => {
  return (
    <Grid container direction="column" spacing={2} className="home-screen">
      <Grid item className="placeholder-text">
        <p>Create Your Own AI Personal Trainer</p>
        <p>Quick and Easy With Step By Step Guidance</p>
      </Grid>

      <Grid borderBottom="1px solid black" pb={5} item className="start-button">
        <ButtonWithArrow type="button" text="Get Started" />
      </Grid>
      {/* <Grid item>
        <Grid container mt={2} border="1px solid black" padding="20px">
          <Typography variant="h5">Predefined templates</Typography>
          <PredefinedPlans />
        </Grid>
      </Grid> */}
      <Grid item>
        <Grid container>
          <Typography>Contact</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}
