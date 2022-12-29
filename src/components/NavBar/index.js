import React from "react";
import Resume from "../../assets/RICHIE LOLLIS_RESUME .pdf";

function NavBar(props) {
  const { navTabs = [], currentTab, setCurrentTab } = props;
  return (
    <ul>
      {navTabs.map((navTab) => (
        <li
          key={navTab.name}
          onClick={() => {
            navTab.name !== "Resume" && setCurrentTab(navTab);
          }}
          className={`${currentTab.name === navTab.name && "navActive"}`}
        >
          {navTab.name === "Resume" ? (
            <a href={Resume} target="_blank" id="resumeNav">
              {navTab.name}
            </a>
          ) : (
            navTab.name
          )}
        </li>
      ))}
    </ul>
  );
}

export default NavBar;
