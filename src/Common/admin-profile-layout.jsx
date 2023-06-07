/** @format */

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Dropdown, Grid, Icon, Input, Menu } from "semantic-ui-react";
import { testResSerch } from "../mock/mockdata";
import { reqGetCity, reqGetFlights } from "../redux/getActions";
import About from "./adminHomeTab/about";
import Add from "./adminHomeTab/add";
import ResCard from "./result_card";
import styles from "./styles/admin-profile-layout.module.scss";
// import { testResSerch } from "../mock/mockdata";
// import ResCard from "./result_card";
const AdminProfileLayout = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState("home");

  const [originAirport, setOriginAirport] = useState([]);
  const [distinationAirport, setDistinationAirport] = useState([]);

  useEffect(() => {
    console.log("active===", active);
  }, [active]);
  useEffect(() => {
    dispatch(reqGetCity());
    dispatch(reqGetFlights());
  }, []);

  const airport = useSelector((state) => state.airports.finded_airports);
  let origin_airport = airport.origin_airports;
  let distination_airport = airport.distination_airports;
  useEffect(() => {
    console.log("airport", airport);
    setOriginAirport(
      origin_airport?.map((item, key) => {
        return {
          key: key,
          text: item.name,
          value: item.name,
        };
      })
    );

    setDistinationAirport(
      distination_airport?.map((item, key) => {
        return {
          key: key,
          text: item.name,
          value: item.name,
        };
      })
    );
  }, [airport]);

  const handleSetActive = (event, data) => {
    console.log(data);
    console.log(event);
  };

  return (
    <Grid className={styles.wrapper}>
      <Grid.Row columns={16} centered>
        <Grid.Column width={2} className={styles.menu}>
          <Menu vertical>
            <Menu.Item>
              <Input placeholder='Search...' />
            </Menu.Item>

            <Dropdown item text='Home'>
              <Dropdown.Menu>
                <Dropdown.Item
                  icon='home'
                  text='Home'
                  onClick={() => setActive("home")}
                />

                <Dropdown.Item
                  icon='search'
                  text='Search'
                  onClick={() => setActive("search")}
                />
                <Dropdown.Item
                  icon='add'
                  text='Add'
                  onClick={() => setActive("add")}
                />
                <Dropdown.Item
                  icon='settings'
                  text='About'
                  onClick={() => setActive("about")}
                />
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item name='browse' active={active === "browse"}>
              <Icon name='grid layout' />
              Browse
            </Menu.Item>
            <Menu.Item name='messages' active={active === "messages"}>
              Messages
            </Menu.Item>

            <Dropdown item text='More' onClick={() => setActive("home")}>
              <Dropdown.Menu>
                <Dropdown.Item icon='edit' text='Edit Profile' />
                <Dropdown.Item icon='globe' text='Choose Language' />
                <Dropdown.Item icon='settings' text='Account Settings' />
              </Dropdown.Menu>
            </Dropdown>
          </Menu>
        </Grid.Column>

        <Grid.Column width={10} className={styles.table}>
          {menuFunc(active)}
        </Grid.Column>

        {/* <Grid.Column width={2} className={styles.pin}></Grid.Column> */}
      </Grid.Row>
    </Grid>
  );
};

export default AdminProfileLayout;

const menuFunc = (active) => {
  switch (active) {
    case "about":
      return <About />;
    case "add":
      return <Add />;
    case "home":
      return (
        <div>
          {testResSerch.map((item) => (
            <ResCard item={item} />
          ))}
        </div>
      );

      break;

    default:
      break;
  }
};
