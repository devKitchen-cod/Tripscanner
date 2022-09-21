import React from "react";
import { Button, Card, Grid, Icon } from "semantic-ui-react";
import styles from "./startpage.module.scss";

import Filter from "../Common/filter";
import AccordionS from "../Common/accordion";
import { flights, options } from "../mock/mockdata";
import Footer from "../Common/footer";

const StartPage = () => {
	const f = flights;

	return (
		<Grid>
			<Grid.Row className={styles.row1}>
				<Grid.Column width={16} className={styles.backImg}>
					<Grid>
						<Grid.Row>
							<Grid.Column width={4}></Grid.Column>
							<Grid.Column width={8} className={styles.spColumn}>
								<span className={styles.text1}>
									Дешевые рейсы куда угодно и откуда угодно
								</span>
							</Grid.Column>
							<Grid.Column width={4}></Grid.Column>
						</Grid.Row>

						<Grid.Row className={styles.filterRow} centered columns={5}>
							<Grid.Column width={15}>
								<Filter />
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Grid.Column>
			</Grid.Row>

			<Grid.Row centered className={styles.row2} columns={3}>
				{options.map((item) => (
					<Grid.Column width={item.width} className={styles.options}>
						<img className={styles.imgIconOptions} src={item.url} alt="some" />
						<span className={styles.textOptions}>{item.text}</span>
					</Grid.Column>
				))}
			</Grid.Row>

			{/* <Grid.Row className={styles.row3} centered>
				<AccordionS />
			</Grid.Row> */}

			<Grid.Row centered className={styles.row4}>
				<Grid.Column width={10}>
					<Grid>
						<Grid.Row centered>
							<Grid.Column width={15}>
								<div className={styles.bestFlightHeader}>
									<span>
										Looking for the best flight deals to anywhere in the world?
									</span>
								</div>
								<div className={styles.bestFlightText}>
									<span>
										It’s easy around here. 100 million travelers use us as their
										go-to tool, comparing flight deals and offers from more than
										1,200 airlines and travel providers. With so many options to
										choose from in one place, you can say hello to savings and
										goodbye to stress – here’s how.
									</span>
								</div>
							</Grid.Column>
						</Grid.Row>

						<Grid.Row centered columns={3}>
							<Grid.Column width={5}>
								<div className={styles.img2row}>
									<img
										src="https://content.skyscnr.com/m/3e55723dcc8a2d0f/original/image1.svg"
										alt="some"
									/>
								</div>
								<div className={styles.imgText1}>
									<span className={styles.textHeadImg1}>
										Search Everywhere, explore anywhere
									</span>
									<span className={styles.textImg1}>
										Enter your departure airport and travel dates, then hit
										‘Everywhere.’ You’ll see flights to every destination in the
										world, cheapest first.
									</span>
								</div>
							</Grid.Column>

							<Grid.Column width={5}>
								<div className={styles.img2row}>
									<img
										src="https://content.skyscnr.com/m/7b7b3eaf2ab4081c/original/image2.svg"
										alt="some"
									/>
								</div>
								<div className={styles.imgText2}>
									<span className={styles.textHeadImg1}>
										Search Everywhere, explore anywhere
									</span>
									<span className={styles.textImg1}>
										Enter your departure airport and travel dates, then hit
										‘Everywhere.’ You’ll see flights to every destination in the
										world, cheapest first.
									</span>
								</div>
							</Grid.Column>

							<Grid.Column width={5}>
								<div className={styles.img2row}>
									<img
										src="https://content.skyscnr.com/m/4ab58b7e3ae3790c/original/image3.svg"
										alt="some"
									/>
								</div>
								<div className={styles.imgText3}>
									<span className={styles.textHeadImg1}>
										Search Everywhere, explore anywhere
									</span>
									<span className={styles.textImg1}>
										Enter your departure airport and travel dates, then hit
										‘Everywhere.’ You’ll see flights to every destination in the
										world, cheapest first.
									</span>
								</div>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Grid.Column>
			</Grid.Row>

			<Grid.Row className={styles.row5}>
				<Grid.Column width={16}>
					<Grid>
						<Grid.Row className={styles.row5p1}>
							<Grid.Column>
								<span className={styles.headRow5p1}>
									Plan your journey with peace of mind
								</span>
								<span className={styles.subRow5p1}>
									We've made it our mission to help you travel with confidence
									and make your journey as smooth as possible.
								</span>
							</Grid.Column>
						</Grid.Row>

						<Grid.Row className={styles.row5p2} columns={2}>
							<Grid.Column width={8} className={styles.row5p2Col1}>
								<div className={styles.headRow5p2}>
									<Icon name="bell" color="blue" />
									<span>Find flexible flight deals</span>
								</div>
								<div className={styles.subRow5p2v1}>
									<span>
										Explore flexible plane ticket deals so you won't lose out if
										your flight is changed or cance
									</span>
								</div>
							</Grid.Column>
							<Grid.Column width={8} className={styles.row5p2Col1}>
								<div className={styles.head2Row5p2}>
									<Icon name="certificate" color="blue" />
									<span>Add hotels and car rentals</span>
								</div>
								<div className={styles.subRow5p2v1}>
									<span>
										Plan your journey with hotels and car rentals, and keep your
										bookings all in one place
									</span>
								</div>
							</Grid.Column>
						</Grid.Row>

						<Grid.Row className={styles.row5p3}>
							<Grid.Column className={styles.card}>
								<Grid>
									<Grid.Row columns={2}>
										<Grid.Column width={10} className={styles.cardForm}>
											<div className={styles.cardHeader}>
												<span>Don't miss a single flight deal </span>
											</div>
											<div className={styles.cardSubText}>
												<span>
													Get cheap flights and unmissable travel deals sent
													straight to your inbox.
												</span>
											</div>
											<div style={{ marginTop: "15px" }}>
												<input
													className={styles.cardInput}
													placeholder="Enter your email address"
												/>
												<Button style={{ marginLeft: "5px", height: "3em" }}>
													Sign Up
												</Button>
											</div>
											<div className={styles.subText}>
												<span>
													You can unsubscribe at any time. Read our Privacy
													Policy for more info.
												</span>
											</div>
										</Grid.Column>
										<Grid.Column width={6}>
											<img
												alt="some"
												className={styles.cardImg}
												src="https://content.skyscnr.com/m/6ea151fbaf83db9e/original/Emailcapture.png"
											/>
										</Grid.Column>
									</Grid.Row>
								</Grid>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Grid.Column>
			</Grid.Row>

			<Grid.Row className={styles.row6}>
				<Grid.Column>
					<div className={styles.headerRow6}>
						<span>Ready to start your adventure?</span>
					</div>

					<div className={styles.subRow6}>
						<span>
							So are we. Find the cheapest flight deals to some of the most
							popular destinations, or pick your favorite airline below.
						</span>
					</div>
					<div className={styles.buttonGroup}>
						<Button>Popular cities</Button>
						<Button>Popular countries</Button>
						<Button>Popular flight routes</Button>
						<Button>Top airlines</Button>
					</div>

					<Grid className={styles.linkGroup}>
						<Grid.Row columns={4}>
							{f.map((item) => (
								<Grid.Column className={styles.links}>
									<a href={item.url}>{item.text}</a>
								</Grid.Column>
							))}
						</Grid.Row>
					</Grid>
				</Grid.Column>
			</Grid.Row>

			<Grid.Row className={styles.row7}>
				<Footer />
			</Grid.Row>
		</Grid>
	);
};

export default StartPage;
