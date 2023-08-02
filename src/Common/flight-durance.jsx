/** @format */

import React from "react";
import styles from "./styles/flight-durance.module.scss";
import flightSvg from "../static/flight.svg";
import { Grid } from "semantic-ui-react";
const FlightDurance = (obj1) => {
  const obj = obj1.obj;
  // console.log('obj123', obj.obj)
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={16} className={styles.row1}>
          <Grid>
            <Grid.Row className={styles.row2}>
              <Grid.Column className={styles.outbound} width={4}>
                <div>
                  <span className={styles.flightTo}>{obj.outbound.from}</span>
                  <span className={styles.countryName}>{obj.name_from}</span>
                </div>
              </Grid.Column>
              <Grid.Column className={styles.animate} width={8}>
                <div className={styles.f}>
                  <div className={styles.flightsvg}>
                    <img src={flightSvg} />
                  </div>

                  <span className={styles.time_flight}>
                    {obj.outbound.total_time}
                  </span>
                  <div className={styles.divider} />
                  {/* </div> */}
                </div>
              </Grid.Column>
              <Grid.Column className={styles.arrive} width= {4}>
                <div>
                  <span className={styles.flightFrom}>{obj.outbound.to}</span>
                  <span className={styles.countryName}>{obj.name_to}</span>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default FlightDurance;
