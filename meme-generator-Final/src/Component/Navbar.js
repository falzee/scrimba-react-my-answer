import React from "react"

export default function Header() {
    //REMEMBER BACKTICK AND SINGLE QUOTE DIFFERENT
    return (
        <header className="header">
            <img 
                src="/images/memegen.png" 
                className="header-image"
                alt="meme logo"
            />
            <h2 className="header-title">Meme Generator</h2>
            <h4 className="header-project">React Course - Project 3</h4>
        </header>
    )
}