import React from "react";
import { MonitorBackdrop } from "../../Components/MonitorBackdrop/MonitorBackdrop";
import { Screen } from "../../Components/Screen/Screen";
import { Console } from "../../Components/Console/Console";
import PropTypes from "prop-types";

function Home(props) {
  return (
    <div>
      <Screen />
      <Console />
      <MonitorBackdrop />
    </div>
  );
}

Home.propTypes = {};

export default Home;
