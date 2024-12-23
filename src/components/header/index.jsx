import React, { useState } from "react";
import Button from "./button";


const Header = ({whichTab, selected}) => {
  return (
    <header className="bg-sky-300 flex xs:gap-5 md:gap-10 justify-center">
        <Button title="Overview" onclickFunc={whichTab} selected={selected}/>
        <Button title="Statistics" onclickFunc={whichTab} selected={selected}/>
        <Button title="Settings" onclickFunc={whichTab} selected={selected}/>
    </header>
  );
};
export default Header;
