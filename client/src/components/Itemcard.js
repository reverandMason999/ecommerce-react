
import './User.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Itemcard = ({ items }) => {
    
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
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
  );
}

export default Itemcard;