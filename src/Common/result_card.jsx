import React from "react";
import styles from "./styles/result_card.module.scss";
import { Grid } from "semantic-ui-react";
import flightSvg from "../static/flight.svg";

const ResCard = () => {
	return (
		<Grid>
			<Grid.Row centered className={styles.row1}>
				<Grid.Column className={styles.timeFlight} width={10}>
					<Grid>
						<Grid.Row className={styles.row2}>
							<Grid.Column className={styles.logoflight} width={6}>
								<img
									className={styles.logoFlight}
									alt="Austrian Airlines"
									src="//www.skyscanner.net/images/airlines/small/OS.png"
								></img>
							</Grid.Column>

							<Grid.Column className={styles.timeTo} width={10}>
								<span className={styles.flightTo}>12:21</span>
                <div className={styles.divider} /> 
								<img className={styles.flightsvg} src={flightSvg} />
								<span className={styles.flightFrom}>14:23</span>
							</Grid.Column>
						</Grid.Row>

						<Grid.Row className={styles.row3}>
							<Grid.Column className={styles.logoflight} width={6}>
								<img
									className={styles.logoFlight}
									alt="Austrian Airlines"
									src="//www.skyscanner.net/images/airlines/small/OS.png"
								></img>
							</Grid.Column>
							<Grid.Column className={styles.timeFrom} width={10}>
								<span className={styles.flightTo}>12:21</span>
								<img className={styles.flightsvg1} src={flightSvg}/>
								<span className={styles.flightFrom}>14:23</span>
							</Grid.Column>
						</Grid.Row>
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
