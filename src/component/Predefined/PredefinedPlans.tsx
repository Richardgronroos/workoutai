import { Grid, Icon, SvgIcon, Tooltip } from '@mui/material'
import React, { useState, useContext } from 'react'
import './PredefinedPlans.css'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import {
  PlansContext,
  SelectedPlansContext,
} from '../../Contexts/SelectedPlansContext'
export type PlanItem = {
  id: number
  name: string
  description: string
}
export const PredefinedPlans: React.FC<{ data?: any[] }> = ({ data }) => {
  const plansContext = useContext(PlansContext)
  const exampleData: PlanItem[] = [
    {
      id: 1,
      name: 'Muscle Mass 3000',
      description: 'Great for building muscle mass',
    },
    {
      id: 2,
      name: 'Calisthenics',
      description: 'This program is great for mastering Calisthenics',
    },
    { id: 3, name: 'Mr.Olympia', description: 'Focus on size and definition' },
    {
      id: 4,
      name: 'The 300',
      description: 'Lots of repetition for definition',
    },
  ]
  const [plans, setPlans] = useState<PlanItem[]>(
    data ?? exampleData.slice(0, 3),
  )

  const [index, setIndex] = useState(3)
  const handleClick = () => {
    if (index < plans.length) {
      setPlans(plans.slice(index, index + 3))
      setIndex(index + 1)
    }
  }
  const reset = () => {
    setPlans(plans.slice(0, 3))
    setIndex(3)
  }

  const selectCardHandler = (newPlan: PlanItem) => {
    if (plansContext?.selectedPlans) {
      const newPlans = [...plansContext?.selectedPlans, newPlan]
      plansContext?.setSelectedPlans(newPlans)
    } else {
      plansContext?.setSelectedPlans([newPlan])
    }
  }

  console.log(plansContext?.selectedPlans)
  return (
    <Grid container spacing={2} mt={2} mb={1}>
      <Grid item className="grid">
        {plans.map((plan) => {
          return (
            <Tooltip title="Add to list" placement='bottom'>
              <Grid
                style={{ cursor: 'pointer' }}
                item
                md={6}
                onClick={() => selectCardHandler(plan)}
              >
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <p className="title">{plan.name}</p>
                      <p>Hover Me</p>
                    </div>
                    <div className="flip-card-back">
                      <p className="title"></p>
                      <p>{plan.description}</p>
                    </div>
                  </div>
                </div>
              </Grid>
            </Tooltip>
          )
        })}
      </Grid>

      {plans.length > 3 && (
        <Grid item className="load-more-plans">
          <SvgIcon
            onMouseEnter={handleClick}
            onMouseLeave={reset}
            className="arrow-icon"
            viewBox="0 0 24 24"
            fontSize="large"
          >
            <KeyboardDoubleArrowRightIcon />
          </SvgIcon>
        </Grid>
      )}
    </Grid>
  )
}
