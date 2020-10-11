import React from "react";
import { MonitorBackdrop } from "../../Components/MonitorBackdrop/MonitorBackdrop";
import { Screen } from "../../Components/Screen/Screen";
import { Console } from "./Console/Console";
import PropTypes from "prop-types";

function Home(props) {
  return (
    <div>
      <Console />
      <Screen />
      <MonitorBackdrop />
    </div>
  );
}

Home.propTypes = {};

export default Home;
