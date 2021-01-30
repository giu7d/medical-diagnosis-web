import React, { useContext } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Login } from './pages/Login'
import { Diagnosis } from './pages/Diagnosis'
import { StoreContext } from './redux/store'

export const Router = () => {
  const { state } = useContext(StoreContext)

  if (state.accountId !== undefined) {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Diagnosis} exact />
        </Switch>
      </BrowserRouter>
    )
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Login} exact />
      </Switch>
    </BrowserRouter>
  )
}
