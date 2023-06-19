//function to format the date to DD/MM/YYYY
export const formatDate = (date) => {
    const formated = new Date (date);
    const day = formated.getDate()
    const month = formated.getMonth()+1
    const year = formated.getFullYear()

    return `${day}/${month}/${year}`
}

export const formatTime = (time) => {
    const formated = new Date (time);
    const hours = formated.getHours()
    const minutes = formated.getMinutes()

    return `${hours}:${minutes}`
}
/*
export const checkDate = (date) => {
    const today = formatDate()



}*/