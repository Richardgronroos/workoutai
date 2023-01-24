import React, { useState, createContext } from 'react'
import { theme } from './theme'

type ThemeContextProviderProps = {
  children: any
}
export const ThemeContext = createContext(theme)

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
  children,
}) => {
  const [mode, setMode] = useState(theme)
  return <ThemeContext.Provider value={mode}>{children}</ThemeContext.Provider>
}
