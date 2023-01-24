import { Grid, Typography } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Field, Form, Formik, useFormik } from 'formik'
import React, { useState, useContext } from 'react'
import { UserContext } from '../../Contexts/UserContext'
import { UserDto } from '../../Types/Account'
import { ButtonClickEffect } from '../Shared/ButtonClickEffect'
import './LoginScreen.css'
export const LoginScreen = () => {
  const userContext = useContext(UserContext)
  console.log(userContext?.user)
  const loginHandler = async () => {
    const url =
      'https://localhost:44349/api/account/9e9f9f17-75f2-4e74-9577-b70de859af77'
    try {
      const response = await fetch(url)
      const data: UserDto = await response.json()
      userContext?.setUser(data)
    } catch (error) {
      console.log(error)
    }
  }

  console.log(userContext?.user)
  const submitHandler = (values: LoginFormType) => {
    console.log(values)
    loginHandler()
  }

  type LoginFormType = {
    username: string
    password: string
    rememberMe: boolean
  }
  const initialValues: LoginFormType = {
    username: '',
    password: '',
    rememberMe: true,
  }
  return (
    <Formik initialValues={initialValues} onSubmit={submitHandler}>
      <Form>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="column"
          spacing={2}
          className="login-screen"
        >
          {/*   <Card sx={{ padding: 4, backgroundColor:"#f5f5f5"}}>
            <CardContent
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                flexDirection: 'column',
                alignItems: ' center',
              }}
            > */}
          <Grid item>
            <Typography mb={1} variant="h6">
              Username
            </Typography>

            <Field
              className="text-field"
              name="username"
              type="text"
              value={userContext?.user?.username}
            />
          </Grid>

          <Grid item>
            <Typography mb={1} variant="h6">
              Password
            </Typography>

            <Field
              className="text-field"
              name="password"
              type="password"
              value={userContext?.user?.password}
            />
          </Grid>
          <Grid item mt={1}>
            <Grid container spacing={1}>
              <Field type="checkbox" name="rememberMe" className="checkbox-1" />
              <Typography ml={1} variant="h6">
                Remember me
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <ButtonClickEffect title="Login" type="submit" />
          </Grid>
          {/*   </CardContent>
          </Card> */}
        </Grid>
      </Form>
    </Formik>
  )
}
