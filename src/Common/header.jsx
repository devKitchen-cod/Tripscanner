import React from "react";
import { Icon } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";
import styles from "./styles/header.module.scss";
import getUnicodeFlagIcon from "country-flag-icons/unicode";
import { useState } from "react";
import ModalComp from "./modal";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { redirect } from "react-router";

const Header = () => {
	const navigate = useNavigate();
	const [type, setType] = useState("");
	const [open1, setOpen1] = useState(false);
	const isAuth = useSelector((state) => state.login.isAuth);
	// console.log(isAuth);

	return (
		<Grid className={styles.header}>
			<Grid.Row columns={2} className={styles.headerRow}>
				<Grid.Column width={4}>
					{/* <img alt="some" width={200} src={logo} /> */}
					<div
						style={{ fontSize: "25px", fontWeight: "700", color: "#0770e3" }}
					>
						Tripscanner
					</div>
				</Grid.Column>

				<Grid.Column width={6} floated="right" className={styles.groupBtn1}>
					<a href="#">Help</a>

					<Button className={styles.settings}>
						English(UK) {getUnicodeFlagIcon("ua")} Ukrain $USD
					</Button>

					{isAuth ? (
						<Button content="Log Out" />
					) : (
						<div className={styles.authbtnblock}>
							<Button
								className={styles.authbtn}
								onClick={() => {
									setOpen1(true);
									setType("signup");
								}}
								content="Sign up"
							/>

							<Button
								className={styles.authbtn}
								onClick={() => {
									setOpen1(true);
									setType("signin");
								}}
								content="Sign in"
							/>
						</div>
					)}

					<ModalComp setOpen1={setOpen1} open1={open1} type={type} />
				</Grid.Column>
			</Grid.Row>

			<Grid.Row style={{ paddingLeft: "5vh", paddingRight: "5vh" }}>
				<Grid.Column style={{ marginTop: "-15px" }}>
					<Button className={styles.flightsBtn}
						onClick={() => navigate("/")}>
						<Icon name="paper plane outline" />
						Flights
					</Button>
					<Button
						className={styles.flightsBtn}
						onClick={() => navigate("/hotels")}
					>
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
