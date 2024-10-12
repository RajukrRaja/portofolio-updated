import React from 'react';
import Particles from 'react-tsparticles';

function Partical() {
  const particlesInit = (main) => {
    // You can customize particles or load plugins here
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#ffffff" // Change background color if needed
          }
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 80, // Number of particles
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#000000" // Particle color
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5
          },
          size: {
            value: 3,
            random: true
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#000000",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 3
          }
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse"
            },
            onClick: {
              enable: true,
              mode: "push"
            }
          },
          modes: {
            repulse: {
              distance: 100
            }
          }
        }
      }}
    />
  );
}

export default Partical;
