import React from 'react'
import { Form, Button, Row, Col, Container } from 'react-bootstrap'

function Forms({ children }) {
  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Col xs={12} md={6}>

          {children}
          {/* <Form>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Email Address</Form.Label>
              <Form.Control type='email' placeholder='Enter email' />
              <Form.Text className='text-muted'>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
  
            <Form.Group controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' placeholder='Password' />
            </Form.Group>
  
            <Form.Group controlId='formBasicCheckbox'>
              <Form.Check type='checkbox' label='Remember Me' />
            </Form.Group>
            <Button variant='primary' type='submit'>
              Sign In
            </Button>
          </Form> */}
        </Col>
      </Row>
    </Container>
  )
}

export default Forms