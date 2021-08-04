import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const SwitchInput = styled.input`
    height: 0;
    width: 0;
    visibility: hidden;
`
const SwitchLabel = styled.label`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 70px;
    height: 32px;
    border-radius: 100px;
    border: 2px solid gray;
    position: relative;
    transition: background-color 0.2s;

    @media (max-width: 500px) {
        width: 40px;
    }
`
const SwitchButton = styled.span`
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 25px;
    height: 25px;
    border-radius: 45px;
    transition: 0.2s;
    background: grey;
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);

    ${SwitchInput}:checked + ${SwitchLabel} & {
        left: calc(100% - 2px);
        transform: translateX(-100%);
        background: black;
    }

    ${SwitchLabel}:active & {
        width: 45px;
    }
`
const SwitchContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
function Switch({ id, toggled, onChange }) {
    return (
        <SwitchContainer role="switch">
            <SwitchInput
                id={id}
                type="checkbox"
                checked={toggled}
                onChange={onChange}
                data-testid="checkbox"
            />
            <SwitchLabel htmlFor={id}>
                <SwitchButton data-testid="switch" />
            </SwitchLabel>
        </SwitchContainer>
    )
}

Switch.propTypes = {
    id: PropTypes.string,
    toggled: PropTypes.bool,
    onChange: PropTypes.func,
}

Switch.defaultProps = {
    id: null,
    toggled: null,
    onChange: null,
}

export default Switch
