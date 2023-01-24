import { Grid } from "@mui/material";
import { Field, ErrorMessage, Form } from "formik";
import React from "react";

export const ScheduleSection = () => {
  return (
    <Form>
      <Grid container spacing={2} direction="column">
        <Grid item>
          <label>How many times a week?</label>
        </Grid>
        <Grid item>
          <Field
            name="timesPerWeek"
            type="number"
            variant="outlined"
            margin="normal"
            fullWidth
          />
        </Grid>
      </Grid>
      <ErrorMessage name="timesPerWeek" component="div" />
    </Form>
  );
};
