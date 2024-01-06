import LogoImg from '../../images/M-removebg-preview.png';
import styled from 'styled-components';

const LogoContainer = styled.div `

width: 10px;
margin-right: 1200px

`

function Logo(){

    return(

        <LogoContainer>

            <div>
                <img src={LogoImg}></img>
            </div>

        </LogoContainer>

    );


} export default Logo;