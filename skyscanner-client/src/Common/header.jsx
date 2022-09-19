import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";
import logo from "../static/logo.svg";
const Header = () => {
	return (
		<div className="h-wrapper">
			<Grid
				style={{
					marginLeft: "40vh",

					marginRight: "40vh",
					paddingTop: "25px",
				}}
			>
				<Grid.Row
					columns={2}
					style={{ paddingLeft: "5vh", paddingRight: "5vh" }}
				>
					<Grid.Column width={4}>
						<div>
							<img alt="some" width={200} src={logo} />
						</div>
					</Grid.Column>

					<Grid.Column width={6} style={{ textAlign: "right" }} floated="right">
						<div
							style={{
								display: "inline-block",
							}}
						>
							<Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
								Help
							</Link>
							<Button>English(UK) Ukrain $USD</Button>
							<Button>Log In</Button>
						</div>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row style={{ paddingLeft: "5vh", paddingRight: "5vh" }}>
					<Grid.Column style={{ marginTop: "-15px" }}>
						<Button>
							<Icon name="instagram" />1
						</Button>
						<Button>2</Button>
						<Button>3</Button>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</div>
	);
};

export default Header;
