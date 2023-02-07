import React, { useState } from "react";

function Work() {
  const [works] = useState([
    {
      name: "ARIJ",
      description: "A task/ticket managment website",
      github: "https://github.com/Jstelzl/arij",
      live: "https://pacific-cliffs-88620.herokuapp.com/",
      picture: require(`../../assets/images/Arij-logo.png`),
    },
    {
      name: "POKENECT",
      description: "A social media website for fans of Pokemon to connect",
      github: "https://github.com/PDismore/PokeNect",
      live: "https://glacial-savannah-42207.herokuapp.com/",
      picture: require(`../../assets/images/PokeNect2.png`),
    },
    {
      name: "LAUNCH",
      description:
        "Fun app that shows which SpaceX rocket you'll take to Mars and how many asteroids you'll encounter",
      github: "https://github.com/richielollis/launch",
      live: "https://richielollis.github.io/launch/",
      picture: require(`../../assets/images/Launch.jpg`),
    },
    {
      name: "JATE",
      description: "PWA text editor",
      github: "https://github.com/richielollis/just-another-text-editor",
      live: "https://limitless-earth-25385.herokuapp.com/",
      picture: require(`../../assets/images/JATE.png`),
    },
  ]);
  return (
    <div id="projectDiv">
      {works.map((work) => (
        <div className="project">
          <div className="projectText">
            <a href={work.live} target="_blank" rel="noreferrer">
              <h2>{work.name}</h2>
            </a>
            <p id="projectDescription">
              {work.description} <br></br>
              <br></br>
              <a id="githubLink" href={work.github} target="_blank">
                | GitHub |
              </a>
            </p>
          </div>
          <a
            className="projectImg"
            href={work.live}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={work.picture}
              alt="preview of project"
              className="projectImg2"
            ></img>
          </a>
        </div>
      ))}
    </div>
  );
}

export default Work;
