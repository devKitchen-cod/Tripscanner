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
  reqGetCity,
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

  const flights = useSelector((state) => state.flights.res);
  const airport = useSelector((state) => state.airports.finded_airports);
  const city = useSelector((state) => state.city.res);

  const [originAirport, setOriginAirport] = useState([]);
  const [distinationAirport, setDistinationAirport] = useState([]);

  const [saveParams, setParams] = useState({
    name: "",
    origin_airport: "",
    distination_airport: "",
    origin_city: "",
    distination_city: "",
    price: "",
    origin_time: "",
    distination_time: "",
    flight_time: "",
  });

  const [disableForm, setDisableForm] = useState(true);

  let origin_airport = airport.origin_airports;
  let distination_airport = airport.distination_airports;

  useEffect(() => {
    console.log("airport", airport);
    setOriginAirport(
      origin_airport?.map((item, key) => {
        return {
          key: key,
          text: item.name,
          value: item.name,
        };
      })
    );

    setDistinationAirport(
      distination_airport?.map((item, key) => {
        return {
          key: key,
          text: item.name,
          value: item.name,
        };
      })
    );
  }, [airport]);

  useEffect(() => {
    if (origin_airport?.length && distination_airport?.length) {
      setDisableForm(!disableForm);
      console.log(origin_airport, distination_airport);
    }
  }, [origin_airport, distination_airport]);

  useEffect(() => {
    console.log("flights", flights);
  }, [flights]);

  const handleSaveParams = (e, { name, value }) => {
    setParams({ ...saveParams, [name]: value });
  };

  const handleSub = () => {
    console.log("saveParams", saveParams);
    dispatch(reqAddFlights(saveParams));
    dispatch(reqGetFlights());
  };

  const handleSerachAirports = () => {
    console.log(saveParams.origin_city, saveParams.distination_city);
    let obj = {
      origin_city: saveParams.origin_city,
      distination_city: saveParams.distination_city,
    };
    dispatch(reqFindAirports(obj));
  };

  return (
    <div>
      {disable ? (
        <div>
          <Grid>
            <Grid.Row>
              <Grid.Column width={16}>
                <Grid>
                  <Grid.Row columns={16}>
                    <Grid.Column textAlign='center' width={5}>
                      <Form>
                        <Form.Group inline>
                          <Icon size='large' name='caret square up' />
                          <Form.Select
                            options={city}
                            search
                            name='origin_city'
                            value={saveParams.origin_city}
                            label='Origin City'
                            placeholder='Origin City'
                            onChange={handleSaveParams}
                          />
                        </Form.Group>
                      </Form>
                    </Grid.Column>
                    <Grid.Column width={8}>
                      <Form>
                        <Form.Group inline>
                          <Icon size='large' name='caret square down' />
                          <Form.Select
                            options={city}
                            search
                            name='distination_city'
                            value={saveParams.distination_city}
                            label='Distination City'
                            placeholder='Distination City'
                            onChange={handleSaveParams}
                          />
                          <Form.Button onClick={() => handleSerachAirports()}>
                            Serch
                          </Form.Button>
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
                            onChange={handleSaveParams}
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
                            onChange={handleSaveParams}
                          />
                          <Form.Input
                            disabled={disableForm}
                            fluid
                            label='Price'
                            placeholder='Price'
                            name='price'
                            value={saveParams.price}
                            onChange={handleSaveParams}
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
                            onChange={handleSaveParams}
                          />
                          <Form.Input
                            disabled={disableForm}
                            fluid
                            label='Distination time'
                            placeholder='Distination time'
                            name='distination_time'
                            value={saveParams.distination_time}
                            onChange={handleSaveParams}
                          />
                          <Form.Input
                            disabled={disableForm}
                            fluid
                            label=' Flight time'
                            placeholder='Code'
                            name='flight_time'
                            value={saveParams.flight_time}
                            onChange={handleSaveParams}
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
