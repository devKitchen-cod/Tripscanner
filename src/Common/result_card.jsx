/** @format */

import React from "react";
import styles from "./styles/result_card.module.scss";
import { Button, Grid, Icon } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import FlightDurance from "./flight-durance";

const ResCard = (flight_card_data) => {
  const obj = flight_card_data.item;
  // console.log('obj123', obj)
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("Click");
  };
  return (
    <Grid>
      <Grid.Row className={styles.row1}>
        <Grid.Column className={styles.timeFlight} width={10}>
          <Grid>
            <Grid.Row className={styles.row2}>
              <Grid.Column className={styles.logoflight} width={4}>
                <img
                  className={styles.logoFlight}
                  alt='Austrian Airlines'
                  src={obj.flight_logo}></img>
              </Grid.Column>

              <Grid.Column className={styles.timeTo} width={11}>
                <FlightDurance obj={obj} />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row className={styles.row3}>
              <Grid.Column className={styles.logoflight} width={4}>
                <img
                  className={styles.logoFlight}
                  alt='Austrian Airlines'
                  src={flight_card_data.item.flight_logo}></img>
              </Grid.Column>

              <Grid.Column className={styles.timeFrom} width={11}>
                <FlightDurance obj={obj} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>

        <Grid.Column className={styles.priceFlight} width={6}>
          <div className={styles.price}>
            <span className={styles.countPrice}>{obj.deals} deals from</span>
            <span className={styles.coastPrice}>{obj.price}</span>
          </div>
          <button
            className={styles.buyFlight}
            onClick={() => navigate("/ticket-details")}>
            <span>Select</span>
            <Icon name='arrow right' color='white' className={styles.arr} />
          </button>
          <Button
            className={styles.findBtn1}
            onClick={() => navigate("/flight-search")}
            icon
            labelPosition='right'>
            Search
            <Icon name='right arrow' className={styles.btnIcon} />
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default ResCard;
