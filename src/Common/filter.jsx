/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Search, Select } from "semantic-ui-react";
import { Button, Grid, Icon, Dropdown } from "semantic-ui-react";
import styles from "./styles/filter.module.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

// import { reqSearch } from "../redux/postActions";
// import { reqGetCountry } from "../redux/getActions";
import { reqGetAllCountries } from "../redux/country_actions";
import _ from "lodash";
const Filter = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const axiosInstance = useSelector((state) => state.axios_instance.instance);

  const country = useSelector((state) => state.country.all_countries);
  const state = useSelector((state) => state.search);
  // const city = useSelector((state) => state.city.city_airport_dislocation);
  // const airports = useSelector((state) => state.airports.res);
  // const city = useSelector((state) => state.city.city_o_d);
  const [citys, setCitys] = useState([]);

  const radioBtn = [
    {
      type: "radio",
      id: "both-way",
      name: "way",
      for: "both-way",
      content: "Roundtrip",
    },
    {
      type: "radio",
      id: "one-way",
      name: "way",
      for: "one-way",
      content: "One way",
    },
    {
      type: "radio",
      id: "complex-route",
      name: "way",
      for: "complex-route",
      content: "Multi-city",
    },
  ];

  // useEffect(() => {
  //   console.log("GET");
  //   dispatch(reqGetAllCountries(axiosInstance));
  // }, [axiosInstance]);

  // useEffect(() => {
  //   console.log(country);
  // }, [country]);

  // const [state, dispatch] = React.useReducer(exampleReducer, initialState)
  // const { loading, results, value } = state;

  // const timeoutRef = React.useRef();
  // const handleSearchChange = React.useCallback((e, data) => {
  //   clearTimeout(timeoutRef.current);
  //   dispatch({ type: "START_SEARCH", query: data.value });

  //   timeoutRef.current = setTimeout(() => {
  //     if (data.value.length === 0) {
  //       dispatch({ type: "CLEAN_QUERY" });
  //       return;
  //     }

  //     const re = new RegExp(_.escapeRegExp(data.value), "i");
  //     const isMatch = (result) => re.test(result.title);

  //     // dispatch({
  //     //   type: "FINISH_SEARCH",
  //     //   results: _.filter(source, isMatch),
  //     // });
  //   }, 300);
  // }, []);
  // React.useEffect(() => {
  //   return () => {
  //     clearTimeout(timeoutRef.current);
  //   };
  // }, []);

  // useEffect(() => {
  //   console.log('GET')
  //   dispatch(reqGetCountry(axiosInstance))
  // }, [axiosInstance]);

  // useEffect(() => {
  //   console.log('[country]', country)
  // }, [country])

  // useEffect(() => {
  //   // console.log("[city]", city);
  //   setCitys(
  //     city.map((item) => {
  //       // setCitys(...item, item.name)
  //       // console.log(item.name);
  //       return {
  //         key: item.name,
  //         text: item.name,
  //         value: item.name,
  //       };
  //     })
  //   );
  // }, [city]);

  // console.log("citys", citys);

  const [val, setVal] = useState();

  const handleOnSearchChange = (e) => {
    let obj = {
      value: e.target.value,
    };
    // dispatch(reqSearch(axiosInstance, obj));

    console.log("SEARCH", e.target.value);
    setVal(e.target.value);
  };

  // useEffect(() => {
  //   setVal(city);
  // }, [city]);

  useEffect(() => {
    console.log("[val]", val);
  }, [val]);

  return (
    <Grid>
      <Grid.Row centered>
        <Grid.Column width={16} className={styles.filter}>
          <Grid className={styles.innerfilter}>
            <Grid.Row centered>
              <Grid.Column width={8} className={styles.radioBtnGroup}>
                {radioBtn.map((item) => (
                  <div className={styles.filterGroup}>
                    <input type={item.type} id={item.id} name={item.name} />
                    <label className={styles.radioLabel} for={item.for}>
                      {item.content}
                    </label>
                  </div>
                ))}
              </Grid.Column>
            </Grid.Row>

            <Grid.Row centered className={styles.inputGroup}>
              <Grid.Column width={14} className={styles.inputGroupColumn}>
                <Form>
                  <Form.Group
                  // widths={"equal"}
                  >
                    <Form.Select
                      control={Search}
                      // as={Search}
                      // onResultSelect={""}
                      onSearchChange={handleOnSearchChange}
                      // options={}
                      results={val}
                      className={styles.form1}
                      label='From'
                      fluid
                      placeholder='Country, city or airport'
                    />
                    <Form.Field
                      control={Search}
                      options={val}
                      onSearchChange={handleOnSearchChange}
                      // results={val}
                      // onResultSelect={""}
                      className={styles.form2}
                      label='To'
                      fluid
                      placeholder='Country, city or airport'
                    />
                    {/* <Form.Input className={styles.form3} label="Depart" fluid />
                    <Form.Input className={styles.form4} label="Return" fluid /> */}
                    {/* <div>
                      <label>
                        Cabin Class &
                        Travelers
                      </label>
                      <Dropdown
                        className={
                          styles.dropdown
                        }
                        placeholder='Type, number places'
                        selection
                        label='asd'
                      />
                    </div> */}

                    <Form.Select
                      className={styles.dropdown}
                      fluid
                      label=' Cabin Class &
                      Travelers'
                      // options={options}
                      placeholder='Type'
                    />
                    {/* <Button
                      className={
                        styles.findBtn1
                      }
                      onClick={() =>
                        navigate(
                          "/flight-search"
                        )
                      }>
                      Search flights
                      <Icon
                        name='arrow right'
                        color='white'
                      />
                      
                    </Button> */}
                    <Button
                      className={styles.findBtn1}
                      onClick={() => navigate("/flight-search")}
                      icon
                      labelPosition='right'>
                      Search
                      <Icon name='right arrow' className={styles.btnIcon} />
                    </Button>
                  </Form.Group>
                </Form>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row centered>
              {/* <Grid.Column width={9} className={styles.labelGroup}>
                <label className={styles.label1}>
                  <input type={"checkbox"} />
                  <span>Add nearby airports</span>
                </label>

                <label className={styles.label2}>
                  <input type={"checkbox"} />
                  <span>Add nearby airports</span>
                </label>

                <label className={styles.label3}>
                  <input type={"checkbox"} />
                  <span>Non-stop flights only</span>
                </label>
              </Grid.Column> */}

              <Grid.Column>
                {/* <Button
                  className={styles.findBtn1}
                  onClick={() => navigate("/flight-search")}>
                  Search flights
                  <Icon name="arrow right" color="white" />
                </Button> */}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Filter;
