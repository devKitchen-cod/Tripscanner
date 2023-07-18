/** @format */

import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Form, Grid, Icon, Input, Select, Table } from "semantic-ui-react";

import TableFlights from "../tables/table-flight";
import {
  reqAddFlights,
  reqFindAirports,
  reqFindCity,
} from "../../../redux/postActions";
import { reqGetCountry, reqGetFlights } from "../../../redux/getActions";
import TableAirplane from "../tables/table-airplane";

const FlightsForm = (disable) => {
  const dispatch = useDispatch();

  const country = useSelector((state) => state.country.res);
  const city = useSelector((state) => state.city.city_o_d);
  const airport = useSelector((state) => state.airports.finded_airports);
  const flights = useSelector((state) => state.flights.res);
  const axiosInstance = useSelector((state) => state.axios_instance.instance);

  const [disableForm, setDisableForm] = useState(false);

  const [Params, setParams] = useState({
    price: "",
    origin_time: "",
    distination_time: "",
    flight_time: "",
    note: "",
  });

  const [Country, setCountry] = useState({
    origin_country: {
      id: "",
      name: "",
    },
    distination_country: {
      id: "",
      name: "",
    },
  });
  const [City, setCity] = useState({
    origin_city: {
      id: "",
      name: "",
    },
    distination_city: {
      id: "",
      name: "",
    },
  });
  const [Airport, setAirport] = useState({
    origin_airport: {
      id: "",
      name: "",
    },
    distination_airport: {
      id: "",
      name: "",
    },
  });

  useEffect(() => {
    dispatch(reqGetCountry(axiosInstance));
  }, [axiosInstance]);

  useEffect(() => {
    if (Country.origin_country.id && Country.distination_country.id) {
      let obj = {
        origin: Country.origin_country.id,
        distination: Country.distination_country.id,
      };
      dispatch(reqFindCity(axiosInstance, obj));
    }
  }, [Country]);

  useEffect(() => {
    if (City.origin_city.id && City.distination_city.id) {
      let obj = {
        origin: City.origin_city.id,
        distination: City.distination_city.id,
      };
      dispatch(reqFindAirports(axiosInstance, obj));
    }
  }, [City]);

  // useEffect(() => {
  // }, [Params]);

  const handleSetCountry = (e, { name, value, options }) => {
    const finded_name = options.find((o) => o.value === value);
    setCountry({
      ...Country,
      [name]: { id: value, name: finded_name.text },
    });
  };

  const handleSetCity = (e, { name, value, options }) => {
    const finded_name = options.find((item) => item.value === value);
    console.log("options", options);
    console.log(finded_name);

    setCity({
      ...City,
      [name]: { id: value, name: finded_name.text },
    });
  };

  const handleSetAirport = (e, { name, value, options }) => {
    const finded_name = options.find((item) => item.value === value);
    setAirport({
      ...Airport,
      [name]: { id: value, name: finded_name.text },
    });
  };

  const handleSaveParams = (e, { name, value}) => {
    console.log("name val", name, value);
    setParams({
      ...Params,
      [name]: value,
    });
  };

  const handleSub =() => {
    let obj ={
      params: Params,
      country: Country,
      city: City,
      airport: Airport
    }
    dispatch(reqAddFlights(axiosInstance, obj))
    console.log('obj', obj)
    
  }
  return (
    <div>
      {disable ? (
        <div>
          <Grid>
            <Grid.Row>
              <Grid.Column width={16}>
                <Grid>
                  <Grid.Row width={16}>
                    <Grid.Column width={6}>
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
                          <Form.Select
                            options={city.res_origin}
                            search
                            name='origin_city'
                            label='Origin City'
                            placeholder='Origin City'
                            onChange={handleSetCity}
                          />
                          <Form.Select
                            options={city.res_distination}
                            search
                            name='distination_city'
                            label='Distination City'
                            placeholder='Distination City'
                            onChange={handleSetCity}
                          />
                        </Form.Group>
                      </Form>
                    </Grid.Column>
                    <Grid.Column width={10}>
                      <TableAirplane />
                    </Grid.Column>
                  </Grid.Row>

                  <Grid.Row columns={16} centered>
                    <Grid.Column width={16}>
                      <Form>
                        <Form.Group widths='equal'>
                          <Form.Input
                            // disabled={disableForm}
                            fluid
                            control={Select}
                            options={airport.res_origin}
                            search
                            name='origin_airport'
                            // value={saveParams.origin_airport}
                            label='Origin Airport'
                            placeholder='Origin'
                            onChange={handleSetAirport}
                          />
                          <Form.Input
                            // disabled={disableForm}
                            fluid
                            control={Select}
                            options={airport.res_distination}
                            search
                            name='distination_airport'
                            // value={saveParams.distination_airport}
                            label='Distination Airport'
                            placeholder='Distination'
                            onChange={handleSetAirport}
                          />
                          <Form.Input
                            // disabled={disableForm}
                            fluid
                            label='Price'
                            placeholder='Price'
                            name='price'
                            value={Params.price}
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
                            value={Params.origin_time}
                            onChange={handleSaveParams}
                          />
                          <Form.Input
                            disabled={disableForm}
                            fluid
                            label='Distination time'
                            placeholder='Distination time'
                            name='distination_time'
                            value={Params.distination_time}
                            onChange={handleSaveParams}
                          />
                          <Form.Input
                            disabled={disableForm}
                            fluid
                            label='Flight time'
                            placeholder='Code'
                            name='flight_time'
                            value={Params.flight_time}
                            onChange={handleSaveParams}
                          />
                        </Form.Group>

                        <Form.TextArea
                          disabled={disableForm}
                          label='Note'
                          placeholder='Note'
                          name='note'
                          onChange={handleSaveParams}
                        />

                        <Form.Button
                          disabled={disableForm}
                          onClick={() => handleSub()}
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
                <TableFlights />
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
