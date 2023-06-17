//function to format the date to DD/MM/YYYY
export const formatDate = (date) => {
    const formated = new Date (date);
    const day = formated.getDate()
    const month = formated.getMonth()+1
    const year = formated.getFullYear()

    return `${day}/${month}/${year}`
}