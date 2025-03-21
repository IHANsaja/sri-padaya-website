import React, { useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { FaLeaf } from 'react-icons/fa';
import naturalWonderImg from '../assets/example.jpg';
import heritageValueImg from '../assets/example.jpg';
import communityTraditionImg from '../assets/example.jpg';
import RoboRun from './RobotRun';

// TiltCard Component: Tilts the card based on mouse position
const TiltCard = ({ children }) => {
  const cardRef = useRef(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Calculate tilt angles based on cursor position
    const tiltX = ((y - centerY) / rect.height) * 20;
    const tiltY = -((x - centerX) / rect.width) * 20;
    rotateX.set(tiltX);
    rotateY.set(tiltY);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000, rotateX, rotateY }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
};

const AboutSection = () => {
  return (
    <div className="relative text-white p-8 md:p-16">
      {/* Background component */}
      <div className="absolute top-0 left-0 w-full h-full z-[-1]">
        <RoboRun />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          whileHover={{ textShadow: '0px 0px 12px #39ff14' }}
          className="mb-12 text-center p-4 rounded-lg shadow-md"
        >
          <h2 className="text-4xl font-bold drop-shadow-lg">
            ABOUT SRI PADAYA
          </h2>
        </motion.div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-5">
          {content.map((item, index) => (
            <TiltCard key={index}>
              <motion.div whileHover={{ scale: 1.02 }} className="h-full">
                <div className="bg-[#1E1E1E] h-full p-4 rounded-xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-md"
                  />
                  {/* Use calc() to subtract the image height (12rem / h-48) from the full height */}
                  <div className="flex flex-col justify-between h-[calc(100%-15rem)] pt-4 p-5">
                    <div className="flex items-center space-x-3 mt-3">
                      <FaLeaf className="text-4xl text-green-500" />
                      <h5 className="text-xl font-bold text-white">
                        {item.title}
                      </h5>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed text-justify mt-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </div>
    </div>
  );
};

const content = [
  {
    title: 'Natural Wonder',
    description:
      "Sri Padaya's natural beauty is unparalleled. The diverse ecosystem surrounding the mountain, including lush rainforests and cascading waterfalls, adds to its allure.",
    image: naturalWonderImg,
  },
  {
    title: 'Heritage Value',
    description:
      "For Sri Lankans, Sri Padaya is more than just a mountain; it's a symbol of unity and spiritual devotion. The annual pilgrimage is a testament to the country's rich cultural heritage and religious harmony.",
    image: heritageValueImg,
  },
  {
    title: 'Community and Tradition',
    description:
      "The traditions and stories passed down through generations make the Sri Padaya experience a unique cultural phenomenon. The mountain is a gathering place, where people of all walks of life come together in a shared spiritual journey.",
    image: communityTraditionImg,
  },
];

export default AboutSection;
