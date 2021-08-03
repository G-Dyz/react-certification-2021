import React from 'react'
import styled from 'styled-components'

import Alert from '../../components/Alert'

const Container = styled.div`
    height: calc(100vh - 2 * 56px);
    padding: 16px;
`

function Favorites() {
    return (
        <Container>
            <Alert msg="You haven't added any video to your favorites yet" />
        </Container>
    )
}

export default Favorites
