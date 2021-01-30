import React, { createContext, useReducer } from 'react'
import { reducer } from './reducer'

export const initialState = {
  accountId: undefined,
  accountName: '',
  questionCount: 1
}

export const StoreContext = createContext({
  state: initialState,
  dispatch: () => {}
})

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  )
}
