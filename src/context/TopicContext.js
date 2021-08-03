import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

// const initialState = {
//     UserID: '18',
//     TableNumber: '6',
// }

const TopicContext = createContext()

function TopicProvider({ children }) {
    const [context, setContext] = useState('default context value')
    return <TopicContext.Provider value={[context, setContext]}>{children}</TopicContext.Provider>
}

export { TopicContext, TopicProvider }

TopicProvider.propTypes = {
    children: PropTypes.shape({}),
}
TopicProvider.defaultProps = {
    children: null,
}
