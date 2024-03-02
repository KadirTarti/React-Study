import React from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'


const Header = () => {
  return (
    <div className='container'>
    <h1 className='text-danger'>Todo App</h1>
    <InputGroup className="mb-3">
        <Form.Control
          placeholder="Enter new todo..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button type="button" className="btn btn-success text-light" variant="outline-secondary" id="button-addon2">
          Add Todo
        </Button>
      </InputGroup>
    </div>
  )
}

export default Header