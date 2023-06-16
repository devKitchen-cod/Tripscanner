/** @format */

import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Form, Grid, Icon, Input, Select, Table } from "semantic-ui-react";

import TableFlights from "../tables/table-flight";
import { reqAddFlights } from "../../../redux/postActions";
import {
  reqFindAirports,
  reqGetAirports,
  reqGetCity,
  reqGetCountry,
  reqGetFlights,
} from "../../../redux/getActions";

const data = [
  {
    name: "California",
    city_code: "WCC",
    lat: 37.25022,
    lng: -119.75126,
    country_code: "US",
  },
  {
    name: "California",
    city_code: "WCC",
    lat: 37.25022,
    lng: -119.75126,
    country_code: "US",
  },
  {
    name: "California",
    city_code: "WCC",
    lat: 37.25022,
    lng: -119.75126,
    country_code: "US",
  },
  {
    name: "California",
    city_code: "WCC",
    lat: 37.25022,
    lng: -119.75126,
    country_code: "US",
  },
  {
    name: "California",
    city_code: "WCC",
    lat: 37.25022,
    lng: -119.75126,
    country_code: "US",
  },
  {
    name: "California",
    city_code: "WCC",
    lat: 37.25022,
    lng: -119.75126,
    country_code: "US",
  },

  {
    name: "California",
    city_code: "WCC",
    lat: 37.25022,
    lng: -119.75126,
    country_code: "US",
  },
  {
    name: "California",
    city_code: "WCC",
    lat: 37.25022,
    lng: -119.75126,
    country_code: "US",
  },
  {
    name: "California",
    city_code: "WCC",
    lat: 37.25022,
    lng: -119.75126,
    country_code: "US",
  },
  {
    name: "California",
    city_code: "WCC",
    lat: 37.25022,
    lng: -119.75126,
    country_code: "US",
  },
];

