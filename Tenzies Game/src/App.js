import './App.css';
import Die from './Die';
import React from "react"
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti' 


export default function App() {
    const [dice, setDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)
    
    React.useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        if (allHeld && allSameValue){ 
            setTenzies(true)
            console.log("You won!")
        }
    }, [dice] )

    function getNewArray(){
        return{
            value: Math.floor(Math.random() * 6) + 1,
            isHeld: false,
            id: nanoid()
        }
    }
    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(getNewArray())
        }
        return newDice
    }
    
    function rollDice() {
        if (!tenzies){
            setDice(prevDice => prevDice.map(die =>{ 
                return die.isHeld
                ? die 
                : getNewArray()
                } 
            ))
        }else {
            reset()
        }
    }
    function reset(){
        setTenzies(false)
        setDice(allNewDice()) 
    }
    function holdDice(id) {
        setDice(prevDice => prevDice.map(die =>{ 
        return die.id === id 
            ? {...die, isHeld: !die.isHeld} 
            : die
        } ))
    }
    const diceElements = dice.map(die => 
    <Die 
        key={die.id}
        value={die.value} 
        isHeld={die.isHeld}
        id={die.id}
        holdDice={() => holdDice(die.id)}

        />)
    
    return (
            
            <main>
                {tenzies && <Confetti />}
                <h1 className="title">Tenzies</h1>
                <p className="sub-title">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                <div className="container">
                {diceElements}
                </div>
                <div className="button-dice">
                    <button 
                        className="roll-dice" 
                        onClick={rollDice}
                    >
                        {tenzies ? "New Game" : "Roll"}
                    </button>
                    
                    <img src='images/refresh.png' alt="reset" className="reset-dice" onClick={reset} />
                    
                </div>
            </main>
        
    )
}
