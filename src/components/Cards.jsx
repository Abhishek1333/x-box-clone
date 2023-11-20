import React from 'react'
import Card from 'react-bootstrap/Card';
import Footer from './Footer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Cards() {
  return (
    <div>     
    <Row>
        <Col>
          <div className=' w-100 p-3'>
              <h1 className='fw-bolder'>Game Pass</h1>
              <h4 className='fw-bolder'>What's happening</h4>
          </div>
        </Col>
      </Row>
      <Row className='mb-5'>
        <Col>
        <Card className='bg-dark' style={{ width: '32rem',height:'20rem' }}>
        <Card.Img style={{height:'20rem'}}  src="https://img.gg.deals/b9/f7/ae1ab8698db225fd8f42acf8cf284034dcc0_912cr485.jpg" />
      </Card>
        </Col>
        
        <Col>
        <Card className='bg-dark' style={{ width: '32rem',height:'20rem' }}>
        <Card.Img style={{height:'20rem'}} src="https://video-game-guide-walkthrough.supersoluce.com/wp-content/uploads/2022/10/04/FIFA-23-Guide-Vignette.jpg" />
      </Card>
        </Col>

      </Row>

      <div>
        <Row className='mb-5'>
          <Col></Col>
          <Col className='d-flex align-items-center justify-content-center'><h4>
          <Button variant="secondary">ALL PC GAMES</Button>{' '}
          <Button variant="secondary">GET GAME PASS</Button>{' '}
          <Button variant="secondary">PERKS</Button>{' '}
            </h4></Col>
          <Col></Col>
        </Row>
      </div>


      <Row>
         <Col>
           <div className=' w-100 p-3 d-flex justify-content-between'>
              <div>
                <h3 className='fw-bolder j'>Recenty Added</h3>
                <h6 style={{color:' rgb(174, 174, 174)'}}>with games added all the time,you'll always have something to play</h6>
                </div>
              <p className='mt-2' style={{fontSize:'15px'}}>show all</p>
           </div>
         </Col>
       </Row>
       
      <div>
          <Row>
           <Col className='mb-2' md={6} sm={12} lg={4} xl={3}>
           <Card style={{ width: '12rem',height:'17rem',backgroundColor:'black' }}>
          <Card.Img style={{height:'13rem'}} variant="top" src="https://personacentral.com/wp-content/uploads/2016/08/Persona-5-Guide-Book.jpg" />
          <Card.Body>
          <Card.Title ><h5 style={{color:'white'}}>Persona 5 Tactica</h5></Card.Title>
          </Card.Body>
         </Card>
           </Col>

           <Col className='mb-2' md={6} sm={12} lg={4} xl={3}>
           <Card style={{ width: '12rem',height:'17rem',backgroundColor:'black' }}>
          <Card.Img style={{height:'13rem'}} variant="top" src="https://assets-prd.ignimgs.com/2022/06/13/spirittea-1655143457617.jpg" />
          <Card.Body>
          <Card.Title ><h5 style={{color:'white'}}>Spirittea</h5></Card.Title>
          </Card.Body>
         </Card>
           </Col>

           <Col className='mb-2' md={6} sm={12} lg={4} xl={3}>
           <Card style={{ width: '12rem',height:'17rem',backgroundColor:'black' }}>
          <Card.Img style={{height:'13rem'}} variant="top" src="https://upload.wikimedia.org/wikipedia/en/8/80/Wild_Hearts_cover_art.jpg" />
          <Card.Body>
          <Card.Title ><h5 style={{color:'white'}}>Wild Hearts</h5></Card.Title>
          </Card.Body>
         </Card>
            </Col>

            <Col className='mb-2' md={6} sm={12} lg={4} xl={3}>
            <Card style={{ width: '12rem',height:'17rem',backgroundColor:'black' }}>
          <Card.Img style={{height:'13rem'}} variant="top" src="https://images.cgames.de/images/gamestar/4/dungeons-3_2788607.jpg" />
          <Card.Body>
          <Card.Title ><h5 style={{color:'white'}}>Dungeons 4</h5></Card.Title>
          </Card.Body>
         </Card>
            </Col>
          </Row>
        </div>

      <div style={{backgroundColor: 'rgb(11, 27, 11)'}}>
          <Row className='mb-5'>
          <Col></Col>
          <Col  className='d-flex align-items-center justify-content-center'>
          <h4 className=' mb-5 mt-5'>COMING TO GAME PASS</h4>  
          </Col>
          <Col></Col>
          </Row>

          <Row className='d-flex align-items-center justify-content-center mb-5'>
          <Col className='mb-5 ' md={6} sm={12} lg={4} xl={3}>
            <Card style={{ width: '16rem',height:'18rem',backgroundColor:'black' }}>
          <Card.Img style={{height:'13rem'}} variant="top" src="https://gaming-cdn.com/images/products/13588/orig-fallback-v1/ea-sports-fc-2024-pc-game-cover.jpg?v=1676282527g" />
          <Card.Body>
          <Card.Title ><h5 style={{color:'white'}}>EA Sports FC 2024</h5></Card.Title>
          </Card.Body>
         </Card>            
            </Col>

            <Col className='mb-5 ' md={6} sm={12} lg={4} xl={3}>
            <Card style={{ width: '16rem',height:'18rem',backgroundColor:'black' }}>
          <Card.Img style={{height:'13rem'}} variant="top" src="https://tse1.mm.bing.net/th?id=OIF.yhn8CWycDbt0TqBY2yxh%2fg&pid=Api&P=0&h=180" />
          <Card.Body>
          <Card.Title ><h5 style={{color:'white'}}>GTA 6</h5></Card.Title>
          </Card.Body>
         </Card>            
            </Col>

          </Row>
        </div>

        <Row>
          <Col>
              <h3 className='fw-bolder '>Leaving soon</h3>
              <h6 style={{color:' rgb(174, 174, 174)'}}>Play before they leave or save up to 10% when you buy to own.</h6>
          </Col>
        </Row>


      <div>
          <Row className='mt-3 mb-5'>
          <Col className='mb-2 ' md={6} sm={12} lg={4} xl={3}>
           <Card style={{ width: '12rem',height:'17rem',backgroundColor:'black' }}>
          <Card.Img style={{height:'13rem'}} variant="top" src="https://store-images.s-microsoft.com/image/apps.31652.69486807692484611.68b10d87-21c4-47c7-bb8f-5b15e7593da3.e71a7ae4-e2fd-4c59-841d-68022083cadc?w=280" />
          <Card.Body>
          <Card.Title ><h5 style={{color:'white'}}>GRID</h5></Card.Title>
          </Card.Body>
         </Card>
           </Col>

           <Col className='mb-2' md={6} sm={12} lg={4} xl={3}>
           <Card style={{ width: '12rem',height:'17rem',backgroundColor:'black' }}>
          <Card.Img style={{height:'13rem'}} variant="top" src="https://store-images.s-microsoft.com/image/apps.53151.14370759136672533.dd01dbaf-ca58-4330-83f4-614a98d999d1.f2412a27-4e30-4700-8372-d4578f8023f1?w=280" />
          <Card.Body>
          <Card.Title ><h5 style={{color:'white'}}>Eastward</h5></Card.Title>
          </Card.Body>
         </Card>
           </Col>

           <Col className='mb-2' md={6} sm={12} lg={4} xl={3}>
           <Card style={{ width: '12rem',height:'17rem',backgroundColor:'black' }}>
          <Card.Img style={{height:'13rem'}} variant="top" src="https://store-images.s-microsoft.com/image/apps.50762.64989950958903531.7db6581c-61bc-4dfd-a6e7-623f39bf6c95.abe090c1-77de-467e-9b80-7596bf45ef9d?w=280" />
          <Card.Body>
          <Card.Title ><h5 style={{color:'white'}}>Battlefield 1943</h5></Card.Title>
          </Card.Body>
         </Card>
            </Col>

            <Col className='mb-2' md={6} sm={12} lg={4} xl={3}>
            <Card style={{ width: '12rem',height:'17rem',backgroundColor:'black' }}>
          <Card.Img style={{height:'13rem'}} variant="top" src="https://store-images.s-microsoft.com/image/apps.22041.14545480955348978.971a18b6-ebe3-437f-af65-4ba072de8964.4929058d-944d-48ac-bbf3-d52f18c24565?q=90&w=177&h=177" />
          <Card.Body>
          <Card.Title ><h5 style={{color:'white'}}>ARK</h5></Card.Title>
          </Card.Body>
         </Card>
            </Col>
          </Row>
        </div>

        <div>
        <Row className='mb-5'>
        <Col>
        <Card className='bg-dark mb-3' style={{ width: '32rem',height:'20rem' }}>
        <Card.Img style={{height:'20rem'}}  src="https://assets.xboxservices.com/assets/dc/cd/dccd44ce-7452-41f7-ad56-4a4abbdac8f7.jpg?n=Game-Hub_Content-Placement-0_Optimized_788x444_02.jpg" />
      </Card>
        <h4>Optimised for Xbox Series X|S</h4>
        <p>Games featuring the Optimised for Xbox Series X|S icon will showcase unparalleled load-times, heightened visuals and steadier framerates at up to 120FPS.</p>
        </Col>
        
        <Col>
        <Card className='bg-dark mb-3' style={{ width: '32rem',height:'20rem' }}>
        <Card.Img style={{height:'20rem'}} src="https://assets.xboxservices.com/assets/02/32/0232e424-c004-426c-9ca0-ebb47ac60274.jpg?n=Game-Hub_Content-Placement-0_029482443_788x444.jpg" />
      </Card>
      <h4>Backward compatible games</h4>
        <p>Experience four generations of gaming on Xbox with backward compatibility. Play your Xbox One library, plus fan-favourite Xbox 360 and Original Xbox games on Xbox Series X|S.</p>
        </Col>

      </Row>
        </div>

     <Footer/>
    </div>
  )
}

export default Cards


       

