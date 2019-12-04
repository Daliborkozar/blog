import React, { useState, useEffect} from "react"
import { Link, withRouter} from "react-router-dom"
import firebase from "../firebase/config"

const Navigation = (props) => {
    const [userState, setuserState] = useState(null)

    const logout = () => {
        console.log("user is logged out")
    }

    let buttons

    if(userState != null) {
        buttons = (
            <React.Fragment>
                <li><button className="logout" onClick = {logout}>LogOut</button></li>
            </React.Fragment>
        )
    }else {
        buttons = (
            <React.Fragment>
                <li>
                    <Link to="/signin">Sign in</Link>
                </li>
                <li>
                    <Link to="/login">login in</Link>
                </li>
            </React.Fragment>
        )
    }
    return(
        <nav>
            <ul>
                <li><Link to="/">Blog link</Link></li>
            </ul>
            <ul>
                <li><Link to="/create"> New post page link</Link></li>
                {buttons}
            </ul>
        </nav>
    )
}

export default withRouter(Navigation)