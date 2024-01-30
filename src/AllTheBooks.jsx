import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import MyBooks from '../src/data/scifi.json';
import { Container } from 'react-bootstrap';

class AllTheBooks extends Component {
  render() {
    return (
      <>
        <Container>
          <Row></Row>
        </Container>
        {MyBooks.map((scifi) => {
          return;

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={scifi.img} />
            <Card.Body>
              <Card.Title>{scifi.title}</Card.Title>
              <Card.Text></Card.Text>
              <Button variant="primary"></Button>
            </Card.Body>
          </Card>;
        })}
      </>
    );
  }
}

export default AllTheBooks;
