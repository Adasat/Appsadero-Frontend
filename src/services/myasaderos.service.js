import { api } from "./api"

export const getAllAsaderos = async() => {
    try {
        
        api.get()



    } catch (error) {
        console.log(error)
        return error
    }
}