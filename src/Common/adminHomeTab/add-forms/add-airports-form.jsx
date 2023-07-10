/** @format */

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Select } from "semantic-ui-react";
import { Icon } from "semantic-ui-react";
import { Form } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";
import TableAirpots from "../tables/table-airpots";
import { reqGetCountry } from "../../../redux/getActions";

const AirportsForm = () => {
  const dispatch = useDispatch();
  const axiosInstance = useSelector((state) => state.axios_instance.instance);

  const country = useSelector((state) => state.country.res);
  const city = useSelector((state) => state.city.res);
  const airports = useSelector((state) => state.airports.finded_airports);

  const [saveParams, setParams] = useState({
    city_name: "",
    name: "",
    iata_code: "",
    lat: "",
    lng: "",
    country_code: "",
  });
  const [selectCountry, setSelectCountry] = useState({
    countryNamed: "",
    id: "",
  });
  useEffect(() => {
    console.log('wer')
    dispatch(reqGetCountry(axiosInstance))
  }, [axiosInstance])
  
  useEffect(() => {
    console.log('country', country)
  }, [country])

  useEffect(() => {
    console.log('selectCountry111', selectCountry)
  }, [selectCountry]);

  const handleSaveParams = (data) => {
    setParams({ ...saveParams, [data.name]: data.value });
  };
  const handleSelect = (data) => {
    console.log("data.value", data);
    setSelectCountry(data.value);
  };

  const handleSelectCountry = (e, { name, value, options }) => {
    const temp = options.find((f) => f.value === value)
    setSelectCountry({...selectCountry, id:temp.value, countryNamed: temp.text})
    // setSelectCountry({
    //   ...selectCountry, [name]
    // })
    // console.log(value, temp)
  };
  // const handleSub = () => {
  //   console.log(saveParams, select);
  // };

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={16}>
          <Grid>
            <Grid.Row>
              <Grid.Column width={8}>
                <Form>
                  <Form.Group inline>
                    <Form.Select
                      options={country}
                      search
                      name='country_name'
                      // value={select}
                      label='Country'
                      placeholder='Country'
                      onChange={handleSelectCountry}
                    />
                    <Form.Select
                      options={city}
                      search
                      name='city_name'
                      // value={select}
                      label='City'
                      placeholder='City'
                      onChange={(e, data) => console.log(data)}
                    />
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
                      // search
                      name='name'
                      value={saveParams.name}
                      label='Name Airport'
                      placeholder='Name'
                      onChange={(e, data) => handleSaveParams(data)}
                    />

                    <Form.Input
                      // disabled={disableForm}
                      fluid
                      label='IATA'
                      placeholder='Code'
                      name='iata_code'
                      value={saveParams.iata_code}
                      onChange={handleSaveParams}
                    />
                  </Form.Group>

                  <Form.Group widths='equal'>
                    <Form.Input
                      // disabled={disableForm}
                      fluid
                      label='LAT'
                      placeholder='Code'
                      name='lat'
                      value={saveParams.lat}
                      // value={saveParams.distination_time}
                      onChange={handleSaveParams}
                    />
                    <Form.Input
                      // disabled={disableForm}
                      fluid
                      label='LNG'
                      placeholder='Code'
                      name='lng'
                      value={saveParams.lng}
                      // value={saveParams.flight_time}
                      onChange={handleSaveParams}
                    />
                  </Form.Group>
                  <Form.Group widths={"equal"}>
                    <Form.Input
                      // disabled={disableForm}
                      fluid
                      label='Country code'
                      placeholder='Code'
                      name='country_code'
                      value={saveParams.country_code}
                      onChange={handleSaveParams}
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
                    // onClick={() => handleSub()}
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
          <TableAirpots />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default AirportsForm;
