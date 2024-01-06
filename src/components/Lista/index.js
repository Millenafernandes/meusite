import styled from 'styled-components';
import Main from '../Main';
import Formulario from '../Formulario';

const ListaContainer = styled.ul`

    display: flex;

    justify-content: center;
    align-items: center;
    text-align: center;
    


li{
   margin-left: 50px;
 }

 a{
  text-decoration: none;
  color: #290A0A;
 }


`


const lista = ['Sobre mim', 'Meus projetos', 'Orçamento'];

function Lista(){

   return( <ListaContainer>
        
        {lista.map((itemLista, index) => (
        <li key={index}><a href='#' target="_blank" rel="noopener noreferrer">{itemLista}</a></li>
        ))}

    </ListaContainer>

   );

} export default Lista;