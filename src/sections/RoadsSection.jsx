import React, { useState } from 'react';

const paths = [
  {
    name: 'Hatton–Nallathanni Route',
    description:
      'The most popular and well-maintained path, it is shorter but steeper, taking about 3-5 hours to climb. For most travelers, the Hatton route is ideal due to its accessibility and facilities along the way.',
    upsides: ['Shorter distance', 'Well-maintained path', 'Facilities along the way'],
    challenges: ['Steep ascent', 'Can be crowded during peak season'],
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Ratnapura–Palabaddala Route',
    description:
      'A longer but less steep path, suitable for those who prefer a more gradual ascent, taking about 8-12 hours. This trail offers a more secluded experience with rich biodiversity.',
    upsides: ['Gradual ascent', 'Rich biodiversity', 'Less crowded'],
    challenges: ['Longer duration', 'Limited facilities'],
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Kuruwita–Erathna Route',
    description:
      'A less commonly used trail that offers a unique experience through dense forests. It is moderately challenging and takes about 10-14 hours to complete.',
    upsides: ['Unique forest trail', 'Serene environment'],
    challenges: ['Long duration', 'Limited facilities', 'Less maintained'],
    image: 'https://via.placeholder.com/150',
  },
];

const RoadsSection = () => {
  const [activePath, setActivePath] = useState(0);

  return (
    <div className="w-full min-h-screen bg-[#1e1e1e] py-12 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-gradient-to-r from-[#50A246] to-[#7AB53E] bg-opacity-90 backdrop-blur-lg rounded-2xl p-6 shadow-lg">
        {/* Header */}
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold text-white">Routes to Adam's Peak (Sri Pada)</h2>
          <p className="text-gray-200 mt-2">
            Select a route to explore its features, challenges, and a brief overview.
          </p>
        </div>
        {/* Tab Menu */}
        <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4 mb-6">
          {paths.map((path, index) => (
            <button
              key={index}
              onClick={() => setActivePath(index)}
              className={`px-4 py-2 rounded-full border transition-colors 
                ${
                  activePath === index
                    ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white border-transparent'
                    : 'bg-gray-200 text-gray-700 border-gray-300'
                }`}
            >
              {path.name}
            </button>
          ))}
        </div>
        {/* Details */}
        <div className="p-4 bg-[#2d312c] rounded-xl transition-opacity duration-500">
          <h3 className="text-2xl font-bold text-gray-200 mb-4">
            {paths[activePath].name}
          </h3>
          {/* Image & Description */}
          <div className="flex flex-col md:flex-row items-center mb-4">
            <img
              src={paths[activePath].image}
              alt={paths[activePath].name}
              className="w-40 h-40 object-cover rounded-lg mb-4 md:mb-0 md:mr-4"
            />
            <p className="text-gray-100">{paths[activePath].description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Upsides */}
            <div>
              <h4 className="text-xl font-semibold text-green-600 mb-2">Upsides</h4>
              <ul className="list-disc list-inside text-gray-700">
                {paths[activePath].challenges.map((item, idx) => (
                    <span
                        key={idx}
                        className="bg-green-200/50 border-1 border-green-600 inset-shadow-lg inset-shadow-green-400/50 text-[#00ff00] text-xs px-3 py-1 mr-2 mb-2 rounded-full"
                    >
                        {item}
                    </span>
                ))}
              </ul>
            </div>
            {/* Challenges */}
            <div>
              <h4 className="text-xl font-semibold text-red-600 mb-2">Challenges</h4>
              <ul className="list-disc list-inside text-gray-700">
                {paths[activePath].challenges.map((item, idx) => (
                    <span
                        key={idx}
                        className="bg-red-200 text-red-800 text-xs px-3 py-1 mr-2 mb-2 rounded-full"
                    >
                        {item}
                    </span>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadsSection;
