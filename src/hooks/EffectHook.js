import React from 'react'
import { useState, useEffect } from'react'

const EffectHook = () => {
  const [resourceType, setResourceType] = useState(()=>{''})
  return (
    <div>
        <h2>useEffect Hook Example</h2>
        <button onClick={()=>{
            setResourceType('Posts')
        }}>Posts</button>
        <button onClick={()=>{
            setResourceType('Users')
        }}>User</button>
        <button onClick={()=>{
            setResourceType('Comments')
        }}>Comments</button>
        <h3>Selected Resource: {resourceType}</h3>
    </div>
  )
}

export default EffectHook