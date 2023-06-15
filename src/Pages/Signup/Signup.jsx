import { Email, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { brown } from "@mui/material/colors";
import { useState } from "react";
import TextFieldInput from "../../components/TextField/TextFieldInput";

function Signup() {
  //Guardar el nombre del usuario
  const [name, setName] = useState('')

  //Variables de estado de Email y la comprobación entre el segundo email verificando
  const [email, setEmail] = useState('')
  const [idemEmail, setIdemEmail] = useState('')

  //Variables de estado para comprobar si el password coincide
  const [password, setPassWord] = useState('')
  const [idemPassword, setIdemPassword] = useState('')

  // Comprobación si el Password se puede ver o no.
  const [isPassVisible, setIsPassVisible] = useState(false);
  const [isRepPassVisible, setIsRepPassVisible] = useState(false);

  //Handle para guardar nombre del usuario
  const handleUsername = (e) => {
    setName(e.target.value)
  }

  //Handle para guardar los dos emails del usuario
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleVerifyEmail = (e) => {
    setIdemEmail(e.target.value)
  }

  //Handle para la visibilidad del botón de la contraseña
  const handlePassword = (e) => {
    setPassWord(e.target.value)
  }
  const handleVerifyPassword = (e) => {
    setIdemPassword(e.target.value)
  }

  //Two functions for the same onChange
  const twoChangePassword = () => {
    handleVerifyPassword()
    handlePassVisible()
  }
  const twoVerifyPassword = () => {
    handlePassword()
    handleRepPassVisible()
  }

  const handlePassVisible = () => {
    setIsPassVisible(!isPassVisible);
  };
   const handleRepPassVisible = () => {
    setIsRepPassVisible(!isRepPassVisible);
  };

  //Handle del botón
  const handleClick = () => {
    alert('User signup' +  email)
  }


  return (
    <Card
      display="flex"
      sx={{
        maxWidth: "700px",
        backgroundColor: brown["A400"],
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      raised={true}
    >
      <CardHeader title="Signup" />
      <CardContent
        display="flex"
        sx={{ maxWidth: "500px", justifyItems: "center" }}
      >
        <TextField label="Full name" type="text" onChange={handleUsername} InputAdorment={null}></TextField>
        
        <TextFieldInput label="Email" type="email" InputAdornment={{endAdornment: (
              <InputAdornment>
                <Email />
              </InputAdornment>
            ),}} onChange={handleEmail}></TextFieldInput>
        
        <TextFieldInput label="Repeat your email" type="email" InputAdornment={{endAdornment: (
              <InputAdornment>
                <Email />
              </InputAdornment>
            ),}} onChange={handleVerifyEmail}></TextFieldInput>

        <TextFieldInput label="Password" type={isPassVisible ? "text" : "password"} InputAdornment={{endAdornment: (
              <InputAdornment>
                <IconButton>
                  {isPassVisible ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),}} onChange={twoChangePassword}></TextFieldInput>

        <TextFieldInput label="Repeat your password" type={isRepPassVisible ? "text" : "password"} InputAdornment={{endAdornment: (
              <InputAdornment>
                <IconButton>
                  {isRepPassVisible ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),}} onChange={twoChangePassword}></TextFieldInput>

      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          size="large"
          color="primary"
          variant="contained"
          sx={{ backgroundColor: "yellowgreen" }}
          onClick={handleClick}
        >
          Submit
        </Button>
      </CardActions>