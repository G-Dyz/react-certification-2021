import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FavoriteContext } from '../../context/FavoriteContext'
import { ThemeContext } from '../../context/ThemeContext'
import Alert from '../../components/Alert'
import Card from '../../components/Card'
import Colors from '../../styles/Colors'

const Container = styled.div`
    background: ${({ themeContext }) => (themeContext ? Colors.LIGHT_NEUTRO : Colors.DARK_NEUTRO)};
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    padding-top: 24px;
    padding-bottom: 24px;
`
const VideoLink = styled(Link)`
    text-decoration: none;

    &:hover {
        cursor: pointer;
    }
`

function Favorites() {
    const [favoriteContext, favoriteDispatcher] = useContext(FavoriteContext)
    const [themeContext, themeDispatcher] = useContext(ThemeContext)
    console.log('***', favoriteContext)

    return (
        <Container themeContext={themeContext}>
            {favoriteContext?.length ? (
                favoriteContext.map((item) => (
                    <VideoLink
                        to={{
                            pathname: `/video`,
                            search: `?videoUrl=${item.id.videoId || item.id}`,
                        }}
                        key={item.snippet.publishedAt}
                        role="figure"
                    >
                        <Card item={item} />
                    </VideoLink>
                ))
            ) : (
                <Alert msg="You haven't added any video to your favorites yet" />
            )}
        </Container>
    )
}

export default Favorites
