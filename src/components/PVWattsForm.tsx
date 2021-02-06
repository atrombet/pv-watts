import React from 'react';
import Form from 'react-bootstrap/Form';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { PVWattsParams } from '../interfaces';
import { FormFields } from '../enums';

interface PVWattsFormProps {
  form: Partial<PVWattsParams>;
  handleChange: (event: any) => void;
  onFormSubmit: (event: any) => void;
}

export const PVWattsForm: React.FC<PVWattsFormProps> = ({ form, handleChange, onFormSubmit }) => {
  return (
    <Form onSubmit={onFormSubmit}>
      <h1>PVWatts API Form</h1>

      <Form.Row>
        <Form.Group as={Col} controlId="systemCapacity"> 
          <Form.Label>System Capacity</Form.Label>
          <Form.Control 
            name={FormFields.SystemCapacity}
            value={form[FormFields.SystemCapacity]}
            onChange={handleChange}
            type="number"
            step={0.01}
            min={0.05}
            max={500000}
            required
            placeholder="Enter a value 0.05 to 500,000"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="losses">
          <Form.Label>Losses</Form.Label>
          <Form.Control
            name={FormFields.Losses}
            value={form[FormFields.Losses]}
            onChange={handleChange}
            type="number"
            step={0.01}
            min={-5}
            max={99}
            required
            placeholder="Enter a value -5 to 99"
          />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="moduleType">
          <Form.Label>Module Type</Form.Label>
          <Form.Control 
            as="select"
            name={FormFields.ModuleType}
            value={form[FormFields.ModuleType]}
            onChange={handleChange}
            required
          >
            <option value={0}>Standard</option>
            <option value={1}>Premium</option>
            <option value={2}>Thin film</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="arrayType">
          <Form.Label>Array Type</Form.Label>
          <Form.Control 
            as="select"
            name={FormFields.ArrayType}
            value={form[FormFields.ArrayType]}
            onChange={handleChange}
            required
          >
            <option value={0}>Fixed - Open Rack</option>
            <option value={1}>Fixed - Roof Mounted</option>
            <option value={2}>1-Axis</option>
            <option value={3}>1-Axis Backtracking</option>
            <option value={4}>2-Axis</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="tilt">
          <Form.Label>Tilt</Form.Label>
          <Form.Control
            name={FormFields.Tilt}
            value={form[FormFields.Tilt]}
            onChange={handleChange}
            type="number"
            step={0.01}
            min={0}
            max={90}
            required
            placeholder="Enter a value 0 to 90"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="azimuth">
          <Form.Label>Azimuth</Form.Label>
          <Form.Control
            name={FormFields.Azimuth}
            value={form[FormFields.Azimuth]}
            onChange={handleChange}
            type="number"
            step={0.01}
            min={0}
            max={359.99}
            required
            placeholder="Enter a value 0 to 359.99"
          />
        </Form.Group>
      </Form.Row>

      <hr/>
      <p><strong>Please enter data for ONE fo the following rows.</strong></p>

      <Form.Group controlId="address">
        <Form.Label>Address</Form.Label>
        <Form.Control
          name={FormFields.Address}
          value={form[FormFields.Address]}
          onChange={handleChange}
          type="text"
          placeholder="Enter an address"
        />
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col} controlId="lat">
          <Form.Label>Latitude</Form.Label>
          <Form.Control
            name={FormFields.Lat}
            value={form[FormFields.Lat]}
            onChange={handleChange}
            type="number"
            step={0.01}
            min={-90}
            max={90}
            placeholder="Enter a value -90 to 90"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="lon">
          <Form.Label>Longitude</Form.Label>
          <Form.Control
            name={FormFields.Lon}
            value={form[FormFields.Lon]}
            onChange={handleChange}
            type="number"
            step={0.01}
            min={-180}
            max={180}
            placeholder="Enter a value -180 to 180"
          />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="fileId">
        <Form.Label>File ID</Form.Label>
        <Form.Control 
          name={FormFields.FileId}
          value={form[FormFields.FileId]}
          onChange={handleChange}
          type="text"
          placeholder="Specify a valid file ID returned by the Solar Dataset Query API"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
