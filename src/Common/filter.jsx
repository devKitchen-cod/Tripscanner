import React from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "semantic-ui-react";
import { Button, Grid, Icon, Dropdown } from "semantic-ui-react";
import styles from "./styles/filter.module.scss";
const Filter = () => {
	const navigate = useNavigate();
	const radioBtn = [
		{
			type: "radio",
			id: "both-way",
			name: "way",
			for: "both-way",
			content: "Roundtrip",
		},
		{
			type: "radio",
			id: "one-way",
			name: "way",
			for: "one-way",
			content: "One way",
		},
		{
			type: "radio",
			id: "complex-route",
			name: "way",
			for: "complex-route",
			content: "Multi-city",
		},
	];
	return (
		<Grid>
			<Grid.Row>
				<Grid.Column width={16} className={styles.filter}>
					<Grid className={styles.innerfilter}>
						<Grid.Row>
							<Grid.Column className={styles.radioBtnGroup}>
								{radioBtn.map((item) => (
									<div className={styles.filterGroup}>
										<input type={item.type} id={item.id} name={item.name} />
										<label className={styles.radioLabel} for={item.for}>
											{item.content}
										</label>
									</div>
								))}
							</Grid.Column>
						</Grid.Row>

						<Grid.Row className={styles.inputGroup}>
							<Grid.Column width={16} className={styles.inputGroupColumn}>
								<Form>
									<Form.Group widths={"equal"}>
										<Form.Input
											className={styles.form1}
											label="From"
											fluid
											placeholder="Страна, город или аэропорт"
										/>
										<button className={styles.changrBtn} />
										<Form.Input
											className={styles.form2}
											label="To"
											fluid
											placeholder="Страна, город или аэропорт"
										/>
										<Form.Input className={styles.form3} label="Depart" fluid />
										<Form.Input className={styles.form4} label="Return" fluid />
										<div>
											<label>Cabin Class & Travelers</label>
											<Dropdown
												className={styles.dropdown}
												placeholder="Тип, кол. мест"
												selection
												label="asd"
											/>
										</div>
									</Form.Group>
								</Form>
							</Grid.Column>
						</Grid.Row>

						<Grid.Row>
							<Grid.Column width={9} className={styles.labelGroup}>
								<label className={styles.label1}>
									<input type={"checkbox"} />
									<span>Add nearby airports</span>
								</label>

								<label className={styles.label2}>
									<input type={"checkbox"} />
									<span>Add nearby airports</span>
								</label>

								<label className={styles.label3}>
									<input type={"checkbox"} />
									<span>Non-stop flights only</span>
								</label>
							</Grid.Column>

							<Grid.Column width={7}>
								<Button
									className={styles.findBtn1}
									onClick={() => navigate("/flight-search")}
								>
									Search flights
									<Icon name="arrow right" color="white" />
								</Button>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
};

export default Filter;
