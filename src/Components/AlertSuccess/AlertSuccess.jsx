import { Alert, Stack } from '@mui/material'

function AlertSuccess({text, severityText}) {
  return (
    <Stack x={{ width: '100%', textAlign: 'center' }} spacing={2}>
        <Alert severity={severityText}>{text}</Alert>
    </Stack>
  )
}

export default AlertSuccess