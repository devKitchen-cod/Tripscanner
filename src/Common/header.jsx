import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";
import styles from "./styles/header.module.scss";
import getUnicodeFlagIcon from "country-flag-icons/unicode";

import { useState } from "react";
import { Modal } from "semantic-ui-react";
import { Form } from "semantic-ui-react";
import { Checkbox } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { SETEMAIL, SETNAME, SETPASSWORD } from "../redux/redux-types";
import { useSelector } from "react-redux";
import { reqAuth } from "../redux/actions";

const Header = () => {
	const [open, setOpen] = useState(false);
	const [open1, setOpen1] = useState(false);
	const [nameS, setName] = useState('')
	const [emailS, setEmail] = useState('')
	const [passwordS, setPassword] = useState('')

	const dispatch = useDispatch()

	const handleDispatch = (_event) =>{
		dispatch({type: SETNAME, payload: nameS})
		dispatch({type: SETEMAIL, payload: emailS})
		dispatch({type: SETPASSWORD, payload: passwordS})		
	}
	const email = useSelector((state) => state.auth.email)
	const password = useSelector((state) => state.auth.password)
	const name = useSelector((state) => state.auth.name)

	const obj = {
		email: email,
		password: password,
		name: name
	}
	const handleSub = (_event) => {
		if((obj.email, obj.password, obj.name)=== ""){
			alert('err')
		}else{
			dispatch(reqAuth(obj))
		}
	}
	return (
		<Grid className={styles.header}>
			<Grid.Row columns={2} className={styles.headerRow}>
				<Grid.Column width={4}>
					{/* <img alt="some" width={200} src={logo} /> */}
					<div style={{ fontSize: "25px", fontWeight: "700", color: "#0770e3" }}>
						Tripscanner
					</div>
				</Grid.Column>

				<Grid.Column width={6} floated="right" className={styles.groupBtn1}>
					<a href="#">Help</a>
					<Button className={styles.settings}>
						English(UK) {getUnicodeFlagIcon("ua")} Ukrain $USD
					</Button>

					<Button className={styles.authbtn} onClick = {() => setOpen1(true)}>Sign up</Button>
					<Modal
						onClose={() => setOpen1(false)}
						// onOpen={() => setOpen1(true)}
						open={open1}
						// trigger={<Button className={styles.authbtn}>Sign up</Button>}
					>
						<Modal.Content>
							<Form>
								<Form.Field>
									<label>Name</label>
									<input placeholder="Name" onChange={(e) => setName(e.target.value)}/>
								</Form.Field>
								<Form.Field>
									<label>Email</label>
									<input placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
								</Form.Field>
								<Form.Field>
									<label>Password</label>
									<input placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
								</Form.Field>
								<Form.Field>
									<Checkbox onChange={handleDispatch} label="I agree to the Terms and Conditions" />
								</Form.Field>
								{/* <Button type="submit">Submit</Button> */}
							</Form>
						</Modal.Content>
						<Modal.Actions>
							<Button color="black" onClick={() => setOpen(false)}>
								Cancle
							</Button>
							<Button
								content="Log in"
								labelPosition="right"
								icon="checkmark"
								onClick={() => {
									setOpen(false)
									handleSub(obj)
								}}
								positive
							/>
						</Modal.Actions>
					</Modal>
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




// <Modal
// onClose={() => setOpen(false)}
// onOpen={() => setOpen(true)}
// open={open}
// trigger={<Button className={styles.loginbtn}>Log In</Button>}
// >
// <Modal.Content>
// 	<Form>
// 		<Form.Field>
// 			<label>Email</label>
// 			<input placeholder="Email" />
// 		</Form.Field>
// 		<Form.Field>
// 			<label>Password</label>
// 			<input placeholder="Password" />
// 		</Form.Field>
// 		<Form.Field>
// 			<Checkbox  label="I agree to the Terms and Conditions" />
// 		</Form.Field>
// 		{/* <Button type="submit" onClick={handleDispatch}>Submit</Button> */}
// 	</Form>
// </Modal.Content>
// <Modal.Actions>
// 	<Button color="black" onClick={() => setOpen(false)}>
// 		Cancle
// 	</Button>
// 	<Button
// 		content="Log in"
// 		labelPosition="right"
// 		icon="checkmark"
// 		onClick={() => setOpen(false)}
// 		positive
// 	/>
// </Modal.Actions>
// </Modal>