/** @format */

import React from "react";
import { useSelector } from "react-redux";
import { Icon, Menu, Table } from "semantic-ui-react";

const TableFlights = (data) => {
  const flights = useSelector((state) => state.flights.res);
  // console.log("flights", flights);

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id Flight</Table.HeaderCell>
            <Table.HeaderCell>Origin</Table.HeaderCell>
            <Table.HeaderCell>Distination</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>Origin time</Table.HeaderCell>
            <Table.HeaderCell>Distination time</Table.HeaderCell>
            <Table.HeaderCell>Flight time</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {flights.map((item) => (
            <Table.Row>
              <Table.Cell>{item._id}</Table.Cell>
              <Table.Cell>{item.origin_city}</Table.Cell>
              <Table.Cell>{item.distination_city}</Table.Cell>
              <Table.Cell>{item.price}</Table.Cell>
              <Table.Cell>{item.origin_time}</Table.Cell>
              <Table.Cell>{item.distination_time}</Table.Cell>
              <Table.Cell>{item.flight_time}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

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

export default TableFlights;
