/** @format */

import React from "react";
import { useState } from "react";
import { Form, Grid, Input, Menu } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import FlightsForm from "./add-forms/add-country-form";

const Add = () => {
  const [active, setActive] = useState("flight");
  
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={16}>
          <Menu pointing>
            <Menu.Item
              name='Add Flights'
              // active={activeItem === 'home'}
              onClick={() => setActive("flight")}
            />
            <Menu.Item
              name='Add Airports'
              // active={activeItem === 'messages'}
              onClick={() => setActive("airports")}
            />
            <Menu.Item
              name='Add Tickets'
              // active={active}
              // onClick={this.handleItemClick}
              onClick={() => setActive("tickets")}
            />
            <Menu.Item
              name='Add City'
              // active={active}
              // onClick={this.handleItemClick}
              onClick={() => setActive("city")}
            />
            <Menu.Menu position='right'>
              <Menu.Item>
                <Input icon='search' placeholder='Search...' />
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
    case "flight":
      return <FlightsForm />;
    case "airports":
      return <div>airports</div>;
    case "tickets":
      return <div>tickets</div>;
    // return  <div>{testResSerch.map((item) => (<ResCard item = {item} />))}</div>
    case "city":
      return <div>some</div>;
      break;

    default:
      break;
  }
};

// const ServFormAddCity = () => {
//   const [city, setCity] = useState("");
//   const airport = useSelector((state) => state.airports.res)
//   const dispatch = useDispatch()
//   const handleSetCity = (e) => {
//     console.log('[city]', e.target.value);
//     let c = e.target.value
//     setCity(c)
//   };
//   const handleSubmit = () => {
//     const obj = {city}
//     console.log('obj', obj)
//     dispatch(reqAddCityAirport(obj))
//   }
//   return (
//     <div>
//       <Form widths={"equal"}>
//         <Form.Group inline>
//           <Form.Input
//             fluid
//             id='form-subcomponent-shorthand-input-last-name'
//             label='Name city'
//             placeholder='Name city'
//             onChange={(e) => handleSetCity(e)}
//           />
//           <Form.Input
//             fluid
//             id='form-subcomponent-shorthand-input-first-name'
//             label='City Code'
//             placeholder='Code'
//           />
//           <Form.Button onClick={() => handleSubmit()}>
//             Submit
//           </Form.Button>
//         </Form.Group>
//       </Form>
//     </div>
//   );
// };
