import React, { useState } from "react";
import styles from "./styles/filter-flight-search.module.scss";
import { Form, Grid, Icon } from "semantic-ui-react";
import { Accordion } from "semantic-ui-react";
import { Airlines } from "../mock/mockdata";

const FilterSearch = () => {
	const [openStops, setOpenStops] = useState(true);
	const [openDepart, setOpenDepart] = useState(true);
	const [trip, setTrip] = useState(true);
	const [airlines, setAirlines] = useState(true);
	const [greener, setGreener] = useState(true);
	const [duration, setDuration] = useState(500)
	const handleChange = () => {
		setDuration(duration + 100)
	}
	return (
		<Accordion fluid>
			<Accordion.Title
				className={styles.titleStops}
				onClick={() => setOpenStops(!openStops)}
			>
				Stops
				<Icon name="dropdown" />
			</Accordion.Title>

			<Accordion.Content active={openStops}>
				<Grid>
					<Grid.Row centered>
						<Grid.Column width={16}>
							<div className={styles.nonStop}>
								<label className={styles.label1}>
									<input type={"checkbox"} className={styles.customCheckbox}/>
 									<span>Non-stop</span>
									<span className={styles.price}>from 8,163 грн.</span>
 								</label>
							</div>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row className={styles.rowOneStop}>
						<Grid.Column>
							<div className={styles.oneStop}>
								<label className={styles.label1}>
									<input type={"checkbox"} className={styles.customCheckbox}/>
									<span>1 stop</span>
									<span className={styles.price}>from 8,163 грн.</span>
								</label>
							</div>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row className={styles.rowTowStop}>
						<Grid.Column>
							<div className={styles.twoStop}>
								<label className={styles.label1}>
									<input type={"checkbox"} className={styles.customCheckbox}/>
									<span>2+ stops</span>
									<span className={styles.price}>from 8,163 грн.</span>
								</label>
							</div>
						</Grid.Column>
					</Grid.Row>
				</Grid>

		
			</Accordion.Content>

			{/* <Accordion.Title
				className={styles.titleDepartureTimes}
				onClick={() => setOpenDepart(!openDepart)}
			>
				Departure times
				<Icon name="dropdown" />
			</Accordion.Title> */}

			{/* <Accordion.Content active={openDepart}>
				<div>
					<p>Outbound</p>
					<span>5 AM - 14 PM</span>
					<div>
						<input type={"range"} id="min" step={1} />
						<Form.Input
              label={`Duration: ${duration}ms `}
              min={100}
              max={2000}
              name='duration'
              onChange={handleChange}
              step={100}
              type='range'
              value={duration}
            />
					</div>
				</div>

				<div>
					<p>Return</p>
					<span>5 AM - 14 PM</span>
					<div>
						<input type={"range"} id="min" step={1} />
					</div>
				</div>
			</Accordion.Content> */}

			<Accordion.Title
				className={styles.titleTripDuration}
				onClick={() => setTrip(!trip)}
			>
				Trip Duration
				<Icon name="dropdown" />
			</Accordion.Title>
			<Accordion.Content active={trip}>
				<div>
					{/* <p>Jorney duration</p> */}
					<span>5 AM - 14 PM</span>
					<div>
						<input type={"range"} id="min" step={1} />
					</div>
				</div>
			</Accordion.Content>

			<Accordion.Title
				className={styles.titleAirlines}
				onClick={() => setAirlines(!airlines)}
			>
				Airlines
				<Icon name="dropdown" />
			</Accordion.Title>

			<Accordion.Content active={airlines}>
				<div>
					<span>Select all</span>
					<span>Clear all</span>
				</div>
				<div>
					<span>Star Alliance</span>
					<span>SkyTeam</span>
				</div>
				{Airlines.map((item) => (
					<div>
						<input type={"checkbox"} className={styles.customCheckbox}/>
						<span className={styles.nameAirline}>{item.name}</span>
						<span className={styles.priceAirline}>from {item.price}</span>
					</div>
				))}
			</Accordion.Content>

			<Accordion.Title
				className={styles.titleGreenFlights}
				onClick={() => setGreener(!greener)}
			>
				Greener flights
				<Icon name="dropdown" />
			</Accordion.Title>

			<Accordion.Content active={greener}>
				<input type={"checkbox"} />
				<span>Only show flights with lower CO₂ emissions</span>
			</Accordion.Content>
		</Accordion>
	);
};

export default FilterSearch;
