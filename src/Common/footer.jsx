import React from "react";
import { Grid } from "semantic-ui-react";
import { countries, footerData } from "../mock/mockdata";
import styles from "./styles/footer.module.scss";

const Footer = () => {
	return (
		<Grid className={styles.footer}>
			<Grid.Row centered columns={4}>
				{footerData.map((item) => (
          <Grid.Column>
            <div className={styles.headerF}><span>{item.header}</span></div>
            {item.opts.map((item2) => (
              <div className={styles.headerOpts}>{item2}</div>
            ))}            
          </Grid.Column>          
        ))}
			</Grid.Row>
      <Grid.Row columns={4}>
          {countries.map((item) => (
            <Grid.Column>
              <a href={item.url}>{item.text}</a>
            </Grid.Column>
          ))}
      </Grid.Row>
		</Grid>
	);
};

export default Footer;
