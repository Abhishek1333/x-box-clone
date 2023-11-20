import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Cards from './Cards';
import { Col, Placeholder, Row } from 'react-bootstrap';

function Navigationbar() {
  return (
    <div className='container bg-dark text-light rounded  mt-2 ms-1 flex-column'>
      <Row>
        <Col md={12} >
          <Navbar className='bg-dark '>
          <Container fluid>
            <Navbar.Brand className='ms-5 text-light' href="#"><img style={{width:'15%'}} src="https://twinfinite.net/wp-content/uploads/2021/06/Xbox-Logo.jpg" alt="" /></Navbar.Brand>
            <Form>
            <Form.Control className='border border-dark' style={{width:'350px'}} type="email" placeholder="Find Games" />
            </Form>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
              </Nav>
             
            </Navbar.Collapse>
          </Container>
         </Navbar>
          <Cards/>
        </Col >
      </Row>

    </div>
      
  )
}

export default Navigationbar