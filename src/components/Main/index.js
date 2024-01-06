import styled from 'styled-components';
import imagem from '../../images/CC_20231230_160111.png';

const MainContainer = styled.div`
.
width: 60%;
height: 60%;
display: flex;

justify-content: center;
align-items: center;
padding-left: 300px;
padding-right: 300px;


.foto{

height: 200px;

margin-right: 60px;

}

.descricao{
text-align: justify;
max-width: 600px; 
}

`


function Main(){
     return(
     <MainContainer id='section1'>
     <img className='foto' src = {imagem}/>
        
     <p className = 'descricao'><h1>Bem-vindo ao meu portifólio!</h1>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</p>

     </MainContainer>
     );



} export default Main;