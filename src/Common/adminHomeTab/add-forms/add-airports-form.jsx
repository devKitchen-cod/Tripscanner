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
import { reqFindCityAirports } from "../../../redux/postActions";

const AirportsForm = () => {
  const dispatch = useDispatch();
  const axiosInstance = useSelector((state) => state.axios_instance.instance);

  const country = useSelector((state) => state.country.res);
  const city = useSelector((state) => state.city.city_airport_dislocation);
  // const airports = useSelector((state) => state.airports.res);

  const [saveParams, setParams] = useState({
    name: "",
    iata_code: "",
    icao_code: "",
    lat: "",
    lon: "",
    timezone_name: "",
    timezone_offset: "",
    timezone_offsetHours: "",
    timezone_abbr: "",
    timezone_abbrName: "",
    timezone_isDst: "",
  });
  const [selectCountry, setSelectCountry] = useState({
    countryNamed: "",
    id: "",
  });
  useEffect(() => {
    dispatch(reqGetCountry(axiosInstance));
  }, [axiosInstance]);

  useEffect(() => {
    dispatch(reqFindCityAirports(axiosInstance, selectCountry));
  }, [selectCountry]);

  const handleSaveParams = (e, { name, value}) => {
    setParams({ ...saveParams, [name]: value });
  };

  const handleSelectCountry = (e, { name, value, options }) => {
    const temp = options.find((f) => f.value === value);
    setSelectCountry({
      ...selectCountry,
      id: temp.value,
      countryNamed: temp.text,
    });
  };
  const handleSub = () => {
    console.log("saveParams", saveParams);
  };

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
                      name='name'
                      label='Name Airport'
                      placeholder='Name'
                      onChange={handleSaveParams}
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
                    <Form.Input
                      // disabled={disableForm}
                      fluid
                      label='ICAO'
                      placeholder='Code'
                      name='icao_code'
                      value={saveParams.icao_code}
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
                      onChange={handleSaveParams}
                    />
                    <Form.Input
                      // disabled={disableForm}
                      fluid
                      label='LON'
                      placeholder='Code'
                      name='lon'
                      value={saveParams.lon}
                      onChange={handleSaveParams}
                    />
                  </Form.Group>
                  <Form.Group widths={"equal"}>
                    <Form.TextArea
                      //   disabled={disableForm}
                      label='Note'
                      placeholder='Note'
                    />
                  </Form.Group>

                  <Form.Button
                    //   disabled={disableForm}
                    onClick={() => handleSub()}>
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
