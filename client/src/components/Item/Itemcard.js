import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import CardImage from "../../images/no-image-placeholder.png"

const Itemcard = ({ items }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/checkout', { state: { price: items.price } });
  };
    return( 
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={CardImage} />
      <Card.Body>
        <Card.Title>{items.name}</Card.Title>
        <Card.Text>{items.category}</Card.Text>
        <Card.Text>
        {items.description}
        <Card.Text>
        ${items.price}
        </Card.Text>
        </Card.Text>
        <Button className='Itembutton' onClick={handleClick} variant="primary">Buy</Button>
      </Card.Body>
    </Card>
  );
}

export default Itemcard;