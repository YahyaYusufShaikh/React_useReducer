/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useReducer } from 'react'

function App() {
  // const [count, setCount] = useState(0)
  
  const initialState = {count : 0}

  const reducer = (state, action) =>{
    switch(action.type){
      case  "increase" :{
        return {count: state.count+1}
      }
      case "decrease": {
        return {count: state.count-1}
      }
      case 'input':{
        return{count: action.payload}
      }
      default :{
        return state
      }
    }
   
  }
  
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
     <h2>{state.count}</h2>
     <button onClick={()=>dispatch({type : "increase"})}>Increment</button>
     <button onClick={()=>dispatch({type: "decrease"})}>Decrement</button>
     <br />
     <input value={state.count} type="number" onChange={(e)=>dispatch({type: 'input', payload: Number(e.target.value)})} />
    </>
  )
}

export default App
