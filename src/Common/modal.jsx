import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Grid } from "semantic-ui-react";
import { Form } from "semantic-ui-react";
import { Modal } from "semantic-ui-react";
import { reqAuth, reqLogin } from "../redux/actions";
import styles from "../../src/Common/styles/auth_modal.module.scss";

const AuthModal = ({ setOpen1, open1 }) => {
	const dispatch = useDispatch();
	const [type, setType] = useState("");
	const [user, setUser] = useState({
		name: "",
		email: "",
		password: "",
	});

	const handleSubAuth = () => {
		(user.email, user.password, user.name) === ""
			? console.log("err")
			: dispatch(reqAuth(user));
	};

	const handleSubLogin = () => {
		(user.email, user.password) === ""
			? console.log("err")
			: dispatch(reqLogin(user));
	};

	return (
		<Modal size="mini" onClose={() => setOpen1(false)} open={open1}>
			<Modal.Content className={styles.modal_cont}>
				<Grid>
					<Grid.Row className={styles.cont_row1} textAlign="center">
						<Grid.Column width={16}>
							<span className={styles.cont_header}>
								Get the full experience
							</span>
							<span>
								Track prices, make trip planning easier and enjoy faster
								booking.
							</span>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column>
							{type === "signup" ? (
								<Form>
									<Form.Field>
										<label>Name</label>
										<input
											placeholder="Name"
											value={user.name}
											onChange={(e) =>
												setUser({ ...user, name: e.target.value })
											}
										/>
									</Form.Field>
									<Form.Field>
										<label>Email</label>
										<input
											placeholder="Email"
											value={user.email}
											onChange={(e) =>
												setUser({ ...user, email: e.target.value })
											}
										/>
									</Form.Field>
									<Form.Field>
										<label>Password</label>
										<input
											placeholder="Password"
											value={user.password}
											onChange={(e) =>
												setUser({ ...user, password: e.target.value })
											}
										/>
									</Form.Field>
								</Form>
							) : (
								<Form>
									<Form.Field>
										<label>Email</label>
										<input
											placeholder="Email"
											value={user.email}
											onChange={(e) =>
												setUser({ ...user, email: e.target.value })
											}
										/>
									</Form.Field>
									<Form.Field>
										<label>Password</label>
										<input
											placeholder="Password"
											value={user.password}
											onChange={(e) =>
												setUser({ ...user, password: e.target.value })
											}
										/>
									</Form.Field>
								</Form>
							)}
						</Grid.Column>
					</Grid.Row>
					<Grid.Row textAlign="center">
						<Grid.Column>
							<Button color="black" onClick={() => setOpen1(false)}>
								Cancle
							</Button>

							{type === "signup" ? (
								<Button
									content="Sign up"
									labelPosition="right"
									icon="checkmark"
									onClick={() => {
										setOpen1(false);

										handleSubAuth();
									}}
									positive
								/>
							) : (
								<Button
									content="Log in"
									labelPosition="right"
									icon="checkmark"
									onClick={() => {
										setOpen1(false);
										handleSubLogin();
									}}
									positive
								/>
							)}
						</Grid.Column>
					</Grid.Row>

					<Grid.Row className={styles.modal_action_row} textAlign="center">
						<Grid.Column width={16} floated="left" className={styles.signup}>
							{type === "signup" ? (
								<span>Already have an account ?</span>
							) : (
								<span>In first time here ?</span>
							)}
							{type === "signup" ? (
								<Button content="Log in" onClick={() => setType("login")} />
							) : (
								<Button content="Sign up" onClick={() => setType("signup")} />
							)}
						</Grid.Column>

						<Grid.Column width={8} className={styles.group_btn2}></Grid.Column>
					</Grid.Row>
				</Grid>
			</Modal.Content>
		</Modal>
	);
};

export default AuthModal;
