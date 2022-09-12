import React from "react";
import { useState } from "react";
import { Checkbox, Divider, Form, Grid, Input, Radio } from "semantic-ui-react";
import styles from "./startpage.module.scss";
import chArrow from "../static/changeArrow.svg";
import { Dropdown } from "semantic-ui-react";

const StartPage = () => {
	const [value, setValue] = useState("both-way");
	return (
		<Grid>
			<Grid.Row>
				<Grid.Column width={16}>
					<div className={styles.backImg}>
						<Grid>
							<Grid.Row>
								<Grid.Column width={4}></Grid.Column>
								<Grid.Column width={8} className={styles.spColumn}>
									<span className={styles.text1}>
										{" "}
										Дешевые рейсы куда угодно и откуда угодно
									</span>
								</Grid.Column>
								<Grid.Column width={4}></Grid.Column>
							</Grid.Row>

							<Grid.Row className={styles.filterRow}>
								<Grid.Column width={4}></Grid.Column>
								<Grid.Column width={8} className={styles.filter}>
									<Grid>
										<Grid.Row>
											<Grid.Column className={styles.radioBtnGroup}>
												<div className={styles.filterGroup}>
													<input type="radio" id="both-way" name="gender" />
													<label className={styles.radioLabel} for="male">
														Туда-обратно
													</label>
												</div>

												<div className={styles.filterGroup}>
													<input type="radio" id="one-way" name="gender" />
													<label className={styles.radioLabel} for="female">
														В одну сторону
													</label>
												</div>

												<div className={styles.filterGroup}>
													<input
														type="radio"
														id="complex-route"
														name="gender"
													/>
													<label className={styles.radioLabel} for="other">
														Сложный маршрут
													</label>
												</div>
											</Grid.Column>
										</Grid.Row>

										<Grid.Row className={styles.inputGroup}>
											<Grid.Column
												width={8}
												style={{ display: "flex", marginTop: "-10px" }}
											>
												<div>
													<label>Откуда</label>
													<input
														className={styles.formInput}
														placeholder="Страна, город или аэропорт"
													/>
												</div>
												<button className={styles.changrBtn} />
												<div>
													<label>Куда</label>
													<input
														className={styles.formInput2}
														placeholder=" Страна, город или аэропорт"
													/>
												</div>
												<div>
													<label>Туда</label>
													<input
														className={styles.datePicker1}
														placeholder="12.09.2022"
													/>
												</div>
												<div>
													<label>Обратно</label>
													<input
														className={styles.datePicker2}
														placeholder="19.09.2022"
													/>
												</div>
												<div>
													<label>Обратно</label>
													<Dropdown 
													className={styles.dropdown}
														placeholder="или аэропорт"
														selection
													/>
												</div>
											</Grid.Column>
										</Grid.Row>

										<Grid.Row>
											<div style={{color: '#fff'}}> 
											<Checkbox label = 'Добавить аэропорты поблизости' />
											<Checkbox label = 'Добавить аэропорты поблизости' />
											<Checkbox label = 'Добавить аэропорты поблизости' />
											</div>


										</Grid.Row>

									</Grid>
								</Grid.Column>
								<Grid.Column width={4}>fdf</Grid.Column>
							</Grid.Row>
						</Grid>
					</div>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
};

export default StartPage;
// {/* <Form className = {styles.form}>

// 											<Form.Field  className={styles.field}>
// 												<Checkbox
// 													className={styles.check}
// 													radio
// 													label="Туда-обратно"
// 													name="checkboxRadioGroup"
// 													value="both-way"
// 													checked={value === "both-way"}
// 													onChange={(e, data) => setValue(data.value)}
// 												/>
// 											</Form.Field>
// 											<Form.Field>
// 												<Checkbox
// 												className={styles.check}
// 													radio
// 													label="В одну сторону"
// 													name="checkboxRadioGroup"
// 													value="one-way"
// 													checked={value === "one-way"}
// 													onChange={(e, data) => setValue(data.value)}
// 												/>
// 											</Form.Field>
// 											<Form.Field>
// 												<Checkbox
// 												className={styles.check}
// 													radio
// 													label="Сложный маршрут"
// 													name="checkboxRadioGroup"
// 													value="complex-route"
// 													checked={value === "complex-route"}
// 													onChange={(e, data) => setValue(data.value)}
// 												/>
// 											</Form.Field>
// 										</Form> */}
