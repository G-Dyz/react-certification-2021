import axios from 'axios'

const KEY = 'AIzaSyC3gRHp_IaKRrA7SOnafALyuhyt815KVEM'

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
