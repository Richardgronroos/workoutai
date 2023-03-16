import { Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import React from 'react'

export const About = () => {
  return (
    <>
      {' '}
      <Typography variant="h3" m={2} textAlign="center">
        About
      </Typography>
      <Grid
        container
        spacing={2}
        justifyContent="flex-start"
        paddingRight={2}
        p={2}
      >
        <Grid
          item
          md={3}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <img
            height="50%"
            width="50%"
            src={require('../../assets/logo.png')}
            alt="logo"
          />
        </Grid>
        <Grid item md={3}>
          Our company, Woai, was founded in 2022 with the mission of
          revolutionizing the fitness industry through the use of cutting-edge
          artificial intelligence technology. We understand that every
          individual has unique fitness goals and needs, which is why we use AI
          algorithms to generate personalized workout and diet plans for our
          clients.
        </Grid>
        <Grid item md={3}>
          Our team of experts, including certified personal trainers and
          registered dietitians, work closely with our AI system to ensure that
          the plans we generate are not only effective but also safe and
          sustainable. Our clients can access their plans through our
          user-friendly mobile app, which also includes features such as
          progress tracking and the ability to communicate with their personal
          trainer.
        </Grid>
        <Grid item md={3}>
          We are committed to helping our clients reach their fitness goals and
          improve their overall well-being. Our AI-generated plans are
          constantly updated and improved based on the latest research and
          feedback from our clients. With Woai, you can trust that you are
          getting the most effective and personalized fitness plan for your
          unique needs.
        </Grid>
      </Grid>
    </>
  )
}
