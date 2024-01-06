import styled from 'styled-components';

const CardContainer = styled.div`
  border: 20px solid #FFF;
  border-radius: 8px;
  overflow: hidden;
  margin: 16px;
  width: 300px;
  background-color: #FFF;
  transition: transform 0.3s;

    &:hover {
    transform: scale(1.1);
  }
`;

const CardImage = styled.img`

  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardDescription = styled.div`
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  text-align: justify;
`;

const CardTitle = styled.div`
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  
`

const Card = ({ key, image, description, title}) => {
  return (
    <CardContainer key={key}>
      
      <CardImage src={image} alt="Card" />
      <CardTitle><strong>{title}</strong></CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardContainer>
  );
};

export default Card;