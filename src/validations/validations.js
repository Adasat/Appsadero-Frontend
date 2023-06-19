import { parse } from "date-fns"

//function to format the date to DD/MM/YYYY
export const formatDate = (date) => {
  const formated = new Date(date)
  const day = formated.getDate()
  const month = formated.getMonth() + 1
  const year = formated.getFullYear()
  return `${day}/${month}/${year}`
}

export const checkDate = () => {
  const today = new Date()
  const day = today.getDate()
  const month = today.getMonth() + 1
  const year = today.getFullYear()
  return `${day}/${month}/${year}`
}

//function to calculate bbq duration -> import parse from date-fns
export const duration = (startTime, endTime) => {

    const startTimeFormated = parse(startTime, 'HH:mm', new Date())
    const endTimeFormated = parse(endTime, 'HH:mm', new Date())

    const difference = endTimeFormated.getTime() - startTimeFormated.getTime()

    const hours = Math.floor(difference / (1000*60*60))

    return hours;
}