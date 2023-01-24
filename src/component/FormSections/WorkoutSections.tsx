import { Grid, Icon, SvgIcon, Tooltip, Typography } from '@mui/material'
import { Field } from 'formik'
import React from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'

export const WorkoutSections = () => {
  return (
    <Grid container m={2} spacing={2} direction="column">
      <Grid item>
        <Grid container mr={1}>
          <Field
            className="text-field"
            style={{ marginRight: '10px' }}
            placeholder="Whats your goal?"
            name="goal"
          />
          <Tooltip title="E.g Weightloss or Gaining Muscle Mass">
            <Icon component={InfoOutlinedIcon} />
          </Tooltip>
        </Grid>
      </Grid>
      <Grid item>
        <Field
          as="select"
          defaultValue="Male"
          name="gender"
          className="dropdown-field"
        >
          <option>Male</option>
          <option>Female</option>
        </Field>
      </Grid>
      <Grid item>
        <Field
          as="select"
          defaultValue="Beginner"
          name="level"
          className="dropdown-field"
        >
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
          <option>Elite Athlete</option>
        </Field>
      </Grid>

      <Grid item>
        <Field
          type="number"
          placeholder="How many days per week?"
          min="1"
          max="7"
          name="daysPerWeek"
          className="text-field"
          style={{ marginRight: '10px' }}
        />
        <Tooltip title="Specify how many days per week you will be training">
          <Icon component={InfoOutlinedIcon} />
        </Tooltip>
      </Grid>
      <Grid item>
        <Field
          type="number"
          placeholder="Workout time per session"
          min="15"
          name="timePerSession"
          className="text-field"
        />
      </Grid>
      <Grid item>
        <Field
          as="select"
          defaultValue="Minutes"
          className="dropdown-field"
          name="timeUnit"
        >
          <option>Minutes</option>
          <option>Hours</option>
        </Field>
      </Grid>
      <Grid item>
        <Typography mb={1} variant="h6">
          Be as descriptive as you can about your prefered workout form
        </Typography>
        <Grid container>
          <Field
            component="textarea"
            placeholder="Describe workout form"
            name="workoutDescription"
            className="textarea-field"
            style={{ marginRight: ' 10px' }}
          />
          <Tooltip
            title="  Try to be specific about what kind of workout you want to dedicate
            yourself to"
          >
            <Icon component={InfoOutlinedIcon} />
          </Tooltip>
        </Grid>
      </Grid>
    </Grid>
  )
}
