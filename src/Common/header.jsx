import React, { useEffect } from "react";
import { Dropdown, Icon } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";
import styles from "./styles/header.module.scss";
import getUnicodeFlagIcon from "country-flag-icons/unicode";
import { useState } from "react";
import AuthModal from "./modal";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reqLogout } from "../redux/actions";
import AdminModal from "./adminModal";
function Header() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [type, setType] = useState("");
	const [open1, setOpen1] = useState(false);
	const [admin, setAdmin] = useState(false);
	const [open_admin_modal, setOpenAdmMod] = useState(false);
	const isAuth = useSelector((state) => state.login.isAuth);
	const name = useSelector((state) => state.auth.email);
	const key = useSelector((state) => state.auth.key);
	useEffect(() => {
		console.log('key =', key)
	}, [key])

	const handleLogOut = () => {
		localStorage.setItem("token", null);
		window.location.replace("/");
		dispatch(reqLogout);
	};


	return (
		<Grid className={styles.header}>
			<Grid.Row className={styles.headerRow}>
				<Grid.Column width={4} className={styles.logo}>
					<span>Tripscanner</span>
				</Grid.Column>

				<Grid.Column width={6} floated="right" className={styles.groupBtn1}>
					<Grid>
						<Grid.Row>
							<Grid.Column width={2} className={styles.help}>
								<a href="#">Help</a>
							</Grid.Column>

							<Grid.Column width={9} className={styles.settingsBtn}>
								<Button className={styles.settings}>
									English(UK) {getUnicodeFlagIcon("ua")} Ukraine $USD
								</Button>
							</Grid.Column>
							<Grid.Column width={5}>
								{isAuth ? (
									// <Button className={styles.login}>
									<Dropdown text={name} className={styles.login1}>
										<Dropdown.Menu>
											<Dropdown.Item text="Profile" />
											{key ? (
												<Dropdown.Item text="Admin Profile" onClick={() => navigate('/admin-profile')} />
											) : (
												<Dropdown.Item
													text="Get Admin"
													onClick={() => setOpenAdmMod(true)}
												/>
											)}
											<Dropdown.Item
												text="Log Out"
												onClick={() => handleLogOut()}
											/>
										</Dropdown.Menu>
									</Dropdown>
								) : (
									// </Button>
									<Button
										className={styles.login}
										onClick={() => {
											setOpen1(true);
											setType("signin");
										}}
									>
										Log in
									</Button>
								)}
							</Grid.Column>
						</Grid.Row>
					</Grid>

					<AuthModal setOpen1={setOpen1} open1={open1} type={type} />
					<AdminModal setOpenAdm={setOpenAdmMod} openAdm={open_admin_modal} />
				</Grid.Column>
			</Grid.Row>

			<Grid.Row style={{ paddingLeft: "5vh", paddingRight: "5vh" }}>
				<Grid.Column style={{ marginTop: "-15px" }}>
					<Button className={styles.flightsBtn} onClick={() => navigate("/")}>
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
}

export default Header;
