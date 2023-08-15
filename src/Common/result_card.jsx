/** @format */

import React, { useEffect, useRef, useState } from "react";
import styles from "./styles/result_card.module.scss";
import { Button, Grid, Icon } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import FlightDurance from "./flight-durance";

import { animated, useSpring } from "@react-spring/web";

const ResCard = (flight_card_data) => {
  const obj = flight_card_data.item;

  const [clicked, isClicked] = useState(true);
  const [show, isShow] = useState(true);

  console.log("obj123", obj);
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Click");
  };

  const cardRef = useRef(null);
  const config = {
    mass: 3,
    tension: 170,
    friction: 36,
    clamp: false,
    precision: 0.01,
    velocity: 0,
  };

  const [{ xys }, api] = useSpring(
    () => ({ xys: [0, 0, 1], config }),
    [config]
  );
  const handleMouseLeave = () =>
    api.start({
      xys: [0, 0, 1],
    });

  const handleOnClick = () => {
    isClicked(clicked);
    api.start({
      xys: [180, 0, 1],
    });
    // api.stop({});
  };

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    api.start({
      xys: calc(e.clientX, e.clientY, rect),
    });
  };
  const calc = (x, y, rect) => [
    -(y - rect.top - rect.height / 20) / 100,
    (x - rect.left - rect.width / 20) / 100,
    1.1,
  ];

  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  return (
    <div className={styles.cardMain} ref={cardRef} onClick={handleOnClick}>
      <animated.div
        className={styles.card}
        style={{
          transform: xys.to(trans),
          // backfaceVisibility: 'hidden'
        }}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}>
       
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
                    <FlightDurance obj={flight_card_data.item} />
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
                    <FlightDurance obj ={flight_card_data.item} />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>

            <Grid.Column className={styles.priceFlight} width={6}>
              <div className={styles.price}>
                <span className={styles.countPrice}>
                  {obj.deals} deals from
                </span>
                <span className={styles.coastPrice}>{obj.price}</span>
              </div>
              <div className={styles.btn_wrapper}>
                <button
                  className={styles.buyFlight}
                  onClick={() => navigate("/ticket-details")}>
                  <span>Select</span>
                  <Icon
                    name='arrow right'
                    color='white'
                    className={styles.arr}
                  />
                </button>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        {/* ) : (
          <Grid>
            <Grid.Row className={styles.row1}>
              <Grid.Column className={styles.timeFlight} width={10}>
                HELLO
              </Grid.Column>
            </Grid.Row>
          </Grid>
        )} */}
      </animated.div>
    </div>
  );
};

export default ResCard;

{
  /* <Button
              className={styles.findBtn1}
              onClick={() => navigate("/flight-search")}
              icon
              labelPosition='right'>
              Search
              <Icon name='right arrow' className={styles.btnIcon} />
            </Button> */
}
