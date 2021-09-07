import { Container,Row,Col,Image } from 'react-bootstrap';
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
import tropical from '../imgs/alevision-co-3jlUF7-3-4E-unsplash.jpg';
import banner from '../imgs/alexander-kaunas-xEaAoizNFV8-unsplash.jpg';
import imgSvg from '../imgs/flight.svg';


function Main() {
  return (
    <>
    <section id="about">
    <Container fluid="md">
      <Row className="more evenMorePad">
        <Col md="auto mx-8"><Image className="svg " src={imgSvg} roundedCircle /></Col>
        <Col md="auto mx-4">
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