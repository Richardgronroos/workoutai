import { Grid } from '@mui/material'
import { useFormikContext } from 'formik'
import {
  PlansContext,
  SelectedPlansContext,
} from '../../Contexts/SelectedPlansContext'
import { IPlanCreateDto } from '../../generated'
import { DietGenerator } from '../Generators/DietGenerator'
import { WorkoutGenerator } from '../Generators/WorkoutGenerator'
import React, { useContext } from 'react'
export const PreviewSection = () => {
  //const { submitForm } = useFormikContext<IPlanCreateDto>();
  const plansContext = useContext(PlansContext)
  const selectedPlans = plansContext?.selectedPlans
  console.log('from preview', selectedPlans)
  return (
    <Grid container>
      <Grid item>
        <WorkoutGenerator />
      </Grid>
      <Grid item>
        <DietGenerator />
      </Grid>

      <Grid item>Selected plans {selectedPlans?.length}</Grid>
    </Grid>
  )
}
