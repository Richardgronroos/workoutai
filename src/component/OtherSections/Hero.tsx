import { Grid, Typography } from '@mui/material'
import React from 'react'
import { ButtonWithArrow } from '../Shared/ButtonWithArrow'

export const Hero = () => {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="flex-start"
      alignItems="center"
      className="home-screen"
    >
      <Grid item md={6}>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          m={2}
          direction="column"
          spacing={2}
        >
          <Typography variant="h4" fontWeight="bold">
            Begin Your Journey
          </Typography>
          <Grid item className="placeholder-text" width="35rem">
            <Typography variant="h6">
              Create Your Own AI Personal Trainer
            </Typography>
            <p>
              Are you looking to improve your health,{' '}
              <span style={{ color: '#a2bfbc', fontWeight: 'bold' }}>
                boost your energy
              </span>
              , and feel your best? A workout program is the perfect place to
              start! Regular exercise has countless benefits, from strengthening
              your muscles and bones to{' '}
              <span style={{ color: '#a2bfbc', fontWeight: 'bold' }}>
                reducing your risk of chronic diseases
              </span>
              like heart disease and diabetes. With a{' '}
              <span style={{ color: '#a2bfbc', fontWeight: 'bold' }}>
                tailored workout program
              </span>
              , you can set clear goals, track your progress, and
              <span style={{ color: '#a2bfbc', fontWeight: 'bold' }}>
                achieve the results you want.
              </span>{' '}
              Whether you're looking to build muscle, lose weight, or simply
              feel more energized, a workout program is the first step on your
              journey to a{' '}
              <span style={{ color: '#a2bfbc', fontWeight: 'bold' }}>
                healthier, happier you.
              </span>
            </p>
          </Grid>
          <Grid pb={5} item className="start-button">
            <ButtonWithArrow type="button" text="Get Started" />
          </Grid>
        </Grid>
      </Grid>
      {/* 
      <Grid item>
        <img
          src="https://previews.123rf.com/images/nikolasjkd/nikolasjkd2201/nikolasjkd220100039/181818268-sporty-couple-working-out-with-dumbbells-on-wall-background-muscular-man-and-woman.jpg"
          alt="coupletraining"
          width="100%"
          height="360px"
        />
      </Grid> */}
      <Grid item md={6}>
        <img
          width="70%"
          height="70%"
          src={require('../../assets/chalkclap.png')}
          alt="Chalk Clap"
          style={{ borderRadius: '50%', boxShadow: '0px 0 10px 3px #000' }}
        />
      </Grid>
    </Grid>
  )
}
