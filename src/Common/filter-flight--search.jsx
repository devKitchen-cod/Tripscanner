import React, { useState } from 'react';
import styles from "./styles/filter-flight-search.module.scss"
import { Icon } from 'semantic-ui-react';
import { Accordion } from 'semantic-ui-react';
import { Airlines } from '../mock/mockdata';

const FilterSearch = () => {
  const [openStops, setOpenStops] = useState(true);
	const [openDepart, setOpenDepart] = useState(true);
	const [trip, setTrip] = useState(true);
	const [airlines, setAirlines] = useState(true);
	const [greener, setGreener] = useState(true);
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
							<div className={styles.stopsFilter}>
								<label className={styles.label1}>
									<input type={"checkbox"} />
									<span>Non-stop</span>
								</label>

								<label className={styles.label1}>
									<input type={"checkbox"} />
									<span>1 stop</span>
								</label>

								<label className={styles.label1}>
									<input type={"checkbox"} />
									<span>2+ stops</span>
								</label>
							</div>
						</Accordion.Content>

						<Accordion.Title
							className={styles.titleDepartureTimes}
							onClick={() => setOpenDepart(!openDepart)}
						>
							Departure times
							<Icon name="dropdown" />
						</Accordion.Title>

						<Accordion.Content active={openDepart}>
							<div>
								<p>Outbound</p>
								<span>5 AM - 14 PM</span>
								<div>
									<input type={"range"} id="min" step={1} />
								</div>
							</div>

							<div>
								<p>Return</p>
								<span>5 AM - 14 PM</span>
								<div>
									<input type={"range"} id="min" step={1} />
								</div>
							</div>
						</Accordion.Content>

						<Accordion.Title onClick={() => setTrip(!trip)}>
							Trip Duration
							<Icon name="dropdown" />
						</Accordion.Title>
						<Accordion.Content active={trip}>
							<div>
								<p>Return</p>
								<span>5 AM - 14 PM</span>
								<div>
									<input type={"range"} id="min" step={1} />
								</div>
							</div>
						</Accordion.Content>

						<Accordion.Title onClick={() => setAirlines(!airlines)}>
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
									<input type={"checkbox"} />
									<span>{item.name}</span>
									<span>from {item.price}</span>
								</div>
							))}
						</Accordion.Content>

						<Accordion.Title onClick={() => setGreener(!greener)}>
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