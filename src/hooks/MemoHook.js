import React from 'react'
import { useMemo, useState, useEffect } from'react'

//if we do not use useMemo, the slowFunction will be called every time the component renders
//after using useMemo, the slowFunction will only be called when the dependency changes
function slowFunction(num) {
  for (let i = 0; i < 10; i++) {}
  return num * 2;
}


//it is trade off between user memory and performance, 
//basically useMemo is used when you want to avoid unnecessary re-renders at a cost of call function
//and cost of memmory, only use when the result display is not changing frequently, and 
// the result requies a huge performance. 
const MemoHook = () => {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)
  const doubleNumber = useMemo(()=>{ return slowFunction(number)}, [number])

  //this is called reference inequality
  //second use of the useMemo hook, is althoght the themestyles is the same name,
  //but the themeStyles use different memory space every time, so 
  //technically the themeStyles will not to be the same, so useMemo will not help here.
  const themeStyles =useMemo(()=> {
    return {
    backgroundColor: dark? 'black' : 'white',
    color: dark? 'white' : 'black',
    padding: '10px',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
    }
  }, [dark])

  useEffect(() => {
    console.log('theme changed')

  }, [themeStyles])

  return (
    <div>
        <h2>Memo Hooks Example</h2>
        <p>Memo Hook will only re-render when the value of the dependency changes.</p>
        <input type='number' value={number} onChange={ e => setNumber(e.target.value)} >
        </input>
        <button onClick={()=>{
          setDark(!dark)
        }}>Change Theme</button>
        <div style = {themeStyles}>{doubleNumber}</div>

    </div>
  )
}

export default MemoHook