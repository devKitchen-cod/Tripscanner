import React from "react";
import styles from "./styles/result_card.module.scss";
import { Grid, Icon } from "semantic-ui-react";
import flightSvg from "../static/flight.svg";

const ResCard = () => {
	return (
		<Grid>
			<Grid.Row centered className={styles.row1}>
				<Grid.Column className={styles.timeFlight} width={10}>
					<Grid>
						<Grid.Row className={styles.row2}>
							<Grid.Column className={styles.logoflight} width={4}>
								<img
									className={styles.logoFlight}
									alt="Austrian Airlines"
									src="//www.skyscanner.net/images/airlines/small/OS.png"
								></img>
							</Grid.Column>

							<Grid.Column className={styles.timeTo} width={12}>
								<span className={styles.flightTo}>12:21</span>

								<div className={styles.f}>
									<div className={styles.divider}>
										<span className={styles.time_flight}>11:55</span>
									</div>
									<div className={styles.flightsvg}>
										<img src={flightSvg} />
									</div>
								</div>

								<span className={styles.flightFrom}>14:23</span>
							</Grid.Column>
						</Grid.Row>

						<Grid.Row className={styles.row3}>
							<Grid.Column className={styles.logoflight} width={4}>
								<img
									className={styles.logoFlight}
									alt="Austrian Airlines"
									src="//www.skyscanner.net/images/airlines/small/OS.png"
								></img>
							</Grid.Column>

							<Grid.Column className={styles.timeFrom} width={12}>
								<span className={styles.flightTo}>12:21</span>

								<div className={styles.f}>
									<div className={styles.divider}>
										<span className={styles.time_flight}>11:55</span>
									</div>
									<div className={styles.flightsvg1}>
										<img src={flightSvg} />
									</div>
								</div>

								<span className={styles.flightFrom}>14:23</span>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Grid.Column>

				<Grid.Column className={styles.priceFlight} width={6}>
					<div className={styles.price}>
						<span className={styles.countPrice}>4 deals from</span>
						<span className={styles.coastPrice}>7.500</span>
					</div>
					<button className={styles.buyFlight}>
						<span>Select</span>
						<Icon name="arrow right" color="green" />
					</button>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
};

export default ResCard;
