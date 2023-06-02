/** @format */

import React from "react";
import { Icon, Menu, Table } from "semantic-ui-react";

const TableFlights = (data) => {
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id Flight</Table.HeaderCell>
            <Table.HeaderCell>Origin</Table.HeaderCell>
            <Table.HeaderCell>Distination</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell> Origin time</Table.HeaderCell>
            <Table.HeaderCell>Distination time</Table.HeaderCell>
            <Table.HeaderCell>Flight time</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {data.data.map((item) => (
            <Table.Row>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>{item.city_code}</Table.Cell>
              <Table.Cell>{item.country_code}</Table.Cell>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>{item.city_code}</Table.Cell>
              <Table.Cell>{item.country_code}</Table.Cell>
              <Table.Cell>{item.name}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='3'>
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

export default TableFlights;
