const FAVORITE_KEY = '@Favorite:key'

async function saveFavorite(Favorite) {
    try {
        await window.localStorage.setItem(FAVORITE_KEY, JSON.stringify(Favorite))
        return JSON.stringify(Favorite)
    } catch (error) {
        console.log(`Save error: ${error.message}`)
        return 'Syntax error'
    }
}

async function getFavorite() {
    try {
        const item = await window.localStorage.getItem(FAVORITE_KEY)
        return JSON.parse(item)
    } catch (error) {
        console.log(`Save error: ${error.message}`)
        return null
    }
}

async function deleteFavorite() {
    try {
        await window.localStorage.removeItem(FAVORITE_KEY)
        const item = await window.localStorage.getItem(FAVORITE_KEY)
        return item == null ? 'Favorite removed' : 'Favorite not removed'
    } catch (error) {
        console.log(`Save error: ${error.message}`)
        return 'Syntax error'
    }
}

export { saveFavorite, getFavorite, deleteFavorite }
