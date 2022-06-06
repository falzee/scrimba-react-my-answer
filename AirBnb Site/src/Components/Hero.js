import React from "react"
import Bggroup from "../Images/header-photo.PNG";
export default function Hero() {
    return (
        <section className="upper-cont">
            <img src={Bggroup} alt="background people" className="bg-group"/>
            <h1 className="upper-title">Online Experience</h1>
            <p className="upper-text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}