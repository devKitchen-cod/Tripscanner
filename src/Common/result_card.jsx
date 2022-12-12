import React from 'react';
import styles from './styles/result_card.module.scss'
import { Grid } from 'semantic-ui-react';

const ResCard = () => {
  return (
    <Grid>
      <Grid.Row centered className={styles.row1}>
        <Grid.Column className={styles.timeFlight} width={10}>          
          <Grid>
            <Grid.Row className={styles.row2}>
              <Grid.Column className={styles.logoflight} width={6}>
                
                <img className={styles.logoFlight} alt="Austrian Airlines" src="//www.skyscanner.net/images/airlines/small/OS.png"></img>
              </Grid.Column>

              <Grid.Column width={10}>
                ewq
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>dsa</Grid.Row>
          </Grid>
          
        </Grid.Column>

        <Grid.Column className={styles.priceFlight} width={6}>
          dsa
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default ResCard;