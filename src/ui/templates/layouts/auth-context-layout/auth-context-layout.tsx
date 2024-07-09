import React, { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react'
type ContextType = { isAuthed: boolean; logIn: () => void; logOut: () => void }
const AuthContext = createContext<ContextType>({
  isAuthed: false,
  logIn: () => {},
  logOut: () => {},
})

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isAuthed, setIsAuthed] = useState(false)

  const logIn = () => {
    sessionStorage.setItem('isLoggedIn', 'true')
    setIsAuthed(true)
  }

  const logOut = () => {
    sessionStorage.removeItem('isLoggedIn')
    setIsAuthed(false)
  }

  useEffect(() => {
    const token = sessionStorage.getItem('isLoggedIn')

    setIsAuthed(!!token)
  }, [])

  return <AuthContext.Provider value={{ isAuthed, logIn, logOut }}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
