import { api } from './api.js'

export const tryLogin = async (email, password) => {
    try{
        const { data } = await api.post('/auth/login', {email, password})
        localStorage.setItem('token', data.token)
    }catch(err){
        console.error(err)
    }
}

export const userSignup = async (email, password) => {
    try{
        const { data } = await api.post('/auth/login', {email, password})
        localStorage.setItem('token', data.token)
    }catch(err){
        console.error(err)
    }
}