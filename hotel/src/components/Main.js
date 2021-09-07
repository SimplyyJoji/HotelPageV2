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
    <section id="places">
    <Container fluid="md">
      <Row>
        <Col><Image className="locations" src={sf} roundedCircle /></Col>
        <Col><Image className="locations" src={tokyo}  roundedCircle /></Col>
        <Col><Image src="holder.js/171x180" roundedCircle /></Col>
        <Col><Image src="holder.js/171x180" roundedCircle /></Col>
      </Row>
      <Row>
        <Col><Image src="holder.js/171x180" roundedCircle /></Col>
        <Col><Image src="holder.js/171x180" roundedCircle /></Col>
        <Col><Image src="holder.js/171x180" roundedCircle /></Col>
        <Col><Image src="holder.js/171x180" roundedCircle /></Col>
      </Row>
    </Container>
    </section>
    </>
  );
}

export default Main;