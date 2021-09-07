import { Container,Row,Col,Image } from 'react-bootstrap';
import '../App.css'
import sf from "../imgs/amogh-manjunath-HksFlo1t8iA-unsplash.jpg"



function Main() {
  return (
    <>
    <section id="places">
    <Container fluid="md">
      <Row>
        <Col><Image className="locations" src={sf} roundedCircle /></Col>
        <Col><Image src="holder.js/171x180" roundedCircle /></Col>
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