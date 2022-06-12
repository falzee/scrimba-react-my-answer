import React from "react"
import Data from "../Data.js"
export default function Form() {
    let url
    function getImage(){
        const memesArray = Data.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        url = memesArray[randomNumber].url
        console.log(url)
    }
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form-input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form-input"
                />
                <button 
                    className="form-button"
                    onClick={getImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
        </main>
    )
}