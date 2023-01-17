// List of imports that's used inside this component

import React from "react";
import { Title } from "../../globals/utils";
import Tabs from "../Tabs/Tabs";
import "./Header.css";

// Function component for Header.
const Header = () => {
  return (
    <>
      <img src={Title} alt=" Title" className="header-title-img" />
      <p className="header-p">Configure your own Aluminium fence!</p>
      <Tabs />
    </>
  );
};

export default Header;
