/** @format */

import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import { createBrowserHistory } from "history";
import { routes } from "./mock/routes";
import axios from "axios";
import { AXIOSINSTANCE, AXIOSINSTANCE_SERVER_URL } from "./redux/redux-types";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const history = createBrowserHistory();
  const dispatch = useDispatch();
  const aInstance = useSelector((state) => state.axios_instance);
  useEffect(() => {
    dispatch({
      type: AXIOSINSTANCE_SERVER_URL,
      payload: process.env.REACT_APP_TRIPSCANNER_SERVER_API_URL,
    });

    let axiosInstance = axios.create({
      baseURL: process.env.REACT_APP_TRIPSCANNER_SERVER_API_URL,
      cache: false,
      headers: {
        authorization: `Bearer ${aInstance.token}`,
      },
    });
    dispatch({ type: AXIOSINSTANCE, payload: axiosInstance });
    console.log("START");
  }, []);
  return (
    <div className='app'>
      <Layout>
        <Routes history={history}>
          {routes.map((route, key) => (
            <Route path={route.path} element={route.element} key={key} />
          ))}
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
