import axios from 'axios'

export default axios.create({
    baseURL: process.env.REACT_APP_API,
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 24,
        key: process.env.REACT_APP_KEY,
    },
    headers: {},
})
