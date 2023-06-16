import { api } from './api.js'

export const tryLogin = async (email, password) => {
    try{
        console.log("en servicios" + password, email)
        const { data } = await api.post('/auth/login', {email, password})
        localStorage.setItem('token', data.token)
    }catch(err){
        console.error(err)
    }
}