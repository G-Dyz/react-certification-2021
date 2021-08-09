import axios from 'axios'

const KEY = 'AIzaSyBfL9EVBT3LIKHlBcKS8v8-4da0suhY4iE'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 24,
        key: KEY,
    },
    headers: {},
})
