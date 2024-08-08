import React, {useContext} from 'react'
import {ThemeContext} from './ContextHook'

const FunctionContextComponent = () => {
  const darkTheme = useContext(ThemeContext)  
  const themeStyle = {
    backgroundColor: darkTheme? 'black' : 'white',
    color: darkTheme? 'white' : 'black',
    padding: '2rem',
    margin : "2rem",
    border : '1px solid black'
  }
  return (
    <div style={themeStyle}>FunctionContextComponent</div>
  )
}

export default FunctionContextComponent