import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Work from "./components/Work";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

function App() {
  const [navTabs] = useState([
    { name: "Home" },
    { name: "About" },
    { name: "Work" },
    { name: "Resume" },
    { name: "Contact" },
  ]);

  const [currentTab, setCurrentTab] = useState(navTabs[0]);

  return (
    <div>
      <Header
        navTabs={navTabs}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      ></Header>
      <main>
        {currentTab === navTabs[0] && <Home></Home>}
        {currentTab === navTabs[1] && <AboutMe></AboutMe>}
        {currentTab === navTabs[2] && <Work></Work>}
        {currentTab === navTabs[4] && <ContactMe></ContactMe>}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