const FlightsForm = (disable) => {
  const dispatch = useDispatch();

  const country = useSelector((state) => state.country.res);
  const city = useSelector((state) => state.city.res);
  const airport = useSelector((state) => state.airports.finded_airports);
  const flights = useSelector((state) => state.flights.res);

  const axiosInstance = useSelector((state) => state.axios_instance.instance);
  const [originAirport, setOriginAirport] = useState([]);
  const [distinationAirport, setDistinationAirport] = useState([]);

  const [saveParams, setParams] = useState({
    name: "",
    origin_country: {
      id: "",
      name: "",
    },
    distination_country: {
      id: "",
      name: "",
    },
    origin_airport: "",
    distination_airport: "",
    origin_city: "",
    distination_city: "",
    price: "",
    origin_time: "",
    distination_time: "",
    flight_time: "",
  });

  const [disableForm, setDisableForm] = useState(false);

  let origin_airport = airport.origin_airports;
  let distination_airport = airport.distination_airports;

  useEffect(() => {
    console.log("asd");
    dispatch(reqGetCountry(axiosInstance));
    // dispatch(reqGetCity(axiosInstance));
    // dispatch(reqFindAirports(axiosInstance, ));
    // dispatch(reqFindAirports());
  }, []);

  useEffect(() => {
    console.log("country", country);
    // console.log('city', city)
  }, [country]);

  useEffect(() => {
    if(saveParams.origin_country.id && saveParams.distination_country.id){
      let obj = {
        origin: saveParams.origin_country.id,
        distination: saveParams.distination_country.id,
      }
      // dispatch(reqGetCity(axiosInstance, obj));
    }
    console.log("save country", saveParams.origin_country.id);
    console.log("save country", saveParams.origin_country.name);
    console.log("saveParams", saveParams);
  }, [saveParams]);

  const handleSetCountry = (e, { name, value, options }) => {
    const t = options.find((o) => o.value === value)
    setParams({
      ...saveParams,
      [name]: { id: value, name: t.text },
    });
  };

  return (
    <div>
      {disable ? (
        <div>
          <Grid>
            <Grid.Row>
              <Grid.Column width={16}>
                <Grid>
                  <Grid.Row width={16}>
                    <Grid.Column width={8}>
                      <Form>
                        <Form.Group>
                          <Form.Select
                            options={country}
                            search
                            name='origin_country'
                            // value={saveParams.origin_country}
                            label='Origin Country'
                            placeholder='Origin Country'
                            onChange={handleSetCountry}
                          />
                          <Form.Select
                            options={country}
                            search
                            name='distination_country'
                            label='Distination Country'
                            placeholder='Distination Country'
                            onChange={handleSetCountry}
                          />
                        </Form.Group>
                        <Form.Group inline>
                          <label>Size</label>
                          <Form.Radio
                            label='Inside Country'
                            value='sm'
                            // checked={value === "sm"}
                            // onChange={this.handleChange}
                          />
                          <Form.Radio
                            label='Medium'
                            value='md'
                            // checked={value === "md"}
                            // onChange={this.handleChange}
                          />
                          <Form.Radio
                            label='Large'
                            value='lg'
                            // checked={value === "lg"}
                            // onChange={this.handleChange}
                          />
                        </Form.Group>
                        <Form.Group>
                          {/* <Icon size='large' name='caret square up' /> */}
                          <Form.Select
                            options={city}
                            search
                            name='origin_city'
                            value={saveParams.origin_city}
                            label='Origin City'
                            placeholder='Origin City'
                            // onChange={handleSaveParams}
                          />
                          <Form.Select
                            options={city}
                            search
                            name='distination_city'
                            value={saveParams.distination_city}
                            label='Distination City'
                            placeholder='Distination City'
                            // onChange={handleSaveParams}
                          />
                        </Form.Group>
                      </Form>
                    </Grid.Column>
                  </Grid.Row>

                  <Grid.Row columns={16} centered>
                    <Grid.Column width={16}>
                      <Form>
                        <Form.Group widths='equal'>
                          <Form.Input
                            disabled={disableForm}
                            fluid
                            control={Select}
                            options={originAirport}
                            search
                            name='origin_airport'
                            value={saveParams.origin_airport}
                            label='Origin Airport'
                            placeholder='Origin'
                            // onChange={handleSaveParams}
                          />
                          <Form.Input
                            disabled={disableForm}
                            fluid
                            control={Select}
                            options={distinationAirport}
                            search
                            name='distination_airport'
                            value={saveParams.distination_airport}
                            label='Distination'
                            placeholder='Distination'
                            // onChange={handleSaveParams}
                          />
                          <Form.Input
                            disabled={disableForm}
                            fluid
                            label='Price'
                            placeholder='Price'
                            name='price'
                            value={saveParams.price}
                            // onChange={handleSaveParams}
                          />
                        </Form.Group>

                        <Form.Group widths='equal'>
                          <Form.Input
                            disabled={disableForm}
                            fluid
                            label=' Origin time'
                            placeholder='Origin time'
                            name='origin_time'
                            value={saveParams.origin_time}
                            // onChange={handleSaveParams}
                          />
                          <Form.Input
                            disabled={disableForm}
                            fluid
                            label='Distination time'
                            placeholder='Distination time'
                            name='distination_time'
                            value={saveParams.distination_time}
                            // onChange={handleSaveParams}
                          />
                          <Form.Input
                            disabled={disableForm}
                            fluid
                            label=' Flight time'
                            placeholder='Code'
                            name='flight_time'
                            value={saveParams.flight_time}
                            // onChange={handleSaveParams}
                          />
                        </Form.Group>

                        <Form.TextArea
                          disabled={disableForm}
                          label='Note'
                          placeholder='Note'
                        />
                        <Form.Checkbox
                          disabled={disableForm}
                          label='I agree to the Terms and Conditions'
                        />
                        <Form.Button
                          disabled={disableForm}
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
                <TableFlights data={data} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default FlightsForm;
