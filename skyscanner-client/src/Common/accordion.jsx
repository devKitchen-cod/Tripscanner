import React from 'react';
import { Grid } from 'semantic-ui-react';
import './styles/accordion.module.scss'
const AccordionS = () => {
  return (
    <Grid>
      <Grid.Row centered  >
        <Grid.Column width={9} style ={{border: '2px solid red'}}>
          Accordion
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default AccordionS;