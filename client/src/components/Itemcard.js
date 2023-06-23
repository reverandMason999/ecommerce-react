import { useEffect, useState } from "react";
import axios from "axios";
import './User.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Itemcard = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('/item').then(res => {
            console.log(res)
            setData(res.data)})
        .catch(err => console.log(err))
    }, [])

    return( 
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
        {data.description}
        <Card.Text>
        ${data.price}
        </Card.Text>
        </Card.Text>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
  );
}

export default Itemcard;