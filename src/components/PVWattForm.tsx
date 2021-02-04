import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

interface PVWattFormProps {
  onFormSubmit: () => void;
}

const PVWattForm: React.FC<PVWattFormProps> = ({ onFormSubmit }) => (
  <Form onSubmit={onFormSubmit}>

    <Form.Group controlId="systemCapacity">
      <Form.Label>System Capacity</Form.Label>
      <Form.Control type="number" step={0.01} min={0.05} max={500000} placeholder="Enter a value 0.05 to 500,000" />
    </Form.Group>

    <Form.Group controlId="moduleType">
      <Form.Label>Module Type</Form.Label>
      <Form.Control as="select">
        <option value={0}>Standard</option>
        <option value={1}>Premium</option>
        <option value={2}>Thin film</option>
      </Form.Control>
    </Form.Group>

    <Form.Group controlId="losses">
      <Form.Label>Losses</Form.Label>
      <Form.Control type="number" step={0.01} min={-5} max={99} placeholder="Enter a value -5 to 99" />
    </Form.Group>

    <Form.Group controlId="arrayType">
      <Form.Label>Array Type</Form.Label>
      <Form.Control as="select">
        <option value={0}>Fixed - Open Rack</option>
        <option value={1}>Fixed - Roof Mounted</option>
        <option value={2}>1-Axis</option>
        <option value={3}>1-Axis Backtracking</option>
        <option value={4}>2-Axis</option>
      </Form.Control>
    </Form.Group>

    <Form.Group controlId="tilt">
      <Form.Label>Tilt</Form.Label>
      <Form.Control type="number" step={0.01} min={0} max={90} placeholder="Enter a value 0 to 90" />
    </Form.Group>

    <Form.Group controlId="azimuth">
      <Form.Label>Azimuth</Form.Label>
      <Form.Control type="number" step={0.01} min={0} max={359.99} placeholder="Enter a value 0 to 359.99" />
    </Form.Group>

    <Form.Group controlId="address">
      <Form.Label>Address</Form.Label>
      <Form.Control type="text" placeholder="Enter an address" />
    </Form.Group>

    <Form.Group controlId="lat">
      <Form.Label>Latitude</Form.Label>
      <Form.Control type="number" step={0.01} min={-90} max={90} placeholder="Enter a value -90 to 90" />
    </Form.Group>

    <Form.Group controlId="lon">
      <Form.Label>Longitude</Form.Label>
      <Form.Control type="number" step={0.01} min={-180} max={180} placeholder="Enter a value -180 to 180" />
    </Form.Group>

    <Form.Group controlId="fileId">
      <Form.Label>File ID</Form.Label>
      <Form.Control type="text" placeholder="Specify a valid file ID returned by the Solar Dataset Query API" />
    </Form.Group>

    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
);

export default PVWattForm;
