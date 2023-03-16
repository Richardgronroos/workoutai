import { Grid, Typography } from '@mui/material'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import { Field, Form } from 'formik'
import React, { useState, useCallback, useRef, useEffect } from 'react'
import { SelectedPlansContext } from '../../Contexts/SelectedPlansContext'
import { ButtonWithArrow } from '../Shared/ButtonWithArrow'
import { DietarySection } from './DietarySection'
import { GoalSection } from './GoalSection'
import { PreviewSection } from './PreviewSection'
import { ScheduleSection } from './ScheduleSection'
import './SectorMain.css'
import { WorkoutSections } from './WorkoutSections'
export const sSectionMain = () => {
  const [buttonText, setButtonText] = useState('Next')
  const [currentStep, setCurrentStep] = useState('workoutStep')

  const handleNextStep = () => {
    switch (currentStep) {
      case 'workoutStep':
        setCurrentStep('dietaryStep')
        break
      case 'dietaryStep':
        setCurrentStep('previewStep')

        setButtonText('Download the program(s) selected')
        break
      default:
        break
    }

    console.log(currentStep)
  }
  const getSection = useCallback(() => {
    switch (currentStep) {
      case 'workoutStep':
        return <WorkoutSections />
      case 'dietaryStep':
        return <DietarySection />

      case 'previewStep':
        return <PreviewSection />

      default:
        return <WorkoutSections />
    }
  }, [currentStep])
  return (
    <SelectedPlansContext>
      <Form className="sector-main-container">
        <Grid container>
          <Grid item>{getSection()}</Grid>

          <Grid
            item
            width="100%"
            justifyContent="flex-end"
            display="flex"
            mr={4}
          >
            <ButtonWithArrow
              type="button"
              action={handleNextStep}
              text={buttonText}
            />
          </Grid>
        </Grid>
      </Form>
    </SelectedPlansContext>
  )
}

{
  /*       <GoalSection />
      <ScheduleSection />
      <DietarySection />
      <PreviewSection /> */
}

/* I want you to act as a personal trainer and customize a training plan. My goal is to gain muscle mass, i am a male and want a workout plan which is adjusted to an advanced level. I want to vary between gym and home workouts and some days i also want to go for a walk. I want to workout 3 days a week and 60 minutes per session */
