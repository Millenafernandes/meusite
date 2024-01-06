import styled from 'styled-components';
import ListaIcone from '../ListaIcone';
import Lista from '../Lista';



const HeaderContainer = styled.header`

display: flex;
height: 100px;
background-color: #FFF;
justify-content: center;




`
function Header(){
    return(

    <HeaderContainer>
    <Lista />
    <ListaIcone />
    </HeaderContainer>

    );
  
} export default Header;