import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';

const Sell = () => {
  const [ state, setState ] = useState({
    name: '',
    price: '',
    category: '',
    description: '',
    img: ''
  })
  const handleChange = (e) => {
    const value = e.target.value;
    setState({
        ...state,
        [e.target.name]: value
    });
}
const handleSubmit = (e) => {
  e.preventDefault();
  const itemData = {
    name: state.name,
    price: state.price,
    category: state.category,
    description: state.description,
    img: state.img
  }
  axios.post('/item', itemData,{
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  } ).then((res) => {
    console.log(res.data)
});
  
}
  return (
    <Form onSubmit={handleSubmit}>
      <div className='sell-name'>
        <Form.Group value={state.name} onChange={handleChange}>
          <Form.Label> Product name</Form.Label>
          <Form.Control  type="name" placeholder="Enter name" />
        </Form.Group>
      </div>
      <div className='sell-price'>
        <InputGroup value={state.price} onChange={handleChange} className="mb-3">
          <InputGroup.Text>$</InputGroup.Text>
          <Form.Control  aria-label="Amount (to the nearest dollar)" />
          <InputGroup.Text>.00</InputGroup.Text>
        </InputGroup>
      </div>
      <div className='sell-category'>
        <Form.Select >
          <option>Select a Category</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </div>
      <div className='sell-description'>
        <Form.Group value={state.description} onChange={handleChange}>
          <Form.Label>Description</Form.Label>
          <Form.Control  as="textarea" rows={3} />
        </Form.Group>
      </div>
      <div className='sell-image'>
      <Form.Group controlId="formFile" className="mb-3" value={state.img} onChange={handleChange}>
        <Form.Label>Import image</Form.Label>
        <Form.Control  type="file" />
      </Form.Group>
      </div>
      <Button variant="primary" type="submit" className='sell-submit'>
        Submit
      </Button>
    </Form>
  );
};


export default Sell;