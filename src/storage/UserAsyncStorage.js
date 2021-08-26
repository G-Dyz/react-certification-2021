const USER_KEY = '@User:key'

async function saveUser(User) {
    try {
        await window.localStorage.setItem(USER_KEY, JSON.stringify(User))
        return JSON.stringify(User)
    } catch (error) {
        console.log(`Save error: ${error.message}`)
        return 'Syntax error'
    }
}

async function getUser() {
    try {
        const item = await window.localStorage.getItem(USER_KEY)
        return JSON.parse(item)
    } catch (error) {
        console.log(`Save error: ${error.message}`)
        return null
    }
}

async function deleteUser() {
    try {
        await window.localStorage.removeItem(USER_KEY)
        const item = await window.localStorage.getItem(USER_KEY)
        return item == null ? 'User removed' : 'User not removed'
    } catch (error) {
        console.log(`Save error: ${error.message}`)
        return 'Syntax error'
    }
}

export { saveUser, getUser, deleteUser }
