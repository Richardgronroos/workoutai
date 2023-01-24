import { Typography, Grid } from '@mui/material'
import { Formik } from 'formik'
import { SectionMain } from '../FormSections/SectionMain'
import './FormScreen.css'
export const FormScreen = () => {
  /*   const initialValues = {
    goal: 'Gaining Muscle Mass',
    gender: 'Male',
    level: 'Advanced',
    workoutDescription:
      'I want to vary between gym and home workouts and some days i also want to go for a walk',
    daysPerWeek: 3,
    timePerSession: 60,
    timeUnit: 'Minutes',
  } */
  const initialValues = {
    goal: '',
    gender: '',
    level: '',
    workoutDescription: '',
    daysPerWeek: null,
    timePerSession: null,
    timeUnit: 'Minutes',
  }
  const submitHandler = (values: any) => {
    console.log('from formscreen', values)
  }

  /*  const goalSchema = Yup.object().shape({
    goal: Yup.string().required("Goal is required"),
  }); */
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      className="form-screen"
    >
      <Grid item className="shadow-drop-center">
        <Typography variant="h5">Settings</Typography>
        <Formik initialValues={initialValues} onSubmit={submitHandler}>
          <SectionMain />
        </Formik>
      </Grid>
    </Grid>
  )
}
