import React, { useState } from "react"
import { Redirect, withRouter } from "react-router-dom"

import firebase from "../firebase/config"

const Signin= () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [routeRedirect, setRedirect] = useState(false)


    const signin= () => {
        console.log("creating user")
    }

    return(
        <React.Fragment>
            <form onSubmit={signin}>
                <p>Create Account</p>
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" onChange = { (e) => setEmail(e.target.value) } />
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" onChange = { (e) => setPassword(e.target.value) } />
                <input type="submit" value="Create account" />
            </form>
        </React.Fragment>
    )
}

export default withRouter(Signin);