import React from "react";
import { AccordionItem } from "react-accessible-accordion";
import { AccordionItemButton } from "react-accessible-accordion";
import { AccordionItemPanel } from "react-accessible-accordion";
import { AccordionItemHeading } from "react-accessible-accordion";
import { Accordion } from "react-accessible-accordion";
import { Grid } from "semantic-ui-react";
import styles from "./styles/accordion.module.scss";
const AccordionS = () => {
	return (
		<Grid>
			<Grid.Row centered>
				<Grid.Column width={9} className={styles.accColumn}>
					<Accordion>
						<AccordionItem>
							<AccordionItemHeading>
								<AccordionItemButton>
									What harsh truths do you prefer to ignore?
								</AccordionItemButton>
							</AccordionItemHeading>
							<AccordionItemPanel>
								<p>
									Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
									occaecat ut occaecat consequat est minim minim esse tempor
									laborum consequat esse adipisicing eu reprehenderit enim.
								</p>
							</AccordionItemPanel>
						</AccordionItem>
						<AccordionItem>
							<AccordionItemHeading>
								<AccordionItemButton>
									What harsh truths do you prefer to ignore?
								</AccordionItemButton>
							</AccordionItemHeading>
							<AccordionItemPanel>
								<p>
									Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
									occaecat ut occaecat consequat est minim minim esse tempor
									laborum consequat esse adipisicing eu reprehenderit enim.
								</p>
							</AccordionItemPanel>
						</AccordionItem>
					</Accordion>
          Accordion
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
};

export default AccordionS;
