import React from "react"
import Logo from "../Images/travelbnw.png"
export default function Navbar() {
    return (
        <nav>
            <img src={Logo} alt="logo travel"className="nav-logo"/>
        </nav>
    )
}