import axios from 'axios'

// create > single Axios instance for the entire application
const apiClient = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: false, 
    // for authentication and configuration
    header:{
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getEvents(){
        return apiClient.get('/events')
    },
    getEvent(id){
        return apiClient.get('/events/' + id)
    }
}