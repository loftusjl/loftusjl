import React from "react";
import { MonitorBackdrop } from "../../Components/MonitorBackdrop/MonitorBackdrop";
import { Screen } from "../../Components/Screen/Screen";
import PropTypes from "prop-types";

function Home(props) {
  return (
    <div>
      <Screen />
      <MonitorBackdrop />
    </div>
  );
}

Home.propTypes = {};

export default Home;
