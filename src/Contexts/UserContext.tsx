import { ReactNode, useState, createContext } from 'react'
import { UserDto } from '../Types/Account'

export type PropsWithChildren = { children: ReactNode }

export type UserContextType = {
  user: UserDto | null
  setUser: React.Dispatch<React.SetStateAction<UserDto | null>>
}

export const UserContext = createContext<UserContextType | null>(null)

export const UserContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [user, setUser] = useState<UserDto | null>(null)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

/* import React, { createContext, useState } from 'react'
import { UserDto } from '../Types/Account'

interface UserContextType {
  user: UserDto | null
  setUserData: (userData: UserDto) => void
}

export const UserContext = createContext<UserContextType>({
  user: null,
  setUserData: (userData: UserDto) => {},
})
const UserContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserDto | null>(null)

  const setUserData = (userData: UserDto) => {
    setUser(userData)
  }

  return (
    <UserContext.Provider value={{ user, setUserData }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
 */
