/** @format */

import React from "react";
import { Grid } from "semantic-ui-react";
import styles from "./detail_card.module.scss";
import FlightDurance from "../flight-durance/flight-durance";
import CustomizedFlight from "../customized_flight";
const DetailCard = (obj1) => {
  const obj = obj1.obj;
  return (
    <div>
      <Grid>
        <Grid.Row className={styles.row1}>
          <Grid.Column width={10} className={styles.card}>
            <FlightDurance obj={obj} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row >
          <Grid.Column width={10}>
            <CustomizedFlight />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default DetailCard;
