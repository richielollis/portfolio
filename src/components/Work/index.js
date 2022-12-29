import React, { useState } from "react";

function Work() {
  const [works] = useState([
    {
      name: "ARIJ",
      description: "A task/ticket managment website",
      live: "https://pacific-cliffs-88620.herokuapp.com/",
      picture: require(`../../assets/images/Arij-logo.png`),
    },
    {
      name: "PokeNect",
      description: "A social media website for fans of Pokemon to connect",
      live: "https://dry-wildwood-44635.herokuapp.com/",
      picture: require(`../../assets/images/pokenect.png`),
    },
    {
      name: "LAUNCH",
      description:
        "Fun app that shows what SpaceX rocket you'll take to Mars and how many asteroids you'll encounter",
      live: "https://richielollis.github.io/launch/",
      picture: require(`../../assets/images/Launch Logo Portfolio.jpeg`),
    },
    {
      name: "JATE",
      description: "PWA text editor",
      live: "https://limitless-earth-25385.herokuapp.com/",
      picture: require(`../../assets/images/JATE screenshot.png`),
    },
    {
      name: "Horiseon",
      description: "Simple website using html and css",
      live: "https://richielollis.github.io/challenge01-horiseon/",
      picture: require(`../../assets/images/horiseon.png`),
    },
    {
      name: "Run Buddy",
      description: "Simple website using html and css",
      live: "https://richielollis.github.io/run-buddy/",
      picture: require(`../../assets/images/run-buddy.png`),
    },
  ]);
  return (
    <div>
      {works.map((work) => (
        <div className="project">
          <div className="projectText">
            <a href={work.live} target="_blank" rel="noreferrer">
              <h2>{work.name}</h2>
            </a>
            <p>{work.description}</p>
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
