import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';
import TopBar from '../components/TopBar';

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
  axios.post('/item', itemData, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  } ).then((res) => {
    console.log(res.data)
});
  
}
  return (
    <>
    <TopBar/>
    <Form onSubmit={handleSubmit}>
      <div className='sell-name'>
        <Form.Group >
          <Form.Label> Product name</Form.Label>
          <Form.Control  name="name" type="name" placeholder="Enter name" value={state.name} onChange={handleChange}/>
        </Form.Group>
      </div>
      <div className='sell-price'>
        <InputGroup  className="mb-3">
          <InputGroup.Text>$</InputGroup.Text>
          <Form.Control  aria-label="Amount (to the nearest dollar)" name="price" value={state.price} onChange={handleChange}/>
          <InputGroup.Text>.00</InputGroup.Text>
        </InputGroup>
      </div>
      <div className='sell-category'>
        <Form.Select name='category' value={state.category} onChange={handleChange}>
          <option>Select a Category</option>
          <option value="Furniture">Furniture</option>
          <option value="Tech">Tech</option>
          <option value="Jewelry">Jewelry</option>
          <option value="Clothing">Clothing</option>
        </Form.Select>
      </div>
      <div className='sell-description'>
        <Form.Group >
          <Form.Label>Description</Form.Label>
          <Form.Control  name="description" as="textarea" rows={3} value={state.description} onChange={handleChange}/>
        </Form.Group>
      </div>
      <div className='sell-image'>
      <Form.Group controlId="formFile" className="mb-3" >
        <Form.Label>Import image</Form.Label>
        <Form.Control  name="img" type="file" value={state.img} onChange={handleChange} />
      </Form.Group>
      </div>
      <Button variant="primary" type="submit" className='sell-submit'>
        Submit
      </Button>
    </Form>
    </>
  );
};


export default Sell;