// App.js
import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const App = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#ffffff",
            },
          },
          particles: {
            number: {
              value: 50,
            },
            color: {
              value: "#000000",
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.5,
            },
            size: {
              value: 3,
            },
            move: {
              enable: true,
              speed: 1,
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
      <h1 style={{ position: "absolute", top: "50px", left: "50px" }}>
        My Portfolio
      </h1>
    </div>
  );
};

export default App;
