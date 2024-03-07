/** @format */

import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import CustomHeader from "../Common/header/header";

const Layout = ({ children }) => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    const { pathname } = location;
    setCurrentPath(pathname);
    // console.log(pathname);
  }, [location]);

  return (
    <Grid>
      <Grid.Row centered columns={16}>
        <Grid.Column width={16}>
          <div style={{marginTop: '1%', marginBottom: '1%'}}>{currentPath !== "/login" && <CustomHeader />}</div>
          <div>{children}</div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Layout;
