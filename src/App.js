
import styled from 'styled-components';
import Header from './components/Header';
import Main from './components/Main';
import Grid from './components/Grid';
import Formulario from './components/Formulario';
import Rodape from './components/Rodape';


const AppContainer = styled.div`


width: 100vw;
height: 100vh;



`

function App() {
  return (

   <AppContainer>

    <Header/>

    <Main/>

    <Grid/>

    <Formulario />

    <Rodape />

   </AppContainer>
    

  );
}

export default App;
