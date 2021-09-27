import { Container,Row,Col,Image,Form,Card,Button } from 'react-bootstrap';
import '../App.css';
import sf from "../imgs/amogh-manjunath-HksFlo1t8iA-unsplash.jpg";
import tokyo from '../imgs/alexander-schimmeck-OKdKNyD1RLI-unsplash.jpg';
import ny from '../imgs/andreas-kruck-l8ypMiU1Hio-unsplash.jpg';
import dubai from '../imgs/fredrik-ohlander-fCW1hWq2nq0-unsplash.jpg';
import chicago from '../imgs/sawyer-bengtson--csZbF1o5_k-unsplash.jpg';
import singapore from '../imgs/swapnil-bapat-sJ7pYyJFyuA-unsplash.jpg';
import seattle from '../imgs/thom-milkovic-skUTVJi8-jc-unsplash.jpg';
import snow from '../imgs/josh-hild-_TuI8tZHlk4-unsplash.jpg';
import city from '../imgs/max-bender-VmX3vmBecFE-unsplash.jpg';
import beach from '../imgs/sean-oulashin-KMn4VEeEPR8-unsplash.jpg';
import tropical from '../imgs/alevision-co-3jlUF7-3-4E-unsplash.jpg';
import imgSvg from '../imgs/flight.svg';


function Main() {
  return (
    <>
    <section id="banner"> 
    <Row className="d-flex justify-content-center py-5">
      <h1 className="text-center text-light py-4 display-3">Plan a vacation with us!</h1>
        <Col md="auto mx-3"><Image className="seasons" src={city} roundedCircle /></Col>
        <Col md="auto mx-3"><Image className="seasons" src={beach} roundedCircle /></Col>
        <Col md="auto mx-3"><Image className="seasons" src={tropical} roundedCircle /></Col>
        <Col md="auto mx-3"><Image className="seasons" src={snow} roundedCircle /></Col>
    </Row>
    <Form>
    <Container>
  <Row className="pt-5">
    <Col md={7}>
      <Form.Control placeholder="Location" />
    </Col>
    <Col>
    <Form.Control placeholder="Arrival" />
    </Col>
    <Col>
    <Form.Control placeholder="Departure" />
    </Col>
  </Row>
  </Container>
</Form>
    </section>

    <section id="cards">
      <div className="row mt-3">
        
      
        <Card style={{ width: '38rem' }}>
        <Card.Img variant="top" src={sf} />
        <Card.Body className="text-center">
        <Card.Title>Card Title</Card.Title>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
        </div>
        <div className="col">
        <Card style={{ width: '38rem' }}>
        <Card.Img variant="top" src={sf} />
        <Card.Body className="text-center"s>
        <Card.Title className="text-center">Card Title</Card.Title>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
        </div>
        <div className="col">
        <Card style={{ width: '38rem' }}>
        <Card.Img variant="top" src={sf} />
        <Card.Body className="text-center"s>
        <Card.Title className="text-center">Card Title</Card.Title>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
        
      </div>
    </section>

    <section id="about">
    <Container fluid="md">
      <Row className="more evenMorePad">
        <Col md="auto mx-8"><Image className="svg " src={imgSvg} roundedCircle /></Col>
        <Col md="auto mx-3">
          <figure className="top">
            <blockquote class="blockquote">
              <p>“Travel is about the gorgeous feeling of teetering in the unknown.”</p>
            </blockquote>
          <figcaption class="blockquote-footer">
          Anthony Bourdain <cite title="Source Title">Parts Unknown</cite>
          </figcaption>
          </figure></Col>
      </Row>
    </Container>
    </section>
    <section id="places">
    <Container fluid="md">
      <Row className="morePad smallTop">
        <Col md="auto mx-3"><Image className="locations" src={sf} roundedCircle /></Col>
        <Col md="auto mx-3"><Image className="locations" src={seattle} roundedCircle /></Col>
        <Col md="auto mx-3"><Image className="locations" src={chicago} roundedCircle /></Col>
        <Col md="auto mx-3"><Image className="locations" src={ny} roundedCircle /></Col>
      </Row>
      <Row className="smallBot mt-3">
        <Col md="auto mx-3"><Image className="locations" src={singapore} roundedCircle /></Col>
        <Col md="auto mx-3"><Image className="locations" src={dubai} roundedCircle /></Col>
        <Col md="auto mx-3"><Image className="locations" src={tokyo} roundedCircle /></Col>
        <Col md="auto mx-3"><Image className="locations" src={tokyo} roundedCircle/></Col>
      </Row>
    </Container>
    </section>
    </>
  );
}

export default Main;