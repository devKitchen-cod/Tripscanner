import React from 'react';
import { Grid } from 'semantic-ui-react';
import styles from './styles/filter_hotels.module.scss'
const FilterHotels = () => {
  const radioBtn = [
    {
      type: "radio",
      id: "free_cancellation",
      name: "cancel",
      for: "free_cancellation",
      content: "Free cancellation"
    },
    {
      type: "radio",
      id: "4_stars",
      name: "4stars",
      for: "4_stars",
      content: "4 stars"
    },
    {
      type: "radio",
      id: "3_stars",
      name: "3stars",
      for: "3_stars",
      content: "3 stars"
    },
  ]

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column className={styles.filterHotels}>
          
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default FilterHotels;