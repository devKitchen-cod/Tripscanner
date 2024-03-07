/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Button, Form, Grid } from "semantic-ui-react";
import { reqCreateClassFlight } from "../../../redux/classFlight_actions";
import _ from "lodash";

const AddAircraftForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const axiosInstance = useSelector((state) => state.axios_instance.instance);
  const [isLoad, setIsLoad] = useState(true);
  useEffect(() => {
    setIsLoad(!isLoad);
  }, [axiosInstance]);
  const [input, setInput] = useState({
    name: "",
    totalPlaceCount: 0,
    firstClassPlaceCount: 0,
    businessClassPlaceCount: 0,
    premiumEcoClassPlaceCount: 0,
    ecoClassPlaceCount: 0,
  });

  const handleSaveParams = (e, { name, value }) => {
    setInput({ ...input, [name]: value });
  };
  const handleCreateAirctaft = () => {
    if (!axiosInstance) return;
    // dispatch(reqCreateClassFlight(axiosInstance, input));
    // setInput({...input, totalPlaceCount: )
    let obj = {
      name: input.name,
      totalPlaceCount:
        parseInt(input.firstClassPlaceCount) +
        parseInt(input.businessClassPlaceCount) +
        parseInt(input.premiumEcoClassPlaceCount) +
        parseInt(input.ecoClassPlaceCount),
      firstClassPlaceCount: parseInt(input.firstClassPlaceCount),
      businessClassPlaceCount: parseInt(input.businessClassPlaceCount),
      premiumEcoClassPlaceCount: parseInt(input.premiumEcoClassPlaceCount),
      ecoClassPlaceCount: parseInt(input.ecoClassPlaceCount),
    };
  };

  return (
    <Grid>
      <Grid.Row centered>
        <Grid.Column width={14}>
          <Form loading={isLoad}>
            <Form.Group grouped>
              <Form.Input
                style={{ width: "200px" }}
                fluid
                name='name'
                value={input.name}
                label='Name Of Aircraft'
                placeholder='Name'
                onChange={handleSaveParams}
              />
              <Form.Input
                fluid
                type='number'
                name='firstClassPlaceCount'
                value={input.firstClassPlaceCount}
                label='Count firstClassPlaceCount'
                placeholder='Count'
                onChange={handleSaveParams}
              />
              <Form.Input
                fluid
                type='number'
                name='businessClassPlaceCount'
                value={input.businessClassPlaceCount}
                label='Count businessClassPlaceCount'
                placeholder='Count'
                onChange={handleSaveParams}
              />
              <Form.Input
                fluid
                type='number'
                name='premiumEcoClassPlaceCount'
                value={input.premiumEcoClassPlaceCount}
                label='Count premiumEcoClassPlaceCount'
                placeholder='Count'
                onChange={handleSaveParams}
              />
              <Form.Input
                fluid
                type='number'
                name='ecoClassPlaceCount'
                value={input.ecoClassPlaceCount}
                label='Count ecoClassPlaceCount'
                placeholder='Count'
                onChange={handleSaveParams}
              />

              <Button onClick={handleCreateAirctaft}>Create Aircraft</Button>
            </Form.Group>
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default AddAircraftForm;
