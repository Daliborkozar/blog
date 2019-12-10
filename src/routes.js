import React from "react"
import { Switch, Route } from "react-router-dom"

import Main from "./components/Main"
import Login from "./components/Login"
import Signin from "./components/Signin"

const Routes = () => (
    <Switch>
        <Route exact path="/signin" component = { Signin } />
        <Route exact path="/login" component = { Login } />
        <Route exact path="/" component = { Main } />
    </Switch>
)

export default Routes;