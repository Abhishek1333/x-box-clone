import { Col, Row } from 'react-bootstrap';
import './App.css';
import Navigationbar from './components/Navigationbar';
import Card from 'react-bootstrap/Card';


function App() {
  return (
    <>
      <Row>
        <Col>
          <div style={{backgroundColor:'black'}} className='d-flex'>
            <div style={{backgroundColor:'black'}} className='container   text-light rounded w-25 p-2 ms-1 flex-column'>
              <div className='container bg-dark text-light rounded p-2'>

              <div className='d-flex justify-content-between ms-2'>
              <h6><i class="fa-solid fa-bars" style={{color: '#ffffff;'}}></i> Sign in</h6>
              <h6><i class="fa-regular fa-bell" style={{color:' #ffffff;'}}></i></h6>
              </div>
              
              </div>
              <div className='container bg-dark text-light rounded p-3 mt-2 '>
                <h6><i class="fa-solid fa-house" style={{color: '#ffffff;'}}></i>  Game Pass </h6>
              </div>

              <div className='container bg-dark text-light rounded p-3 mt-2 '>
                <h6><i class="fa-solid fa-lines-leaning" style={{color: '#ffffff;'}}></i>  My library</h6>
              </div>
              
              <div className='container bg-dark text-light rounded p-3 mt-2 '>
                <h6> <i class="fa-solid fa-house" style={{color: '#ffffff;'}}></i>  Store</h6>
              </div>
             
             

            <div className='d-flex justify-content-between mt-5'>
              <p><h6>Most Recent</h6></p>
              <p><i class="fa-solid fa-bars" style={{color: '#ffffff;'}}></i></p>
              </div>

             <div>
              <Row>
              <Col className='mb-2' md={6} sm={12} lg={4} xl={3}>
              <Card className='bg-dark ' style={{ width: '18rem',color:'white' }}>
             <div className='d-flex'>
                <Card.Img className='w-50' src="https://www.windowscentral.com/sites/wpcentral.com/files/styles/medium/public/field/image/2021/08/forza-horizon-5-key-art-02.jpg" />
                <Card.Body>
                <Card.Title>Forza horizon 5</Card.Title>
                <Card.Text style={{color:' rgb(174, 174, 174)'}}>Update available</Card.Text>
         
                </Card.Body>
              </div>
              </Card>
              </Col>
              </Row>
             </div>

             <div className='mt-3'>
              <Row>
              <Col className='mb-2' md={6} sm={12} lg={4} xl={3}>
              <Card className='bg-dark ' style={{ width: '18rem',height:'6rem',color:'white' }}>
             <div className='d-flex'>
                <Card.Img className='w-50' src="https://static.vecteezy.com/system/resources/previews/000/581/683/original/play-icon-vector-illustration.jpg" />
                <Card.Body>
                <Card.Title>Games you play will show up here!</Card.Title>
                </Card.Body>
              </div>
              </Card>
              </Col>
              </Row>
             </div>

      
            </div>
            <Navigationbar/>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default App;
