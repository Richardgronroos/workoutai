import { Grid } from '@mui/material'
import { Field } from 'formik'
import React from 'react'

export const DietComplementSection = () => {
  return (
    <Grid container>
      <Grid item>
        <Field
          component="textarea"
          placeholder="Specify what your dietary restrictions are"
          name="workoutDescription"
          className="textarea-field"
        />
      </Grid>
    </Grid>
  )
}
