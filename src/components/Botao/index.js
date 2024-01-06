import styled from 'styled-components';

const BotaoContainer = styled.button`
  background-color: #125757;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 1);

  &:hover {
    background-color: #1a7c7c;
  }
`;

// Componente funcional que renderiza o botão
function Botao(){
 
  return (
    <div>
      <BotaoContainer href="#">
        <strong>
        Enviar
        </strong>
      </BotaoContainer>
    </div>
  );


} export default Botao;