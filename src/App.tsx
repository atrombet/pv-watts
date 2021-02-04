import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import PVWattForm from './components/PVWattForm';

const App: React.FC = () => {

  const onPVWattFormSubmit = () => {
    console.log('submitted');
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={6}>
          <PVWattForm onFormSubmit={onPVWattFormSubmit} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
