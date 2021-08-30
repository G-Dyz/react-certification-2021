import React, { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../context/ThemeContext'
import Colors from '../../styles/Colors'
import HelpData from './HelpData'
import Device from '../../styles/Device'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 5vw;
    margin-right: 5vw;

    @media ${Device.mobileS} {
        height: calc(100vh - 2 * 56px);
    }
`
const QuestionCard = styled.div`
    background: ${({ themecontext }) => (themecontext ? Colors.LIGHT_LETTER : Colors.DARK_LETTER)};
    margin: 4px;
    padding: 8px;
    border-radius: 2px;
    h3 {
        color: ${({ themecontext }) => (themecontext ? Colors.DARK_NEUTRO : Colors.LIGHT_NEUTRO)};
        font-weight: bold;
        padding-bottom: 4px;
    }
    p {
        color: ${({ themecontext }) => (themecontext ? Colors.DARK_LETTER : Colors.LIGHT_LETTER)};
    }
`
const Tittle = styled.h1`
    color: ${({ themecontext }) => (themecontext ? Colors.DARK_NEUTRO : Colors.LIGHT_NEUTRO)};
    font-weight: bold;
    padding-bottom: 4px;
    align-self: center;
    margin: 12px;
`

function Help() {
    const [themeContext, themeDispatcher] = useContext(ThemeContext)

    return (
        <Container>
            <Tittle themecontext={themeContext} role="contentinfo">
                Frequently Asked Questions
            </Tittle>
            {HelpData.map((item) => {
                return (
                    <QuestionCard key={item.title} themecontext={themeContext}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </QuestionCard>
                )
            })}
        </Container>
    )
}

export default Help
