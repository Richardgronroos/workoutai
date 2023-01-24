import { Grid, Typography } from '@mui/material'
import React from 'react'
import { PredefinedPlans } from '../Predefined/PredefinedPlans'
export const DietGenerator = () => {
  const generatedPlans = [
    {
      name: 'Mr Vegan',
      description: 'Great if you only want the greens and no meat',
    },
  ]
  return (
    <>
      <Typography variant="h5">Suggested Diet Programs </Typography>

      <PredefinedPlans data={generatedPlans} />
    </>
  )
}
