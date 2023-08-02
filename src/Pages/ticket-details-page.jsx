/** @format */

import React, { useState } from "react";
import {
  Accordion,
  Container,
  Grid,
  Icon,
  Image,
  Menu,
} from "semantic-ui-react";
import styles from "./styles/ticket-details-page.module.scss";
import ResCard from "../Common/result_card";
// import blueSvg from "../static/backg.svg"

const TicketDetailsPage = () => {
  const [state, setState] = useState({ activeIndex: 0 });
  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = state;
    const newIndex = activeIndex === index ? -1 : index;

    setState({ activeIndex: newIndex });
  };

  const o = {
    flight_logo: "https://www.skyscanner.net/images/airlines/small/OS.png",
    outbound: {
      from: "7:30",
      to: "8:30",
      total_time: "1:00",
    },
    return: {
      from: "9:20",
      to: "10:20",
      total_time: "1:00",
    },
    name_from: "US",
    name_to: "AMS",
    price: 6000,
    deals: 6,
  };
  return (
    <Grid className={styles.wrapper}>
      <Grid.Row centered>
        <Grid.Column width={16}>
          <Grid>
            <Grid.Row centered style={{ backgroundColor: "#05203c" }}>
              <Grid.Column width={1}>
                <span style={{ fontSize: "30px", color: "white" }}>AUSTIN</span>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row centered>
              <Grid.Column width={1}>
                {/* <Image  src = {blueSvg} size="small"/> */}
                <svg
                  viewBox='0 0 14832 55'
                  class='bpk-flare-bar_bpk-flare-bar__curve__OTY3O DetailsPanelHeader_flareCurve__NmQ2N'>
                  <path d='M7501.307 8.517l-68.043 39.341c-10.632 6.185-23.795 6.185-34.528 0l-68.144-39.34c-8.91-5.173-18.988-8.215-29.316-8.518H0v55h14832V0H7530.671a63.604 63.604 0 00-29.364 8.517z'></path>
                </svg>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row centered>
              <Grid.Column width={14} style={{ border: "2px solid blue" }}>
                <Grid>
                  <Grid.Row centered>
                    <Grid.Column
                      width={8}
                      floated='left'
                      style={{ border: "2px solid green" }}>
                      <Grid>
                        <Grid.Row>
                          <Grid.Column width={16}>
                            <p>Outbound Tue, 25 Jul 2023</p>
                            {/* <Container > */}
                            <Grid>
                              <Grid.Row>
                                <Grid.Column
                                  width={14}
                                  style={{ border: "2px solid red" }}>
                                  <Grid>
                                    <Grid.Row>
                                      <Grid.Column>Name Company</Grid.Column>
                                      <Grid.Column>
                                        <ResCard item = {o}/>
                                      </Grid.Column>
                                    </Grid.Row>
                                  </Grid>
                                </Grid.Column>
                              </Grid.Row>
                            </Grid>
                            {/* </Container> */}
                            {/* <Container>
                            <span className={styles.fromName}>
                              From {<Icon name='arrow right' />}{" "}
                            </span>
                            <span className={styles.cityName}>Austin</span>
                            <span className={styles.time}>12:00pm</span>
                            </Container> */}
                          </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                          <Grid.Column
                            width={16}
                            style={{ border: "2px solid red" }}>
                            <span className={styles.fromName}>
                              To {<Icon name='arrow right' />}
                            </span>
                            <span className={styles.cityName}>Austin</span>
                            <span className={styles.time}>12:00pm</span>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Grid.Column>

                    <Grid.Column
                      width={6}
                      style={{ border: "2px solid black" }}>
                      <Grid>
                        <Grid.Row>
                          <Grid.Column width={16}>
                            <div style={{ backgroundColor: "blue" }}>
                              Inform about city
                            </div>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default TicketDetailsPage;
