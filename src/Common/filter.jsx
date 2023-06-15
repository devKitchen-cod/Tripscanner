/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Select } from "semantic-ui-react";
import { Button, Grid, Icon, Dropdown } from "semantic-ui-react";
import styles from "./styles/filter.module.scss";
import { useSelector } from "react-redux";
const Filter = () => {
  const navigate = useNavigate();
  const city = useSelector((state) => state.city.res);
  const [citys, setCitys] = useState([]);
  useEffect(() => {
    // console.log("[city]", city);
    setCitys(
      city.map((item) => {
        // setCitys(...item, item.name)
        // console.log(item.name);
        return {
          key: item.name,
          text: item.name,
          value: item.name,
        };
      })
    );
  }, [city]);

  // console.log("citys", citys);

  const radioBtn = [
    {
      type: "radio",
      id: "both-way",
      name: "way",
      for: "both-way",
      content: "Roundtrip",
    },
    {
      type: "radio",
      id: "one-way",
      name: "way",
      for: "one-way",
      content: "One way",
    },
    {
      type: "radio",
      id: "complex-route",
      name: "way",
      for: "complex-route",
      content: "Multi-city",
    },
  ];

  return (
    <Grid>
      <Grid.Row centered>
        <Grid.Column width={16} className={styles.filter}>
          <Grid className={styles.innerfilter}>
            <Grid.Row centered>
              <Grid.Column width={8} className={styles.radioBtnGroup}>
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

            <Grid.Row centered className={styles.inputGroup}>
              <Grid.Column width={14} className={styles.inputGroupColumn}>
                <Form>
                  <Form.Group
                  // widths={"equal"}
                  >
                    <Form.Input
                      // control={Select}
                      // options={citys}
                      className={styles.form1}
                      label='From'
                      fluid
                      placeholder='Country, city or airport'
                    />
                    <Form.Input
                      // control={Select}
                      // options={citys}
                      className={styles.form2}
                      label='To'
                      fluid
                      placeholder='Country, city or airport'
                    />
                    {/* <Form.Input className={styles.form3} label="Depart" fluid />
                    <Form.Input className={styles.form4} label="Return" fluid /> */}
                    {/* <div>
                      <label>
                        Cabin Class &
                        Travelers
                      </label>
                      <Dropdown
                        className={
                          styles.dropdown
                        }
                        placeholder='Type, number places'
                        selection
                        label='asd'
                      />
                    </div> */}

                    <Form.Select
                      className={styles.dropdown}
                      fluid
                      label=' Cabin Class &
                      Travelers'
                      // options={options}
                      placeholder='Type'
                    />
                    {/* <Button
                      className={
                        styles.findBtn1
                      }
                      onClick={() =>
                        navigate(
                          "/flight-search"
                        )
                      }>
                      Search flights
                      <Icon
                        name='arrow right'
                        color='white'
                      />
                      
                    </Button> */}
                    <Button
                      className={styles.findBtn1}
                      onClick={() => navigate("/flight-search")}
                      icon
                      labelPosition='right'>
                      Search
                      <Icon name='right arrow' className={styles.btnIcon} />
                    </Button>
                  </Form.Group>
                </Form>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row centered>
              {/* <Grid.Column width={9} className={styles.labelGroup}>
                <label className={styles.label1}>
                  <input type={"checkbox"} />
                  <span>Add nearby airports</span>
                </label>

                <label className={styles.label2}>
                  <input type={"checkbox"} />
                  <span>Add nearby airports</span>
                </label>

                <label className={styles.label3}>
                  <input type={"checkbox"} />
                  <span>Non-stop flights only</span>
                </label>
              </Grid.Column> */}

              <Grid.Column>
                {/* <Button
                  className={styles.findBtn1}
                  onClick={() => navigate("/flight-search")}>
                  Search flights
                  <Icon name="arrow right" color="white" />
                </Button> */}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Filter;
