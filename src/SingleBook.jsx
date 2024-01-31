import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Singlebook = ({ Book }) => {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4} lg={2}></Col>
        <Card className="h-100">
          <Card.Img style={{ height: '200px' }} variant="top" src={book.img} />
          <Card.Body>
            <Card.Title> {Book.Title}</Card.Title>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default Singlebook;
