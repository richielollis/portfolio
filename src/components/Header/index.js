import React from "react";
import NavBar from "../NavBar";

function Header(props) {
  const { navTabs = [], currentTab, setCurrentTab } = props;
  return (
    <header>
      <div className="callCard">RL</div>
      <NavBar
        navTabs={navTabs}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      ></NavBar>
    </header>
  );
}

export default Header;
