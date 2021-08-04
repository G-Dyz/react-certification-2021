import React from 'react'
import styled from 'styled-components'
import * as IoIcons from 'react-icons/io5'
import PropTypes from 'prop-types'
import Colors from '../../styles/Colors'

const Container = styled.div`
    background: pink;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    padding: 6px 16px;
    gap: 12px;
    border-radius: 5px;
    font-size: 1.05rem;
    color: ${Colors.SECONDARYCOLOR};
`
const Icon = styled.div`
    font-size: 1.2rem;
`
function Alert({ msg }) {
    return (
        <Container>
            <Icon>
                <IoIcons.IoAlertCircleSharp />
            </Icon>
            <p role="alert">{msg}</p>
        </Container>
    )
}

Alert.propTypes = {
    msg: PropTypes.string,
}

Alert.defaultProps = {
    msg: null,
}

export default Alert
