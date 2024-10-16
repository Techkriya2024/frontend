import React, { useEffect, useRef } from "react";
import Timer from "./Timer";
import { gsap } from "gsap";

export default function Landing() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    // Animation for the title
    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0, // Start from invisible
        scale: 1.5, // Start scaled up
        y: -50, // Start position above
        color: "white", // Start color
      },
      {
        duration: 1.5, // Duration of the fade-in and scale animation
        opacity: 1, // Fade in
        scale: 1, // Scale to normal
        y: 0, // Move to normal position
        ease: "back.out(1.7)", // Easing function for a smooth effect
        onComplete: () => {
          // Glowing effect once the title is visible
          gsap.to(titleRef.current, {
            duration: 0.5,
            color: "#d6d6d6", // Change to glowing color (gold)
            textShadow: "0 0 20px #ffffff", // Add glow effect
            yoyo: true, // Reverse the animation
            repeat: 1, // Repeat once
            ease: "power2.inOut", // Easing for the glow
            onComplete: () => {
              // Return to normal color and remove glow after the glow effect
              gsap.to(titleRef.current, {
                duration: 0.7, // Increased duration for smoother transition
                color: "white", // Return to normal color
                textShadow: "none", // Remove glow effect
                ease: "power2.out", // Smoother easing for the end transition
              });
            },
          });
        },
      }
    );

    // Animation for the subtitle
    gsap.fromTo(
      subtitleRef.current,
      {
        opacity: 0, // Start from invisible
        y: 20, // Start position below
      },
      {
        duration: 1.5, // Duration of the fade-in animation
        opacity: 1, // Fade in
        y: 0, // Move to normal position
        delay: 0.5, // Delay before starting this animation
        ease: "power2.out", // Easing function for a smooth effect
      }
    );
  }, []);

  return (
    <div className="w-full bg-[#131313] relative h-screen min-h-[25rem]  flex overflow-hidden flex-col justify-center z-0 items-center">
<div
  className="w-[30rem] h-[30rem] xl:w-[50rem]  xl:h-[50rem] absolute rounded-full shadow-2xl shadow-[#1d4143] bg-moving-gradient  -bottom-1/4 -right-1/4 "
  style={{
    // background: "radial-gradient(circle, #0e2c2d, #184C4E)",
  }}
></div>
<div
  className="w-[30rem] h-[30rem] xl:w-[50rem] xl:h-[50rem] shadow-2xl shadow-[#1d4143] bg-moving-gradient  absolute rounded-full -top-1/4 -left-1/4 "
  style={{
    // background: "radial-gradient(circle, #0e2c2d, #184C4E)",
  }}
></div>
      <p
        ref={titleRef}
        className="font-tech text-[2.75rem] sm:text-[5rem] z-30 text-center text-white"
      >
        TECHKRIYA24
      </p>
      <p
        ref={subtitleRef}
        className="font-tech text-[1.75rem] sm:text-[3rem] z-10 text-center text-white"
      >
        ECHOES BEYOND TIME
      </p>
      <div className="absolute w-full z-10 bottom-16">
        <Timer />
      </div>
    </div>
  );
}
