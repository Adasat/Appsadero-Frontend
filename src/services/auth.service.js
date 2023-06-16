import { api } from './api.js'

export const tryLogin = async (email, password) => {
    try{
        const { data } = await api.post('/auth/login', {email, password})
        localStorage.setItem('token', data.token)
    }catch(err){
        console.error(err)
    }
}

export const userSignup = async (first_name, nickname, email, password) => {
  
  console.log(first_name)
  console.log(nickname)
  console.log(email)
  console.log(password)

  try {
    const { data } = await api.post('/auth/signup', {
      first_name,
      "nickname": nickname,
      "email": email,
      "password":password,
    })
    localStorage.setItem('token', data.token)

    console.log(data)

  } catch (err) {
    console.error(err)
  }
}