import React, { useState } from "react";
import styles from "./flight-search-page.module.scss";

import { Icon } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";
import { Form } from "semantic-ui-react";
import { Dropdown } from "semantic-ui-react";
import { Accordion } from "semantic-ui-react";
import { useEffect } from "react";
import { TransitionablePortal } from "semantic-ui-react";

import { options } from "../mock/mockdata";
import {   testResSerch } from "../mock/mockdata";
import { radioBtn } from "../mock/mockdata";
import ResCard from "../Common/result_card";
import FilterSearch from "../Common/filter-flight--search";

const FlightSearch = () => {
	const [open, setOpen] = useState(true);
	

	const obj = {
		from: "London (Any)",
		to: "Amsterdam (AMS)",
		countTrev: 2,
		type: "Economy",
	};

	const countRes = 508;

	return (
		<Grid className={styles.wrapper}>
			<Grid.Row>
				<Grid.Column width={16}>
					<Grid onClick={() => setOpen(!open)}>
						{open ? (
							<Grid.Row className={styles.header}>
								<Grid.Column width={8}>
									<div className={styles.headerleft}>
										<Button className={styles.searchbtn}>
											<Icon name="search" />
										</Button>
										<div className={styles.searchparams}>
											<span>
												{obj.from} - {obj.to}
											</span>
											<span>
												{obj.countTrev} travelers | {obj.type}
											</span>
										</div>
									</div>
								</Grid.Column>

								<Grid.Column
									width={8}
									className={styles.datePicker}
								></Grid.Column>
							</Grid.Row>
						) : (
							<Grid.Row className={styles.header1}>
								<Grid.Column width={16} onClick={() => setOpen(true)}>

									<Grid>
										<Grid.Row className={styles.header12}>
											<Grid.Column width={8}>
												<div className={styles.headerleft}>
													<Button className={styles.searchbtn}>
														<Icon name="search" />
													</Button>
													<div className={styles.searchparams}>
														<span>
															{obj.from} - {obj.to}
														</span>
														<span>
															{obj.countTrev} travelers | {obj.type}
														</span>
													</div>
												</div>
											</Grid.Column>
											<Grid.Column
												width={8}
												className={styles.datePicker}
											></Grid.Column>
										</Grid.Row>

										<Grid.Row className={styles.radioBtnGroup}>
											{radioBtn.map((item) => (
												<div className={styles.filterGroup}>
													<input
														type={item.type}
														id={item.id}
														name={item.name}
													/>
													<label className={styles.radioLabel} for={item.for}>
														{item.content}
													</label>
												</div>
											))}
										</Grid.Row>

										<Grid.Row className={styles.inputGroup}>
											<Grid.Column width={16}>
												<Form>
													<Form.Group>
														<Form.Input
															className={styles.form1}
															label="From"
															fluid
															placeholder="From"
														/>
														<button className={styles.changeBtn} />
														<Form.Input
															className={styles.form2}
															label="To"
															fluid
															placeholder="To"
														/>
													</Form.Group>
												</Form>
											</Grid.Column>
										</Grid.Row>

										<Grid.Row>
											<Grid.Column width={8} className={styles.labelGroup1}>
												<label className={styles.label1}>
													<input type={"checkbox"} />
													<span>Add nearby airports</span>
												</label>

												<Grid className={styles.lowformgroup}>
													<Grid.Row>
														<Grid.Column>
															<Form.Input
																className={styles.form3}
																label="Depart"
																fluid
															/>
															<div>
																<label className={styles.label2}>
																	<input type={"checkbox"} />
																	<span>1Add nearby airports</span>
																</label>
															</div>
														</Grid.Column>

														<Grid.Column>
															<Form.Input
																className={styles.form4}
																label="Return"
																fluid
															/>
														</Grid.Column>
													</Grid.Row>
												</Grid>
											</Grid.Column>
											<Grid.Column width={8} className={styles.labelGroup2}>
												<label className={styles.label2}>
													<input type={"checkbox"} />
													<span>1Add nearby airports</span>
												</label>
												{/* <Form.Input className={styles.form5} label="Depart" fluid /> */}
												<div className={styles.dropdownGroup}>
													<label>Cabin class & Travelers</label>
													<Dropdown className={styles.form5} selection />
												</div>
											</Grid.Column>
										</Grid.Row>
									</Grid>
								</Grid.Column>
							</Grid.Row>
						)}
					</Grid>
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
							{testResSerch.map(() => (
						<ResCard />
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

