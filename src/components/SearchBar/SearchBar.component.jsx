import React, { useState } from 'react'
import styled from 'styled-components'
import * as AiIcons from 'react-icons/ai'

function SearchBar() {
    const [text, setText] = useState('')
    const handleChange = (event) => {
        setText(event.target.value)
    }
    const clearInput = () => {
        setText('')
    }

    return (
        <form>
            <Container role="form">
                <SearchButton className="right-icon" type="button">
                    <AiIcons.AiOutlineSearch />
                </SearchButton>
                <Input
                    type="text"
                    value={text}
                    onChange={handleChange}
                    placeholder="Search"
                    onSubmit={(e) => {
                        e.preventDefault()
                    }}
                />
                <ClearButton
                    className="right-icon"
                    onClick={clearInput}
                    type="button"
                    data-testid="clear-search"
                    disabled={text.length === 0}
                    style={text.length ? null : { color: 'white' }}
                >
                    <AiIcons.AiFillCloseCircle />
                </ClearButton>
            </Container>
        </form>
    )
}

const Input = styled.input`
    height: 32px;
    width: 100%;
    max-width: 562px;
    min-width: 58px;
    border: 0px solid #aaa;
    border-radius: 4px;
    outline: none;
    padding: 8px;
    box-sizing: border-box;
    transition: 0.3s;
    padding-right: 30px;
    cursor: pointer;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
`
const IconButton = styled.button`
    color: grey;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
`
const SearchButton = styled(IconButton)`
    height: 32px;
    width: 58px;
    font-size: 1.2em;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border: 0px solid #aaa;
`
const ClearButton = styled(IconButton)`
    left: -25px;
    position: relative;
    font-size: 1.1em;
    background: transparent;
    border: 0px solid transparent;
    @media (max-width: 360px) {
        display: none;
    }
`
const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 16px;
    @media (max-width: 360px) {
        margin-right: 16px;
    }
`

export default SearchBar
