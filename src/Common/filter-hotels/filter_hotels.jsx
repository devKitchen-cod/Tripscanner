/** @format */

import React, { useState } from "react";
import { Range } from "react-range";
import { Accordion } from "semantic-ui-react";
import { Icon } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import { Dropdown } from "semantic-ui-react";
import { Form } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";

import styles from "./filter_hotels.module.scss";
const FilterHotels = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = activeIndex;
    const newIndex = activeIndex === index ? -1 : index;
    setActiveIndex(newIndex);
  };
  const radioBtn = [
    {
      type: "radio",
      id: "free_cancellation",
      name: "cancel",
      for: "free_cancellation",
      content: "Free cancellation",
    },
    {
      type: "radio",
      id: "4_stars",
      name: "4stars",
      for: "4_stars",
      content: "4 stars",
    },
    {
      type: "radio",
      id: "3_stars",
      name: "3stars",
      for: "3_stars",
      content: "3 stars",
    },
  ];

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={16} className={styles.filterHotels}>
          <Accordion fluid>
            <Accordion.Title
              active={activeIndex === 0}
              index={0}
              onClick={handleClick}>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={16} className={styles.title}>
                    <Form>
                      <Form.Group>
                        <Form.Input>asdasd</Form.Input>
                      </Form.Group>
                    </Form>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 1}>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={16}>
                    <Grid>
                      <Grid.Row className={styles.radioBtnGroup}>
                        {radioBtn.map((item) => (
                          <div className={styles.filterGroup}>
                            <input
                              type={item.type}
                              id={item.id}
                              name={item.name}
                            />
                            <label className={styles.radioLabel} for={item.for}>
                              {item.content}
                            </label>
                          </div>
                        ))}
                      </Grid.Row>

                      <Grid.Row className={styles.inputGroup}>
                        <Grid.Column width={16}>
                          <Form>
                            <Form.Group>
                              <Form.Input
                                className={styles.form1}
                                label="From"
                                fluid
                                placeholder="From"
                              />
                              <button className={styles.changeBtn} />
                              <Form.Input
                                className={styles.form2}
                                label="To"
                                fluid
                                placeholder="To"
                              />
                            </Form.Group>
                          </Form>
                        </Grid.Column>
                      </Grid.Row>

                      <Grid.Row>
                        <Grid.Column width={8} className={styles.labelGroup1}>
                          <label className={styles.label1}>
                            <input type={"checkbox"} />
                            <span>Add nearby airports</span>
                          </label>

                          <Grid className={styles.lowformgroup}>
                            <Grid.Row>
                              <Grid.Column>
                                <Form.Input
                                  className={styles.form3}
                                  label="Depart"
                                  fluid
                                />
                                <div>
                                  <label className={styles.label2}>
                                    <input type={"checkbox"} />
                                    <span>1Add nearby airports</span>
                                  </label>
                                </div>
                              </Grid.Column>

                              <Grid.Column>
                                <Form.Input
                                  className={styles.form4}
                                  label="Return"
                                  fluid
                                />
                              </Grid.Column>
                            </Grid.Row>
                          </Grid>
                        </Grid.Column>
                        <Grid.Column width={8} className={styles.labelGroup2}>
                          <label className={styles.label2}>
                            <input type={"checkbox"} />
                            <span>1Add nearby airports</span>
                          </label>
                          <div className={styles.dropdownGroup}>
                            <label>Cabin class & Travelers</label>
                            <Dropdown className={styles.form5} selection />
                          </div>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Accordion.Content>
          </Accordion>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={16} className={styles.test13}>
          <input
            type={"range"}
            min={1}
            max={100}
            step={1}
            className={styles.myslider}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default FilterHotels;
