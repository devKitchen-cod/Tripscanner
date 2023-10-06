/** @format */

import React, { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Label, Search, Select } from "semantic-ui-react";
import { Button, Grid, Icon, Dropdown } from "semantic-ui-react";
import styles from "./styles/filter.module.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { reqGetFindedCities } from "../redux/search_actions";
import DropdownResults from "./dropdownResults";

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

const Filter = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const axiosInstance = useSelector((state) => state.axios_instance.instance);
  const result = useSelector((state) => state.search.results);
  const [state, setState] = useState([]);

  const handleSet = (e, data) => {
    dispatch(reqGetFindedCities(axiosInstance, data.value));
  };
  useEffect(() => {
    setState(result);
  }, [result]);
  console.log(result);

  return (
    <Grid style={{ background: "#111236" }}>
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

      <Grid.Row className={styles.block}>
        <Grid.Column width={4} className={styles.filter}>
          <p className={styles.label}>From</p>
          <Input
            onChange={handleSet}
            fluid
            placeholder='Country, city or airport'
          />
          <DropdownResults />
        </Grid.Column>
        <Grid.Column width={4} className={styles.filter}>
          <p className={styles.label}>To</p>

          <Input
            onChange={handleSet}
            fluid
            placeholder='Country, city or airport'
          />
        </Grid.Column>

        <Grid.Column width={4} className={styles.filter}>
          <p className={styles.label}>Cabin Class & Travelers</p>

          <Select
            className={styles.dropdown}
            // options={options}
            fluid
            placeholder='Type'
          />
        </Grid.Column>
        <Grid.Column width={4} className={styles.filter}>
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

export default Filter;
