import React from 'react'
import { useRef, useState, useEffect } from'react'

//ref will store values temporarily without rendering it.
//unlike useState, it rerender the entire page
const RefHook = () => {
  const [name, setName] = useState('')
  const renderCount= useRef(0)
  const inputRef = useRef(null)
  const preName = useRef('')

  useEffect(()=>{
    preName.current = name
  }, [name])

  useEffect(()=>{
    renderCount.current++
  },[name])

  function focus() {
    inputRef.current.focus()
  }

  return (
    <div>
        <input ref={inputRef} value={name} placeholder='😎' onChange={e=> setName(e.target.value)} />
        <h2>Hello, {name}! and it used to be previous {preName.current}</h2>
        <h2>I rendered {renderCount.current} times</h2>
        <button onClick={focus}>Focus to Input Field</button>
    </div>
  )
}

export default RefHook