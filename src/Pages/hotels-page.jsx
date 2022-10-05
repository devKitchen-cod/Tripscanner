import React from "react";
import styles from "./hotelspage.module.scss";
import { Grid } from "semantic-ui-react";
import FilterHotels from "../Common/filter_hotels";
//adaptation after 1200px
const HotelsPage = () => {
	return (
		<Grid>
			<Grid.Row className={styles.row1}>
				<Grid.Column width={16} className={styles.backImg}>
					<Grid className={styles.innerblockfilter}>

						<Grid.Row>            
							<Grid.Column width={16} className={styles.spColumn}>
								<span className={styles.text1}>Find a place to stay</span>
							</Grid.Column>            
						</Grid.Row>

						<Grid.Row className={styles.filterRowHotels}>
							<Grid.Column>
								<FilterHotels/>
							</Grid.Column>
						</Grid.Row>


					</Grid>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
};

export default HotelsPage;
