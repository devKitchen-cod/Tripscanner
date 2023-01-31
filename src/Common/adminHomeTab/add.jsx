/** @format */

import React from "react";
import { useState } from "react";
import { Grid, Input, Menu } from "semantic-ui-react";
import CountryForm from "./add-forms/add-country-form";

const Add = () => {
  const [active, setActive] = useState("tickets");

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={16}>
          <Menu pointing>
            <Menu.Item
              name="Add Country"
              // active={activeItem === 'home'}
              onClick={() => setActive("country")}
            />
            <Menu.Item
              name="Add Airports"
              // active={activeItem === 'messages'}
              onClick={() => setActive("airports")}
            />
            <Menu.Item
              name="Add Tickets"
              // active={active}
              // onClick={this.handleItemClick}
              onClick={() => setActive("tickets")}
            />
            <Menu.Menu position="right">
              <Menu.Item>
                <Input icon="search" placeholder="Search..." />
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>{menuFunc1(active)}</Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Add;

const menuFunc1 = (active) => {
  switch (active) {
    case "country":
      return <CountryForm />;
    case "airports":
      return <div>airports</div>;
    case "tickets":
      return <div>tickets</div>;
      // return  <div>{testResSerch.map((item) => (<ResCard item = {item} />))}</div>

      break;

    default:
      break;
  }
};
