import { Grid } from "@mui/material";
import { Field, ErrorMessage, Form } from "formik";
import InputTextField from "../Shared/InputTextField";

export const GoalSection = () => {
  return (
    <Form>
      <Grid container spacing={2} direction="column">
        <Grid item>
          <label>Whats your goal?</label>
        </Grid>
        <Grid item>
          <input name="goal" type="text" />
        </Grid>
      </Grid>
      <ErrorMessage name="goal" component="div" />
    </Form>
  );
};
