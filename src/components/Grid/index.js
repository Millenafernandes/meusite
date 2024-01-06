import Card from '../Card';
import styled from 'styled-components';
import image from '../../images/loginpage.png';


const GridContainer = styled.div`

display: flex;
justify-content: center;

margin-top: 80px;
margin-bottom:150px;
margin-right: 100px;
margin-left: 100px
`


const cardData = [
  {
    id: 1,
    image,
    title: 'Página de Login',
    description: 'Lorem ipsum dolor sit amet. Qui quibusdam explicabo rem nemo numquam sit nisi eveniet ut aliquam sunt et praesentium molestiae aut facere nihil et reiciendis dolor. A quidem laudantium vel debitis numquam eum nihil blanditiis eum velit',
  },
  {
    id: 2,
    image: 'https://placekitten.com/300/200',
    title: 'Formulário',
    description: 'Lorem ipsum dolor sit amet. Qui quibusdam explicabo rem nemo numquam sit nisi eveniet ut aliquam sunt et praesentium molestiae aut facere nihil et reiciendis dolor. A quidem laudantium vel debitis numquam eum nihil blanditiis eum velit',
  },

  {
    id: 3,
    image: 'https://placekitten.com/300/200',
    title: 'Ecommerce',
    description: 'Lorem ipsum dolor sit amet. Qui quibusdam explicabo rem nemo numquam sit nisi eveniet ut aliquam sunt et praesentium molestiae aut facere nihil et reiciendis dolor. A quidem laudantium vel debitis numquam eum nihil blanditiis eum velit',
  },

  {
    id: 4,
    image: 'https://placekitten.com/300/200',
    title: 'Landing page',
    description: 'Lorem ipsum dolor sit amet. Qui quibusdam explicabo rem nemo numquam sit nisi eveniet ut aliquam sunt et praesentium molestiae aut facere nihil et reiciendis dolor. A quidem laudantium vel debitis numquam eum nihil blanditiis eum velit',
  },
  
];

function Grid() {
  return (
    <GridContainer id='section2'>
      {cardData.map((card) => (
        <Card key={card.id} title={card.title} image={card.image} description={card.description} />
      ))}
    </GridContainer>
  );
}

export default Grid;