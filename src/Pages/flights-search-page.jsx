import React, { useState } from "react";
import styles from "./flight_search_page.module.scss";

import { Icon } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";
import { Dropdown } from "semantic-ui-react";

import { testResSerch } from "../mock/mockdata";
import ResCard from "../Common/result_card";
import FilterSearch from "../Common/filter_flight_search";
import SearchForm from "../Common/search_form_accordion";

const FlightSearch = () => {
	const [open, setOpen] = useState(true);

	const countRes = 508;

	return (
		<Grid className={styles.wrapper}>
			<Grid.Row>
				<Grid.Column width={16} onClick={() => setOpen(!open)}>
					<SearchForm />
				</Grid.Column>
			</Grid.Row>

			<Grid.Row className={styles.linkRow}>
				<Grid.Column width={8}>
					<span className={styles.sp1}>Show whole month</span>
				</Grid.Column>
				<Grid.Column width={8}>
					<span className={styles.sp2}>Additional bag fees may apply</span>
				</Grid.Column>
			</Grid.Row>

			<Grid.Row className={styles.searchResult}>
				<Grid.Column width={4} className={styles.resultFilter}>
					<Button className={styles.alertsBtn}>
						<Icon name="bell" color="blue" />
						<span>Get Price Alerts</span>
					</Button>
				</Grid.Column>

				<Grid.Column width={12} className={styles.resultWrapper}>
					<span className={styles.countresults}>{countRes} results</span>
					<span className={styles.sorttext}>Sort by </span>
					<Dropdown
						className={styles.sortdrop}
						placeholder="Sort"
						search
						selection
					/>
				</Grid.Column>
			</Grid.Row>

			<Grid.Row className={styles.resultsRow}>
				<Grid.Column width={4} className={styles.filter}>
					<FilterSearch />
				</Grid.Column>

				<Grid.Column width={12} className={styles.results}>
					<Grid>
						<Grid.Row centered className={styles.bestChoise}>
							<Grid.Column width={5} className={styles.best}>
								<span className={styles.type}>Best</span>
								<span className={styles.price}>9518</span>
								<span className={styles.time}>1h53m(avarage)</span>
							</Grid.Column>

							<Grid.Column width={5} className={styles.cheap}>
								<span className={styles.type}>Cheapest</span>
								<span className={styles.price}>9518</span>
								<span className={styles.time}>1h53m(avarage)</span>
							</Grid.Column>

							<Grid.Column width={5} className={styles.fastest}>
								<span className={styles.type}>Fastest</span>
								<span className={styles.price}>11518</span>
								<span className={styles.time}>1h50m(avarage)</span>
							</Grid.Column>
						</Grid.Row>

						<Grid.Row centered>
							<Grid.Column width={15}>
								{testResSerch.map((item) => (
									<ResCard item={item} />
								))}
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
};

export default FlightSearch;
