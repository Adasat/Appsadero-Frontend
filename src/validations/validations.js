//function to format the date to DD/MM/YYYY
export const formatDate = (date) => {
  const formated = new Date(date)
  const day = formated.getDate()
  const month = formated.getMonth() + 1
  const year = formated.getFullYear()
  return `${day}/${month}/${year}`
}

export const formatDateDB = (date) => {
  const formated = new Date(date)
  const day = formated.getDate()
  const month = (formated.getMonth() + 1).toLocaleString(undefined, {
    minimumIntegerDigits: 2,
  })
  const year = formated.getFullYear()
  return `${year}${month}${day}`
}

export const checkDate = () => {
  const today = new Date()
  const day = today.getDate()
  const month = today.getMonth() + 1
  const year = today.getFullYear()
  return `${day}/${month}/${year}`
}

export const formatTime = (time) => {
  const formated = new Date(time)
  const hours = formated.getHours()
  const minutes = formated.getMinutes()
  return `${hours}:${minutes}`
}


export const durationTime = (startTime, endTime) => {

  const horaInicio = new Date(startTime); // Hora actual
  const horaFin = new Date(endTime); // Hora actual
  let duracionMilisegundos = horaFin.getTime() - horaInicio.getTime();

  if (duracionMilisegundos < 0) {
    const duracionDiaMilisegundos = 24 * 60 * 60 * 1000;
    duracionMilisegundos += duracionDiaMilisegundos;
  }
  const duracionHoras = Math.floor(duracionMilisegundos / (1000 * 60 * 60));

  return duracionHoras;
}