import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const CustomCursorTrail = () => {
  useEffect(() => {
    gsap.defaults({ ease: 'none' });

    const svgns = "http://www.w3.org/2000/svg";
    const root = document.querySelector("#cursor-svg");
    const ease = 0.75;

    const pointer = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    window.addEventListener("mousemove", function (event) {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    });

    let leader = pointer;
    const total = 100;

    for (let i = 0; i < total; i++) {
      leader = createLine(leader, i);
    }

    function createLine(leader, i) {
      const line = document.createElementNS(svgns, "line");
      root.appendChild(line);

      gsap.set(line, {
        x: -15,
        y: -15,
        opacity: (total - i) / total,
        stroke: "#ffffff",
        strokeWidth: 5,
      });

      gsap.to(line, {
        duration: 1000,
        x: "+=1",
        y: "+=1",
        repeat: -1,
        modifiers: {
          x: function () {
            let posX = gsap.getProperty(line, "x");
            let leaderX = gsap.getProperty(leader, "x");

            const x = posX + (leaderX - posX) * ease;
            line.setAttribute("x2", leaderX - x);
            return x;
          },
          y: function () {
            let posY = gsap.getProperty(line, "y");
            let leaderY = gsap.getProperty(leader, "y");

            const y = posY + (leaderY - posY) * ease;
            line.setAttribute("y2", leaderY - y);
            return y;
          },
        },
      });

      return line;
    }

    return () => {
      gsap.killTweensOf("*");
      if (root) root.innerHTML = '';
    };
  }, []);

  return (
    <svg
      id="cursor-svg"
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
    ></svg>
  );
};

export default CustomCursorTrail;
