import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
const Pulse=() => {
    
  return (
    <>
      <Card
        style={{
          overflow: 'hidden',
          backgroundImage: 'url(1.jpg)',
          height: '100vh',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
        className="bg-light border-0 rounded-0 text-white"
      >
        <Card.ImgOverlay className="overflow-card card-img-overlay d-flex flex-row justify-content-center align-items-center">
          <Row
            style={{
              width: '35vw',
              height: '35vw',
              backgroundColor: 'hsla(0, 0%, 98%, 0.164)',
              backgroundSize: 'contain',
              borderRadius: '50%',
              position: 'absolute',
              animation: `animate 3s linear infinite`
            }}
            className="pulse d-flex justify-content-center align-items-center  positioning-pulse"
          >
            <Image
              style={{ height: '20vw', width: '20vw', zIndex: 200 }}
              src="3.png"
              fluid
            />
          </Row>
          <Row
            style={{
              width: '50vw',
              height: '50vw',
              backgroundColor: 'hsla(0, 0%, 98%, 0.164)',
              backgroundSize: 'contain',
              borderRadius: '50%',
              position: 'absolute',
              animation: `animate 3s linear infinite`
            }}
            className="pulse  positioning-pulse2"
          ></Row>
          <Row
            style={{
              width: '75vw',
              height: '75vw',
              backgroundColor: 'hsla(0, 0%, 98%, 0.164)',
              backgroundSize: 'contain',
              borderRadius: '50%',
              position: 'absolute',
              animation: `animate 3s linear infinite`
            }}
            className="pulse  positioning-pulse3"
          ></Row>
        </Card.ImgOverlay>
      </Card>
    </>
  );
}


export default Pulse;