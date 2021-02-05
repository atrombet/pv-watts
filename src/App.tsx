import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import PVWattForm from './components/PVWattForm';
import { useFormState } from './state';

const App: React.FC = () => {

  const [ formState, setFormState ] = useFormState();

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormState((state) => ({ ...state, [name]: value }));
  };

  const onPVWattFormSubmit = (event: any) => {
    event.preventDefault();
    console.log('submitted');
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={6}>
          <PVWattForm form={formState} handleChange={handleChange} onFormSubmit={onPVWattFormSubmit} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
