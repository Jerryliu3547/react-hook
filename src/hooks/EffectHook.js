import React from 'react'
import { useState, useEffect } from'react'

const EffectHook = () => {
  const [resourceType, setResourceType] = useState(()=>{'Posts'})
  const [items, setItems] = useState([])
  const [windowSize, setWindowSize] = useState({width:0, height:0})
  const handleResize = () => {
    setWindowSize({width: window.innerWidth, height: window.innerHeight})

  }
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    //this is the cleanup function that will be called when the component unmounts
    //if there is no clearup function, it will cause application run very slowly
    return () => {
        window.removeEventListener('resize', handleResize)
    }
  },[])

  useEffect(() => {
    const fetchData = async () =>{
        try{
            const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            const data = await response.json()
            setItems(data)
        } catch(error){
            console.error('Error fetching data:', error)
        } 

    }
    fetchData()
}, [resourceType]) 

  return (
    <div>
        <h2>useEffect Hook Example</h2>
        <h3>window width: {windowSize.width}, window height: {windowSize.height}</h3>


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
        {items.length > 0 && (
        items.map((item, index) => (
          <pre key={index}>{JSON.stringify(item)}</pre>
        ))
      )}

    </div>
  )
}

export default EffectHook