import './User.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Itemcard = ({ items }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/checkout', { state: { price: items.price } });
  };
    return( 
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{items.name}</Card.Title>
        <Card.Text>
        {items.description}
        <Card.Text>
        ${items.price}
        </Card.Text>
        </Card.Text>
        <Button onClick={handleClick} variant="primary">Buy</Button>
      </Card.Body>
    </Card>
  );
}

export default Itemcard;