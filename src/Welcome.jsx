import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';

const Welcome = function () {
  return (
    <Container>
      <Row>
        <Alert key="danger" variant="danger">
          <p>
            {' '}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi quas
            odit fugit quis blanditiis dolor aliquam illo magnam, cum officia
            voluptatem dolorem doloremque! Nobis reprehenderit aspernatur unde
            quam, id in?
          </p>
        </Alert>
      </Row>
    </Container>
  );
};
export default Welcome;
