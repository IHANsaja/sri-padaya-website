import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls, ContactShadows } from '@react-three/drei';
import PhoneModel from '../components/PhoneModel';
import CanvasLoader from '../components/CanvasLoader';

const ContactForm = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-[#052700] to-[#7AB53E] px-8">
      {/* Contact Form */}
      <div className="w-full md:w-1/2 p-4">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl">
          <h2 className="text-3xl font-bold text-white text-center mb-6">Contact Us</h2>
          <form className="space-y-4">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-gray-200 mb-1">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 bg-[#052700] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-gray-200 mb-1">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 bg-[#052700] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-gray-200 mb-1">Message</label>
              <textarea
                id="message"
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-2 bg-[#052700] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 bg-gradient-to-r from-[#50A246] to-[#7AB53E] text-white font-semibold rounded-md shadow-md transition-transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      
      {/* 3D Phone Model */}
      <div className="w-full h-screen md:w-1/2 p-4">
        <div className="relative w-full h-full">
          {/* Canvas now takes the full height of the div */}
          <Canvas className="absolute w-full h-full" shadows>
            <Suspense fallback={<CanvasLoader />} >
              <PerspectiveCamera makeDefault position={[0, 0, 20]} />
              <OrbitControls enableZoom={false} enableRotate={true} />
              <ambientLight intensity={1} />
              <directionalLight
                position={[5, 10, 5]}
                intensity={1.5}
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
                shadow-camera-far={50}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
              />
              {/* Ensure PhoneModel returns valid 3D objects */}
              <PhoneModel
                scale={30}
                rotation={[0, Math.PI, 0]}
                position={[0, -3, 0]}
              />
              <ContactShadows
                position={[0, -4.5, 0]}
                opacity={0.5}
                scale={40}
                blur={2}
                far={10}
              />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
