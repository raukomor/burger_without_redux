import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-my-burger-z06.firebaseio.com/',
})

//instance.defaults.headers.post['Access-Control-Allow-Origin'] = '*'

export default instance
