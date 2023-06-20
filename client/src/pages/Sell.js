import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Sell = () => {
  return (
    <Form>
      <div className='sell-name'>
        <Form.Group>
          <Form.Label> Product name</Form.Label>
          <Form.Control type="name" placeholder="Enter name" />
        </Form.Group>
      </div>
      <div className='sell-price'>
        <InputGroup className="mb-3">
          <InputGroup.Text>$</InputGroup.Text>
          <Form.Control aria-label="Amount (to the nearest dollar)" />
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
        <Form.Group >
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </div>
      <div className='sell-image'>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Import image</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      </div>
      <Button variant="primary" type="submit" className='sell-submit'>
        Submit
      </Button>
    </Form>
  );
};


export default Sell;