import React from 'react';
import { Icon } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';

import { Grid } from 'semantic-ui-react';
import styles from './flight-search-page.module.scss'
const FlightSearch = () => {
  const obj = {
    from: 'London (Any)',
    to: 'Amsterdam (AMS)',
    countTrev: 2,
    type: 'Economy'
  }
  
  return (
    <Grid className={styles.wrapper}>

      <Grid.Row className={styles.header}>
        <Grid.Column width={8} >
          <div className={styles.headerleft}>
          <Button className={styles.searchbtn}><Icon name ='search'/></Button>
          <div className={styles.searchparams}>
            <span>{obj.from} - {obj.to}</span>
            <span >{obj.countTrev} travelers | {obj.type}</span>
          </div>
          </div>
        </Grid.Column>

        <Grid.Column width={8} className= {styles.datePicker}>
          <Button >asdasd</Button>
          <Button >asdasd</Button>
          <Button >asdasd</Button>
        </Grid.Column>
      </Grid.Row>

    </Grid>
  );
};

export default FlightSearch;