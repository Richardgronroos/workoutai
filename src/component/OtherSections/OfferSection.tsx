import { Grid, Typography } from '@mui/material'
import React from 'react'
import { PredefinedPlans } from '../Predefined/PredefinedPlans'
import './OfferSection.css'
export const OfferSection = () => {
  return (
    <Grid
      container
      direction="column"
      className="offerSection"
      style={{ minHeight: '100vh' }}
    >
      {/* <Grid item>
        <PredefinedPlans />
      </Grid> */}
      <Grid item p={2}>
        <Typography
          textAlign="start"
          style={{ position: 'relative', left: '9rem' }}
          variant="h3"
        >
          Our Offer
        </Typography>
        <Grid
          container
          direction="column"
          spacing={2}
          mt={2}
          mb={1}
          ml={2}
          width="30rem"
        >
          <Grid item md={2}>
            <Typography variant="body1">
              Our team of experienced fitness experts and nutritionists will
              work closely with you to create a plan that fits your lifestyle
              and goals. Whether you want to lose weight, build muscle, or just
              maintain a healthy lifestyle, we have the expertise to help you
              get there. We take into consideration your current fitness level,
              medical history, and any dietary restrictions you may have to
              create a comprehensive plan that suits you.
            </Typography>
          </Grid>

          <Grid item md={2}>
            <Typography variant="body1">
              Our workout plans are designed to challenge you and help you reach
              your fitness goals. We offer a wide range of exercises that target
              different areas of the body, from strength training to cardio and
              flexibility workouts. We also provide video demonstrations and
              step-by-step instructions to ensure that you perform the exercises
              correctly and safely.
            </Typography>
          </Grid>

          <Grid item md={2}>
            <Typography variant="body1">
              Our diet plans are designed to complement your workouts and help
              you achieve your desired results. We offer meal plans that are
              customized to your calorie and nutrient needs, taking into account
              your dietary preferences and restrictions. Our nutritionists will
              also provide you with guidance on portion control and healthy
              eating habits to help you achieve long-term success.
            </Typography>
          </Grid>
          <Grid item md={2}>
            <Typography variant="body1">
              We provide personalized plans tailored to your unique needs and
              preferences, as well as ongoing support and guidance to help you
              stay on track. Invest in your health and fitness today by signing
              up for one of our customized plans.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item mt={10} justifyItems="center">
        <img
          style={{ borderRadius: '5%' }}
          alt="pic"
          height="60%"
          src={require('../../assets/couple.png')}
        />
      </Grid>
    </Grid>
  )
}
