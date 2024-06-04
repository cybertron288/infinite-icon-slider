import React from "react";
import { motion } from "framer-motion";

/**
 * Slider component for displaying a continuous scrolling list of icons.
 *
 * @param {Object} props - Component properties.
 * @param {Array} props.icons - Array of icon components to display in the slider.
 * @param {number} [props.size=50] - Size of the icons in pixels.
 * @param {number} [props.speed=15000] - Speed of the slider in milliseconds.
 * @param {boolean} [props.loop=true] - Whether the slider should loop continuously.
 */
const Slider = ({ icons, size = 50, speed = 15000, loop = true, styles = {width: "50%"} }) => {
  // Duplicate the icon list for continuous animation
  const duplicatedSlides = [...icons, ...icons];

  return (
    <div
      className="relative h-full overflow-hidden py-12 bg-white mx-auto"
      style={{ width: `${styles.width}` }}
    >
      <div className="absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-1/4 before:h-full before:bg-gradient-to-r before:from-white before:to-transparent before:filter before:blur-3 after:absolute after:right-0 after:top-0 after:w-1/2 after:h-full after:bg-gradient-to-l after:from-white after:to-transparent after:filter after:blur-3"></div>

      <motion.div
        className="flex"
        animate={{
          x: ["0%", "-100%"],
          transition: {
            ease: "linear",
            duration: speed / 1000, // Convert speed to seconds
            repeat: loop ? Infinity : 0,
          },
        }}
      >
        {duplicatedSlides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ width: `${100 / icons.length}%` }}
          >
            <div
              className="flex items-center justify-center h-full"
              style={{ width: size, height: size }}
            >
              {slide.icon}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Slider;
