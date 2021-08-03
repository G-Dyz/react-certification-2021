import React from 'react'
import styled from 'styled-components'
import * as IoIcons from 'react-icons/io5'
import PropTypes from 'prop-types'
import Colors from '../../styles/Colors'

function Button({ tittle }) {
    return (
        <Container>
            <Icon role="figure">
                <IoIcons.IoPersonCircle />
            </Icon>
            <Text role="contentinfo">{tittle}</Text>
        </Container>
    )
}

const Container = styled.button`
    padding: 5px 11px;
    height: 32px;
    border: ${`2px solid ${Colors.WHITE}`};
    border-radius: 3px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: transparent;
`
const Text = styled.p`
    margin-left: 8px;
    font-size: 1.05em;
    color: ${Colors.WHITE};
    @media (max-width: 510px) {
        display: none;
    }
`
const Icon = styled.div`
    font-size: 1.5rem;
    height: 56px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: ${Colors.WHITE};
`

Button.propTypes = {
    tittle: PropTypes.string,
}

Button.defaultProps = {
    tittle: null,
}

export default Button
