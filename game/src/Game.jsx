import { useState } from 'react'

function Game() {
  const [random]=useState(Math.floor(Math.random()*10)+1)

  const [guessnumber,setGuessnumber]=useState("")
  const number=parseInt(guessnumber)
  const [show,setShow]=useState("")
  const [randomnumber,setRandomnumber]=useState("")
  function handleNumber(e){
    setGuessnumber(e.target.value)
  }
  function handleResult(){
    if(isNaN(number)||number<0 || number>10){
      setShow("Guess : Enter Valid Input !")
    }
    else if(number<random){
      setShow("Guess : Low !")
    }
    else if(number>random){
      setShow("Guess : High !")
    }
    else{
      setShow("Guess : Your Correct !")
    }
  }
  function showAnswer(){
    setRandomnumber(`Random number : ${random}` )
  }
 
  return (
    <div style={{backgroundColor:""}}>
    <div className='container w-50 mt-5 p-5  bg-secondary rounded text-white text-center '>
      <label className='form-label fs-3 '> " Guess the random number from 1-10 : "</label> 
      <input type="text" name='guess' onChange={handleNumber} className='form-control w-75 p-3 mx-auto mt-4' placeholder='enter a number...' />
      <div className='d-flex gap-3 justify-content-center mt-4'>
           <p className='btn btn-danger ' onClick={handleResult}>Submit</p>
           <p className='btn btn-success'onClick={showAnswer}>Show Answer</p>
      </div>
      <p >{show} </p>
      <p>{randomnumber}</p>
    </div>
      
    </div>
  )
}

export default Game

