import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import MyBooks from '../src/data/scifi.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class AllTheBooks extends Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            {MyBooks.map((scifi) => {
              return (
                <Col xs={12} md={4}>
                  <Card className="h-100">
                    <Card.Img variant="top" src={scifi.img} />
                    <Card.Body>
                      <Card.Title>{scifi.title}</Card.Title>
                      <Card.Text>{scifi.category}</Card.Text>
                      <Button variant="primary"> {scifi.price}</Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </>
    );
  }
}

export default AllTheBooks;
