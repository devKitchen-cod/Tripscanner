/** @format */

import React from "react";
import { useState } from "react";
import { Form } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";
import {
  Button,
  Checkbox,
  Input,
  Radio,
  Select,
  TextArea,
} from "semantic-ui-react";
const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" },
];
const CustomizedFlight = () => {
  const [value, setState] = useState();
  const handleChange = () => {};
  return (
    <div>
      <Grid>
        <Grid.Row style={{ border: "2px solid red" }}>
          <Grid.Column>
            <Form>
              <Form.Group widths='equal'>
                <Form.Field
                  control={Select}
                  label='Gender'
                  options={options}
                  placeholder='Gender'
                />
              </Form.Group>
              <Form.Group grouped>
                <label>Quantity</label>
                <Form.Field
                  control={Checkbox}
                  label='Dining'
                  value='1'
                  checked={value === "1"}
                  onChange={handleChange}
                />
                <Form.Field
                  control={Checkbox}
                  label='Entertainment'
                  value='2'
                  checked={value === "2"}
                  onChange={handleChange}
                />
                <Form.Field
                  control={Checkbox}
                  label='Wi-Fi'
                  value='3'
                  checked={value === "3"}
                  onChange={handleChange}
                />
                 <Form.Field
                  control={Checkbox}
                  label='Pillow and Blanket'
                  value='3'
                  checked={value === "3"}
                  onChange={handleChange}
                />
                 <Form.Field
                  control={Checkbox}
                  label='Extra Seat'
                  value='3'
                  checked={value === "3"}
                  onChange={handleChange}
                />
                 <Form.Field
                  control={Checkbox}
                  label='Portable Chargers'
                  value='3'
                  checked={value === "3"}
                  onChange={handleChange}
                />
                  <Form.Field
                  control={Checkbox}
                  label='Additional Services for Children'
                  value='3'
                  checked={value === "3"}
                  onChange={handleChange}
                />
              </Form.Group>
           
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default CustomizedFlight;
