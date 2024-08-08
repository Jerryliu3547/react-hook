import React from 'react'
import FunctionContextComponent from './FunctionContextComponent';
import {useState} from 'react'

export const ThemeContext = React.createContext()

const ContextHook = () => {
  const [darkTheme, setDarkTheme] = useState(true)
  function toggleTheme() {
    setDarkTheme(prevTheme => !prevTheme);
  }
  return (
    <div>
        <br />
        <hr />
        <h2>Context Hook Example</h2>
        {/* by using themeContext.provider, the value prop will pass down to any children and 
        grandChildren as well */}
        <ThemeContext.Provider value={darkTheme}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <FunctionContextComponent />
        </ThemeContext.Provider>
    </div>
  )
}

export default ContextHook
