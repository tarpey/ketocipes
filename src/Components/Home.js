import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <>
      <section>
        <h2>Hello</h2>
        <p>
          I'm a UX Designer who likes to build clean user interfaces and
          positive customer experiences. I’m currently a Senior Content and UX
          Designer at Bristol City Council.
        </p>
        <p></p>
      </section>
      <section>
        <h2>Work</h2>
        <div className="grid">
          <div className="grid-item">
            <h3>Teamsheet</h3>
            <p>
              Organise football matches with friends. Built with React Native.
            </p>
            <p>
              <a href="https://teamsheet.app">https://teamsheet.app</a>
            </p>
          </div>
          <div className="grid-item">
            <h3>RocketRacer</h3>
            <p>
              Race rockets in realtime with friends. Built with React and
              Firebase.
            </p>
            <p>
              <a href="https://rocketracer.app">https://rocketracer.app</a>
            </p>
          </div>
          <div className="grid-item">
            <h3>Avon Tennis</h3>
            <p>Official Avon Tennis website. Built with WordPress.</p>
            <p>
              <a href="https://avontennis.org.uk">https://avontennis.org.uk</a>
            </p>
          </div>
          <div className="grid-item">
            <h3>Personal Website</h3>
            <p>The website you're looking at. Built with React and Firebase.</p>
            <p>
              <a href="https://jamestarpey.com">https://jamestarpey.com</a>
            </p>
          </div>
        </div>
      </section>
      <section>
        <h2>Contact</h2>
        <p>
          <a href="mailto:hello@jamestarpey.com">hello@jamestarpey.com</a>
        </p>
      </section>
    </>
  );
};
