import { Checkbox, FormControlLabel, FormLabel, Grid } from '@mui/material'
import { Field, ErrorMessage, Form, useField } from 'formik'
import React from 'react'
import InputTextField from '../Shared/InputTextField'
import './DietarySection.css'
import { DietComplementSection } from './DietComplementSection'
export const DietarySection = () => {
  const field = useField('dietRestrictions')
  console.log(field)
  return (
    <Grid container m={1} spacing={2} direction="column">
      <Grid item>
        <label>Do you have any dietary restrictions?</label>
      </Grid>
      <Grid item>
        <Grid container alignItems="center" spacing={1}>
          <Grid item>
            <Field
              name="dietRestrictions"
              type="checkbox"
              className="checkbox-1"
            />
          </Grid>
          <Grid item>
            <label>Yes</label>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>{field[0].value && <DietComplementSection />}</Grid>
    </Grid>
  )
}
