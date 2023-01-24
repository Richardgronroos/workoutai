import { Grid, Typography } from '@mui/material'
import { Formik, Form, Field } from 'formik'
import React, { useState } from 'react'
import { AccountDto, UserDto } from '../../Types/Account'
import { ButtonClickEffect } from '../Shared/ButtonClickEffect'
import './SignupScreen.css'
export const SignupScreen = () => {
  const [myUser, setMyUser] = useState({} as UserDto)
  const handleSubmit = (values: AccountDto) => {
    const url = 'https://localhost:44349/api/account'

    if (values) {
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((createdUser) => setMyUser(createdUser))

        .catch((err) => new Error('Something went wrong!'))
    }
  }
  return (
    <Formik
      initialValues={
        {
          username: '',
          password: '',
          email: '',
        } as AccountDto
      }
      onSubmit={handleSubmit}
    >
      <Form>
        <Grid
          className="signup-screen"
          container
          direction="column"
          spacing={2}
        >
          <Typography variant="h5">Sign up</Typography>

          <Grid item>
            <Field
              name="username"
              className="text-field"
              type="text"
              placeholder="Username"
            />
          </Grid>
          <Grid item>
            <Field
              name="password"
              className="text-field"
              type="password"
              placeholder="Password"
            />
          </Grid>
          <Grid item>
            <Field
              name="email"
              className="text-field"
              type="email"
              placeholder="Email"
            />
          </Grid>
          <Grid item>
            <Field
              name="verifyEmail"
              className="text-field"
              type="email"
              placeholder="Verify email"
            />
          </Grid>
          <Grid item alignContent="center">
            <ButtonClickEffect type="submit" />
          </Grid>
        </Grid>
      </Form>
    </Formik>
  )
}
