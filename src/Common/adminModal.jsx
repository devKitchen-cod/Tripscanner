import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Grid, Modal } from "semantic-ui-react";
import { reqGetAdmin } from "../redux/actions";
import styles from "./styles/admin_modal.module.scss";
const AdminModal = ({ setOpenAdm, openAdm }) => {
	const [key, setKey] = useState("");
	const email = useSelector((state) => state.auth.email);
	const dispatch = useDispatch();
	const handleGetAdmin = () => {
		console.log("Get admin", key);
		const obj = { key: key, email: email };
		console.log(obj);
		dispatch(reqGetAdmin(obj));
	};

	return (
		<Modal
			size="mini"
			dimmer="blurring"
			onClose={() => setOpenAdm(false)}
			open={openAdm}
		>
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
							<Form>
								<Form.Field>
									<label>Key</label>
									<input
										placeholder="Name"
										value={key}
										onChange={(e) => setKey(e.target.value)}
									/>
								</Form.Field>
							</Form>
						</Grid.Column>
					</Grid.Row>

					<Grid.Row textAlign="center">
						<Grid.Column>
							<Button color="black" onClick={() => setOpenAdm(false)}>
								Cancle
							</Button>

							<Button
								content="Get Admin"
								labelPosition="right"
								icon="checkmark"
								onClick={() => {
									setOpenAdm(false);
									handleGetAdmin();
									// handleSubAuth();
								}}
								positive
							/>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Modal.Content>
		</Modal>
	);
};

export default AdminModal;
