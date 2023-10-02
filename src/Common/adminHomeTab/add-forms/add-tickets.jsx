/** @format */

import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "semantic-ui-react";
import { Form } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";
// import { reqGetCountrys, serviceReqGet } from "../../../redux/getActions";
import TableTickets from "../tables/table-tickets";

const AddTickets = () => {
  const dispatch = useDispatch()

  const handleClick = () => {
    // dispatch(serviceReqGet())
  }
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={16}>
          <Grid>
            <Grid.Row>
              <Grid.Column width={8}>
                <Form>
                  <Form.Group inline>
                    <Form.Button onClick={handleClick}>ServiceCall</Form.Button>
                    <Form.Select
                      //   options={city}
                      //   search
                      name='city'
                      // value={saveParams.distination_city}
                      label='City'
                      placeholder=' City'
                      // onChange={handleSaveParams}
                    />
                    {/* <Form.Button
                      //   onClick={() => handleSerachAirports()}
                      >
                        Serch
                      </Form.Button> */}
                  </Form.Group>
                </Form>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Form>
                  <Form.Group widths='equal'>
                    <Form.Input
                      // disabled={disableForm}
                      fluid
                      //   control={Select}
                      // options={originAirport}
                      search
                      name='name_airport'
                      // value={saveParams.origin_airport}
                      label='Name Airport'
                      placeholder='Name'
                      // onChange={handleSaveParams}
                    />

                    <Form.Input
                      // disabled={disableForm}
                      fluid
                      label='IATA'
                      placeholder='Code'
                      name='iata_code'
                      // value={saveParams.price}
                      // onChange={handleSaveParams}
                    />
                  </Form.Group>

                  <Form.Group widths='equal'>
                    <Form.Input
                      // disabled={disableForm}
                      fluid
                      label='LAT'
                      placeholder='Code'
                      name='distination_time'
                      // value={saveParams.distination_time}
                      // onChange={handleSaveParams}
                    />
                    <Form.Input
                      // disabled={disableForm}
                      fluid
                      label='LNG'
                      placeholder='Code'
                      name='flight_time'
                      // value={saveParams.flight_time}
                      // onChange={handleSaveParams}
                    />
                  </Form.Group>
                  <Form.Group widths={"equal"}>
                    <Form.Input
                      // disabled={disableForm}
                      fluid
                      label='Country code'
                      placeholder='Code'
                      name='flight_time'
                      // value={saveParams.flight_time}
                      // onChange={handleSaveParams}
                    />
                    <Form.TextArea
                      //   disabled={disableForm}
                      label='Note'
                      placeholder='Note'
                    />
                  </Form.Group>
                  <Form.Checkbox
                    //   disabled={disableForm}
                    label='I agree to the Terms and Conditions'
                  />
                  <Form.Button
                  //   disabled={disableForm}
                  //   onClick={() => handleSub()}
                  >
                    Submit
                  </Form.Button>
                </Form>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <TableTickets />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default AddTickets;
