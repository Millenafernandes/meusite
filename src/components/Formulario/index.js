import styled from 'styled-components';
import Input from '../Input';
import Botao from '../Botao';


const FormularioContainer = styled.div`



display: flex;
justify-content: center;
align-items: center;


background-color: #7c3b1a;
flex-direction: column;
max-width: 700px;
box-shadow: 0 0 8px rgba(0, 0, 0, 3); 

margin-top: 100px;
margin-bottom: 100px;
color: #290A0A;

margin: 0 auto; 

padding-bottom: 60px;
padding-top: 60px;
margin-bottom: 150px;
border-radius: 8px; 


textarea{
    border: 1px solid #FFF;
    padding: 15px 140px;
    border-radius: 30px;
    width: 200px;
    height: 60vh;
    
    font-size: 16px;
    margin-bottom: 50px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 1);
}

h1{
    margin-bottom: 1px;
}

p{
    display: flex;
    text-align: justify;
    padding: 15px 140px;
    margin-top: 5px;
    
}

Input::placeholder{
    font-family: Roboto;
    font-size: 20px
    

}
textarea::placeholder{
    font-family: Roboto;
    font-size: 20px
    
}


`

function Formulario(){

return(

    <FormularioContainer id = 'section3'>

        <h1>Faça um orçamento!</h1>
        <p>Lorem ipsum dolor sit amet. Ex voluptates quasi sit quidem ipsam et quos sint qui expedita veritatis qui consequatur veritatis qui asperiores fugiat et laboriosam temporibus! Est beatae molestiae ut modi tenetur qui voluptatem commodi nam eaque distinctio At iste tempora quo voluptatem provident ut voluptatem voluptate. Non pariatur obcaecati aut perspiciatis ipsam qui neque rerum sit voluptas delectus est quia provident.</p>
        
        <Input placeholder='Nome'/>
        <Input placeholder='Email'/>
        
        <textarea placeholder='Descreva sua proposta'></textarea>
        <Botao />

    </FormularioContainer>
);
} export default Formulario;