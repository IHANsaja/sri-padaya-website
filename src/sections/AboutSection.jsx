import React, { useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { FaLeaf } from 'react-icons/fa';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box } from '@mui/material';
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
      {/* RoboRun as background */}
      <div className="absolute top-0 left-0 w-full h-full z-[-1]">
        <RoboRun />
      </div>

      <Container maxWidth="lg">
        {/* Animated Header */}
        <motion.div
          whileHover={{ textShadow: '0px 0px 12px #39ff14' }}
          className="mb-12 text-center p-4 rounded-lg shadow-md"
        >
          <Typography 
            variant="h2" 
            component="h2" 
            className="drop-shadow-lg font-black"
          >
            ABOUT SRI PADAYA
          </Typography>

        </motion.div>

        {/* Card Grid */}
        <Grid container spacing={4}>
          {content.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <TiltCard>
                <motion.div whileHover={{ scale: 1.02 }} className="h-full">
                  <Card className="h-[400px] bg-white text-justify shadow-lg rounded-xl overflow-hidden border-2 border-green-300 transition-all duration-500 hover:border-4 hover:border-gradient hover:shadow-[0_0_40px_#39ff14]">
                    <CardMedia
                      component="img"
                      image={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    <CardContent className="p-6 flex flex-col justify-between h-[calc(100%-192px)]">
                      <Box className="flex items-center space-x-3 mb-3">
                        <FaLeaf className="text-4xl text-green-500" />
                        <Typography
                          variant="h5"
                          className="text-xl font-bold"
                          style={{
                            background: 'linear-gradient(135deg, #8B4513, #A0522D)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent',
                            fontWeight: 900
                          }}
                        >
                          {item.title}
                        </Typography>
                      </Box>
                      <Typography
                            variant="body2"
                            className="leading-relaxed text-sm"
                            style={{
                            background: 'linear-gradient(135deg, #8B4513, #A0522D)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent',
                            }}
                        >
                            {item.description}
                        </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </TiltCard>
            </Grid>
          ))}
        </Grid>
      </Container>
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
