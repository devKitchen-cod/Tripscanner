/** @format */

import React from "react";
import { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";
import { reqCreateClassFlight } from "../../../redux/classFlight_actions";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";

const AddClassFlightForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const axiosInstance = useSelector((state) => state.axios_instance.instance);
  const [input, setInput] = useState({
    name: "",
    price: 0,
    info: ''
  });

  const handleSaveParams = (e, { name, value }) => {
    setInput({ ...input, [name]: value });
  };
  const handleCreateClassFlight = () => {
    if(!axiosInstance) return 
    dispatch(reqCreateClassFlight(axiosInstance, input));
  };

  return (
    <Grid>
      <Grid.Row columns={16}>
        <Grid.Column width={16}>
          <Form>
            <Form.Group>
              <Form.Input
                // disabled={disableForm}
                fluid
                // search
                name='name'
                value={input.name}
                label='Name Class'
                placeholder='Name'
                onChange={handleSaveParams}
              />
              <Form.Input
                style={{ width: "100px" }}
                // disabled={disableForm}
                fluid
                // search
                name='price'
                value={input.price}
                label='Price'
                placeholder='price'
                onChange={handleSaveParams}
              />
               <Form.Input
                style={{ width: "500px" }}
                // disabled={disableForm}
                fluid
                // search
                name='info'
                value={input.info}
                label='Info'
                placeholder='Info'
                onChange={handleSaveParams}
              />
              <Button onClick={handleCreateClassFlight}>Create class</Button>
            </Form.Group>
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default AddClassFlightForm;
