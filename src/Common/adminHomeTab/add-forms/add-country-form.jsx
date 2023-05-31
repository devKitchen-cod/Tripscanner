/** @format */

import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { Button, Dropdown, Form, Grid, Icon, Table } from "semantic-ui-react";
import { testResSerch } from "../../../mock/mockdata";
import { reqGetCity, reqGetCountries } from "../../../redux/actions";
import ResCard from "../../result_card";
import styles from "./add-country-form.module.scss";
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

const CountryForm = (disable) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(reqGetCity());
  });
  return (
    <div>
      {disable ? (
        <div className={styles.formCountry}>
          <Grid>
            <Grid.Row centered>
              <Grid.Column width={8}>
                <Form widths={"equal"}>
                  <Form.Group inline className={styles.form}>
                    <Form.Input
                      className={styles.finput}
                      fluid
                      id="form-subcomponent-shorthand-input-last-name"
                      label="Name country"
                      placeholder="Name country"
                    />
                    <Form.Input
                      fluid
                      id="form-subcomponent-shorthand-input-first-name"
                      label="Country Code"
                      placeholder="Code"
                    />
                    <Form.Button className={styles.fbutton}>
                      {" "}
                      Submit{" "}
                    </Form.Button>
                  </Form.Group>
                </Form>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              {/* <Grid.Column>
                {testResSerch.map((item) => (
                  <ResCard item={item} />
                ))}
              </Grid.Column> */}
              <Grid.Column>
                <Table celled>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Name City</Table.HeaderCell>
                      <Table.HeaderCell>City Code</Table.HeaderCell>
                      <Table.HeaderCell>Country</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>

                  <Table.Body>
                    {data.map((item) => (
                      <Table.Row>
                        <Table.Cell>{item.name}</Table.Cell>
                        <Table.Cell>{item.city_code}</Table.Cell>
                        <Table.Cell>{item.country_code}</Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table>
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

export default CountryForm;
