import React from 'react'
import Data from './data'
import {nanoid} from "nanoid"


export default function App() {
  const [dice ,setDice]=React.useState(allNewDice())
  function allNewDice(){
    const newDice = []
    for(let i=0;i<10;i++){
      newDice.push({value : Math.ceil(Math.random() * 6),
      isHeld : false,
      id :nanoid()})
    }
    return newDice
  }
  function rollDice(){
    setDice(allNewDice())
  }
  const diceElements = dice.map(die => <Data key={die.id} value={die.value}/>)

  return (
    <main>
      <div className='container'>
        {diceElements}
      </div>
      <button className='btn' onClick={rollDice}>Roll</button>
    </main>
  )
}


