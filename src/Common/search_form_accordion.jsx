/** @format */

import React from "react";
import styles from "./styles/search_form_accordion.module.scss";
import { useState } from "react";
import { Button, Dropdown, Form, Grid, Icon } from "semantic-ui-react";
import { radioBtn } from "../mock/mockdata";
import { Navigate } from "react-router-dom";
const SearchForm = () => {
  const [isopen, setIsiopen] = useState(false);
  const obj = {
    from: "London (Any)",
    to: "Amsterdam (AMS)",
    countTrev: 2,
    type: "Economy",
  };
  return (
    <Grid>
      <Grid.Row className={styles.header} onClick={() => setIsiopen(!isopen)}>
        <Grid.Column width={16}>
          <div className={styles.headerleft}>
            <Button className={styles.searchbtn}>
              <Icon name="search" />
            </Button>
            <div className={styles.searchparams}>
              <span>
                {obj.from} - {obj.to}
              </span>
              <span>
                {obj.countTrev} travelers | {obj.type}
              </span>
            </div>
          </div>
        </Grid.Column>
        <Grid.Column width={8} className={styles.datePicker}></Grid.Column>
      </Grid.Row>
      {isopen ? (
        <Grid.Row>
          <Grid.Column className={styles.header1} width={16}>
            <Grid>
              <Grid.Row className={styles.radioBtnGroup}>
                <Grid.Column width={16}>
                  {radioBtn.map((item) => (
                    <div className={styles.filterGroup}>
                      <input type={item.type} id={item.id} name={item.name} />
                      <label className={styles.radioLabel} for={item.for}>
                        {item.content}
                      </label>
                    </div>
                  ))}
                </Grid.Column>
              </Grid.Row>

              <Grid.Row className={styles.inputGroup1}>
                <Grid.Column width={16}>
                  <Form className={styles.formCont}>
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

              <Grid.Row className={styles.inputGroup2}>
                <Grid.Column width={8} className={styles.labelGroup1}>
                  <label className={styles.label1}>
                    <input type={"checkbox"} />
                    <span>Add nearby airports</span>
                  </label>

                  <Grid className={styles.lowformgroup}>
                    <Grid.Row>
                      <Grid.Column width={7}>
                        <Form.Input
                          className={styles.form3}
                          label="Depart"
                          placeholder="23\06\2022"
                          fluid
                        />
                        <div className={styles.label3}>
                          <label>
                            <input type={"checkbox"} />
                            <span>Direct flights only</span>
                          </label>
                        </div>
                      </Grid.Column>

                      <Grid.Column width={6}>
                        <Form.Input
                          className={styles.form4}
                          label="Return"
                          placeholder="23\06\2022"
                          fluid
                        />
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Grid.Column>

                <Grid.Column width={8} className={styles.labelGroup2}>
                  <label className={styles.label2}>
                    <input type={"checkbox"} />
                    <span> Add nearby airports</span>
                  </label>
                  <div className={styles.dropdownGroup}>
                    <label>Cabin class & Travelers</label>
                    <Dropdown className={styles.form5} selection />
                  </div>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column width={16}>
                  <Button
                    className={styles.findBtn}
                    onClick={() => Navigate("/flight-search")}
                  >
                    Search flights
                    <Icon name="arrow right" color="white" />
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      ) : (
        <></>
      )}
    </Grid>
  );
};

export default SearchForm;
