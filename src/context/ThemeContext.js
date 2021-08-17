import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

const ThemeContext = createContext()

function ThemeProvider({ children }) {
    const [context, setContext] = useState(true)
    const setAllContext = () => {
        setContext(!context)
    }
    return (
        <ThemeContext.Provider value={[context, setAllContext]}>{children}</ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider }

ThemeProvider.propTypes = {
    children: PropTypes.shape({}),
}
ThemeProvider.defaultProps = {
    children: null,
}
