
import styled from 'styled-components';
import instagramLogo from '../../images/instagram-svgrepo-com.svg';
import linkedinLogo from '../../images/linkedin-svgrepo-com.svg';
import youtubeLogo from '../../images/youtube-svgrepo-com.svg';

const ListaIconeContainer = styled.ul`

display: flex;
justify-content: center;
align-items: center;
text-align: center;


li{
  margin-left: 50px;
}

`
const listaIcone = [instagramLogo, linkedinLogo, youtubeLogo];

function ListaIcone(){
  return(
    <ListaIconeContainer>
    {listaIcone.map((imgLogo, index) => (
      <li key={index}><a href={getLinkByIndex(index)} target="_blank" rel="noopener noreferrer"><img src={imgLogo}></img></a></li> 
    

    ))}
    
    </ListaIconeContainer>
  );

  function getLinkByIndex(index) {
    switch (index) {
      case 0:
        return 'https://www.instagram.com/';
      case 1:
        return 'https://www.linkedin.com/';
      case 2:
        return 'https://www.youtube.com/';
      default:
        return '#';
    }
  }
}

export default ListaIcone;
