import React from 'react';
import Link from 'next/link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Container, CssBaseline, TextField, Typography } from '@mui/material';

type CopyProps = {
  site: string;
  sx?:object;
}

function Copyright(props:CopyProps){
  const { site, sx } = props
  console.log(props)
  console.log(site)
  console.log(sx)
  return(
    //componente do material UI
    <Typography>
      {'Copyright ©️'}
      <Link color="inherit" href="https://www.avanade.com.br/">
        {props.site}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}
const theme = createTheme();

export default function LoginPage() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{mt:8, display:'flex',flexDirection: 'column', alignItems: 'center'}}>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" onSubmit={(e)=>{console.log('enviou')}}>
          <TextField required fullWidth id="email" label="Digite o e-mail" name="email" autoComplete="email" autoFocus/>
            <TextField required fullWidth id="password" type="password" label="Digite a senha" name="password" autoComplete="current-password" autoFocus/>
          </Box>
        </Box>
        <Copyright site="www.avanade.com.br" sx={{mt:8, mb:4}} />
      </Container>
    </ThemeProvider>
  
  )
}
