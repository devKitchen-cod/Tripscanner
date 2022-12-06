import React from 'react';
import styles from './styles/result_card.module.scss'
import { Grid } from 'semantic-ui-react';

const ResCard = () => {
  return (
    <Grid>
      <Grid.Row className={styles.row1}>
        <Grid.Column width={16}>
          
          <Grid>
            <Grid.Row>

            </Grid.Row>
          </Grid>
          
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default ResCard;