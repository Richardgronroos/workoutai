import { Grid, Typography } from '@mui/material'
import React from 'react'
import { PredefinedPlans } from '../Predefined/PredefinedPlans'

export const WorkoutGenerator = () => {
  const generatedPlans = [
    {
      name: 'Muscle Mass 3000',
      description: 'Great for building muscle mass',
    },
  ]
  return (
    <>
      <Typography variant="h5">Suggested Diet Programs </Typography>
      <PredefinedPlans data={generatedPlans} />
    </>
  )
}
