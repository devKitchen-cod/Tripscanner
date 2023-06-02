/** @format */

import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {
  Button,
  Dropdown,
  Form,
  Grid,
  Icon,
  Input,
  Select,
  Table,
} from "semantic-ui-react";

import styles from "./add-country-form.module.scss";
import TableFlights from "../tables/table-flight";
import Calendar from "react-calendar";
import { reqFindAirports, reqGetCity } from "../../../redux/actions";

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

  const [cityName, setCity] = useState([]);
  const [saveParams, setParams] = useState({
    origin: "",
    distination: "",
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
    dispatch(reqGetCity());
  }, []);
  useEffect(() => {
    setCity(
      city.map((item, key) => {
        return {
          key: key,
          text: item.name,
          value: item.name,
        };
      })
    );
  }, [city]);

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
    }
  }, [origin_airport, distination_airport]);

  const handleSaveParams = (e, { name, value }) => {
    setParams({ ...saveParams, [name]: value });
  };
  const handleSub = () => {
    console.log("saveParams", saveParams);
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
        <div className={styles.formCountry}>
          <Grid>
            <Grid.Row centered>
              <Grid.Column width={16}>
                <Grid className={styles.city_group}>
                  <Grid.Row columns={16} className={styles.row}>
                    <Grid.Column width={7}>
                      <Icon name='paper plane' />
                      <Input
                        size='small'
                        control={Select}
                        options={cityName}
                        search
                        name='origin_city'
                        value={saveParams.origin_city}
                        label='Origin City'
                        placeholder='Origin City'
                        onChange={handleSaveParams}
                      />
                    </Grid.Column>
                    <Grid.Column width={1}>
                      {" "}
                      <Icon name='arrow right' />
                    </Grid.Column>
                    <Grid.Column width={6}>
                      <Input
                        size='small'
                        control={Select}
                        options={cityName}
                        search
                        name='distination_city'
                        value={saveParams.distination_city}
                        label='Distination City'
                        placeholder='Distination City'
                        onChange={handleSaveParams}
                      />
                    </Grid.Column>

                    <Grid.Column width={2}>
                      {/* <Button onClick={() => handleSerachAirports()}>
                        Serch
                      </Button> */}
                    </Grid.Column>
                  </Grid.Row>
                </Grid>

                <Form widths='equal'>
                  <Form.Group widths={10} inline className={styles.form}>
                    <Icon
                      className={styles.icon}
                      size='large'
                      name='arrows alternate'
                    />
                    <Form.Field
                      disabled={disableForm}
                      control={Select}
                      options={originAirport}
                      search
                      name='origin'
                      value={saveParams.origin}
                      label='Origin'
                      placeholder='Origin'
                      onChange={handleSaveParams}
                    />

                    <Icon
                      className={styles.icon}
                      size='large'
                      name='arrow right'
                    />
                    <Form.Field
                      disabled={disableForm}
                      control={Select}
                      options={distinationAirport}
                      search
                      name='distination'
                      value={saveParams.distination}
                      label='Distination'
                      placeholder='Distination'
                      onChange={handleSaveParams}
                    />

                    <Icon
                      className={styles.icon}
                      size='large'
                      name='dollar sign'
                    />

                    <Form.Input
                      disabled={disableForm}
                      fluid
                      id='form-subcomponent-shorthand-input-first-name'
                      label='Price'
                      placeholder='Price'
                      name='price'
                      value={saveParams.price}
                      onChange={handleSaveParams}
                    />
                  </Form.Group>
                  <Form.Group inline className={styles.form}>
                    <Icon
                      className={styles.icon}
                      name='calendar alternate'
                      size='large'
                    />

                    <Form.Input
                      disabled={disableForm}
                      fluid
                      id='form-subcomponent-shorthand-input-first-name'
                      label=' Origin time'
                      placeholder='Code'
                      name='origin_time'
                      value={saveParams.origin_time}
                      onChange={handleSaveParams}
                    />
                    {/* <Calendar onChange={onChange} value={date}/> */}
                    <Icon
                      className={styles.icon}
                      size='large'
                      name='arrow right'
                    />

                    <Form.Input
                      disabled={disableForm}
                      fluid
                      id='form-subcomponent-shorthand-input-first-name'
                      label='Distination time'
                      placeholder='Code'
                      name='distination_time'
                      value={saveParams.distination_time}
                      onChange={handleSaveParams}
                    />
                    <Icon className={styles.icon} size='large' name='clock' />
                    <Form.Input
                      disabled={disableForm}
                      fluid
                      id='form-subcomponent-shorthand-input-first-name'
                      label=' Flight time'
                      placeholder='Code'
                      name='flight_time'
                      value={saveParams.flight_time}
                      onChange={handleSaveParams}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Button
                      disabled={disableForm}
                      onClick={() => handleSub()}
                      className={styles.fbutton}>
                      Submit
                    </Form.Button>
                  </Form.Group>
                </Form>
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
