/** @format */

import React from "react";
import { Icon, Menu, Table } from "semantic-ui-react";

const TableAirplane = () => {
  return (
    <div>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>IdAirplane</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Free places</Table.HeaderCell>
            <Table.HeaderCell>Avr Price of Place</Table.HeaderCell>
            <Table.HeaderCell>More</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body></Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='7'>
              <Menu floated='right' pagination>
                <Menu.Item as='a' icon>
                  <Icon name='chevron left' />
                </Menu.Item>
                <Menu.Item as='a'>1</Menu.Item>
                <Menu.Item as='a'>2</Menu.Item>
                <Menu.Item as='a'>3</Menu.Item>
                <Menu.Item as='a'>4</Menu.Item>
                <Menu.Item as='a' icon>
                  <Icon name='chevron right' />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
};

export default TableAirplane;
