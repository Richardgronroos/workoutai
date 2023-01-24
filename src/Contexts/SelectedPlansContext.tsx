import React, { createContext, useState } from 'react'
import { PlanItem } from '../component/Predefined/PredefinedPlans'
import { PropsWithChildren } from './UserContext'

export type PlansContextType = {
  selectedPlans: PlanItem[]
  setSelectedPlans: React.Dispatch<React.SetStateAction<PlanItem[]>>
}
export const PlansContext = createContext<PlansContextType | null>(null)

export const SelectedPlansContext: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [selectedPlans, setSelectedPlans] = useState<PlanItem[]>(
    [] as PlanItem[],
  )

  return (
    <PlansContext.Provider value={{ selectedPlans, setSelectedPlans }}>
      {children}
    </PlansContext.Provider>
  )
}
