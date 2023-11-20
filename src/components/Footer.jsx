import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Footer() {
  return (
    <div className='mt-5 d-flex ms-5'>
      <div className='mt-5  w-100'>
        <Container>
          <Row>
            <Col  md={6} sm={12} lg={4} xl={3}><h6 className='fw-bolder flex-column'>Browse</h6>
            <p>Xbox consoles</p>
            <p>Xbox games</p>
            <p>Xbox Game Pass</p>
            <p>Xbox accessories</p>
            </Col>
            <Col m md={6} sm={12} lg={4} xl={3}><h6 className='fw-bolder flex-column'>Resources</h6>
            <p>Xbox Support</p>
            <p>Feedback</p>
            <p>Community Standards</p>
            <p>Photosensitive Seizure Warning</p>
            </Col>
            <Col  md={6} sm={12} lg={4} xl={3}><h6 className='fw-bolder flex-column '>For Developers</h6>
            <p>Games</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Footer