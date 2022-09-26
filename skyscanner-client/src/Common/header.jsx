import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";
import logo from "../static/logo.svg";
import styles from "./styles/header.module.scss";
import getUnicodeFlagIcon from "country-flag-icons/unicode";
const Header = () => {

	const handleLogin = () => {
		console.log('login')
	}
	return (
		<Grid className={styles.header}>
			<Grid.Row columns={2} className={styles.headerRow}>
				<Grid.Column width={4}>
					{/* <img alt="some" width={200} src={logo} /> */}
					<div style={{fontSize: '25px', fontWeight: '700', color: 'blue'}}>Tripscaner</div>
				</Grid.Column>

				<Grid.Column width={6} floated="right" className={styles.groupBtn1}>
					<a href="#">Help</a>
					<Button className={styles.settings}>English(UK) {getUnicodeFlagIcon("ua")} Ukrain $USD</Button>
					<Button className={styles.loginbtn} onClick ={handleLogin }>Log In</Button>
				</Grid.Column>
			</Grid.Row>
			<Grid.Row style={{ paddingLeft: "5vh", paddingRight: "5vh" }}>
				<Grid.Column style={{ marginTop: "-15px" }}>
					<Button className={styles.flightsBtn}>
						<Icon name="paper plane outline" />
						Flights
					</Button>
					<Button className={styles.flightsBtn}>
						<Icon name="paper plane outline" />
							Hotels
					</Button>
					<Button className={styles.flightsBtn}>
						<Icon name="paper plane outline" />
						Car Rental
					</Button>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
};

export default Header;
