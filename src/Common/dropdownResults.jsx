/** @format */

import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "semantic-ui-react";
import styles from "./styles/filter.module.scss";

const DropdownResults = (visible) => {
  const result = useSelector((state) => state.search.results);

  return visible ? (
    <Grid>
      <Grid.Row>
        <Grid.Column width={16}>
          <div className={styles.scrolabelContainer}>
            {result?.map((item, key) => (
              <li key={key} className={styles.item}>
                {item.title}
              </li>
            ))}
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  ) : (<></>);
};

export default DropdownResults;
