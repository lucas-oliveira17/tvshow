import axios from 'axios'

const getShows = () => axios.get('http://api.tvmaze.com/shows').then(ret => ret.data)

export default getShows