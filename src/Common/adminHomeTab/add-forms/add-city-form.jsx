/** @format */

import React from "react";
import { useState } from "react";
import { Form } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";

const AddCityform = () => {
    const [input, setInput] = useState({
        name: '',
        email: '',
        pass: ''
    })

    const handleSaveParams = (e, {name, value}) => {
        setInput({...input,  [name]: value})
    }

  return (
    <Grid>
      <Grid.Row columns={16}>
        <Grid.Column style={{ border: "2px solid red" }} width={16}>
          <Form>
            <Form.Group>
              <Form.Input
                // disabled={disableForm}
                fluid
                // search
                name='name'
                value={input.name}
                label='Name Airport'
                placeholder='Name'
                onChange={handleSaveParams}
              />
              <Form.Input
                // disabled={disableForm}
                fluid
                // search
                name='email'
                value={input.email}
                label='Name Airport'
                placeholder='Name'
                onChange={handleSaveParams}
              />
                   <Form.Input
                // disabled={disableForm}
                fluid
                // search
                name='pass'
                value={input.pass}
                label='Name Airport'
                placeholder='Name'
                onChange={handleSaveParams}
              />
            </Form.Group>
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default AddCityform;
