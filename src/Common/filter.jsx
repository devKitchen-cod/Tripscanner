import React from "react";
import { Button, Grid, Icon, Dropdown } from "semantic-ui-react";
import styles from "./styles/filter.module.scss";
const Filter = () => {
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
			<Grid.Row centered>
				<Grid.Column width={9} className={styles.filter}>
					<Grid>
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
							<Grid.Column width={8} className={styles.inputGroupColumn}>
								<div>
									<label>From</label>
									<input
										className={styles.formInput}
										placeholder="Страна, город или аэропорт"
									/>
								</div>
								<button className={styles.changrBtn} />
								<div>
									<label>To</label>
									<input
										className={styles.formInput2}
										placeholder=" Страна, город или аэропорт"
									/>
								</div>
								<div>
									<label>Depart</label>
									<input
										className={styles.datePicker1}
										placeholder="12.09.2022"
									/>
								</div>
								<div>
									<label>Return</label>
									<input
										className={styles.datePicker2}
										placeholder="19.09.2022"
									/>
								</div>
								<div>
									<label>Cabin Class & Travelers</label>
									<Dropdown
										className={styles.dropdown}
										placeholder="Тип, кол. мест"
										selection
									/>
								</div>
							</Grid.Column>
						</Grid.Row>

						<Grid.Row className={styles.lowRow}>
							<Grid.Column width={8} className={styles.checkboxForm}>
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
							<Grid.Column width={6} className={styles.findTicketsBTN}>
								<Button className={styles.findBtn1}>
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
