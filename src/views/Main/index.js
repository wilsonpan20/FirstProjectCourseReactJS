import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavHeader from '../../components/NavHeader'
import MyCards from '../../components/MyCards';
import Footer from '../../components/Footer'



const cards = [
  {
  id:1,
  image:'https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  title:'Noteboock',
  description:'Noteboock emcima da mesa',
},

{
id:2,
image:'https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
title:'virtual',
description:'Realidade virtual',
},

{
id:3,
image:'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
title:'Placa Mae',
description:'Placa Mae de ultima geranção',
},

{
id:4,
image:'https://images.pexels.com/photos/3862634/pexels-photo-3862634.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
title:'Simulador',
description:'Simulador de voo',
},
{
  id:5,
  image:'https://images.pexels.com/photos/4526398/pexels-photo-4526398.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  title:'Celular',
  description:'O mundo em suas maos',
  },

  {
    id:6,
    image:'https://images.pexels.com/photos/159393/gamepad-video-game-controller-game-controller-controller-159393.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title:'Controle Ps4',
    description:'Controle Ps4 versão preto',
    }];


const theme = createTheme();

 function App(){
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavHeader/>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Lista de Técnologia
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Esse é o nosso First Project,nele apredemos a criar arrays de objetos, componentes,&apos;
              sobre props e muito mais.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Entrar</Button>
              <Button variant="outlined">Cancelar</Button>
            </Stack>
          </Container>
        </Box>
   
      </main>
      
      <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
      <MyCards data= {cards}/>

      </Container>


      {/* Footer */}

      <Footer/>
      {/* End footer */}
    </ThemeProvider>
  );
}
export default App;

