import React, { useState } from 'react';
import Road1 from '../assets/road1.jpg'
import Road2 from '../assets/road2.jpg'
import Road3 from '../assets/road3.jpg'
import Road4 from '../assets/road4.jpg'
import Road5 from '../assets/road5.jpg'
import Road6 from '../assets/road6.jpg'
import Roadback1 from '../assets/roadback.png';

const paths = [
  {
    name: 'Hatton–Nallathanni Trail',
    description:
      'The most popular trail, historically known as “Raja Mawatha.” Many kings used this route to reach the summit. It is well-maintained with rest stops and small boutiques every few hundred steps during the season.',
    upsides: ['Shorter distance', 'Well-maintained path', 'Facilities along the way'],
    challenges: ['Steep ascent', 'Can be crowded during peak season'],
    elevationGain: '1000m (1250m - 2250m)',
    totalLength: '5km',
    approximateTime: '5 – 7 hours',
    image: Road1,
  },
  {
    name: 'Ratnapura–Palabaddala Trail',
    description:
      'The oldest and most difficult trail, known for its leech-infested terrain and fewer travelers. Features landmarks like Seetha Gangula, Lihini Hela, and Indikatupana.',
    upsides: ['Rich biodiversity', 'Less crowded', 'Historical landmarks'],
    challenges: ['Longer duration', 'Limited facilities', 'Steep and difficult terrain'],
    elevationGain: '2000m (250m - 2250m)',
    totalLength: '8.5km',
    approximateTime: '8 – 12 hours',
    image: Road2,
  },
  {
    name: 'Kuruwita–Erathna Trail',
    description:
      'The third most popular route, offering a challenging journey through rough terrain with boulders. Passes notable sites like Warnagala Rock and Warnagala Waterfall.',
    upsides: ['Unique forest trail', 'Serene environment'],
    challenges: ['Long duration', 'Limited facilities', 'Less maintained'],
    elevationGain: '1850m (400m - 2250m)',
    totalLength: '12km',
    approximateTime: '8 – 12 hours',
    image: Road3,
  },
  {
    name: 'Deraniyagala–Udamaliboda Trail',
    description:
      'The most remote and least traveled route, passing through the dense Peak Wilderness Sanctuary. Involves multiple stream crossings with flash flood risks.',
    upsides: ['Pristine nature', 'High adventure'],
    challenges: ['Rough terrain', 'No facilities', 'Flash flood risk'],
    elevationGain: '1700m (555m - 2250m)',
    totalLength: '12km',
    approximateTime: '8 – 12 hours',
    image: Road4,
  },
  {
    name: 'Rajamale–Murraywatta Trail',
    description:
      'The shortest and lowest-altitude route. The journey starts from Rajamale and passes through a scenic forest path with a large plateau called Sandagalathenna.',
    upsides: ['Shortest route', 'Scenic plateau', 'Easiest hike'],
    challenges: ['Limited water sources', 'Minimal facilities'],
    elevationGain: '640m (1610m - 2250m)',
    totalLength: '5km',
    approximateTime: '2 hours',
    image: Road5,
  },
  {
    name: 'Dehenakanda–Mukkuwaththa Trail',
    description:
      'A rarely used but shaded trail with multiple water streams. Passes landmarks like Wellakkara Cave, Bena Samanala Valley, and Seetha Gangula.',
    upsides: ['Shade and water sources', 'Unique viewpoints'],
    challenges: ['Difficult terrain', 'Rarely used', 'Challenging ascent'],
    elevationGain: '1475m (775m - 2250m)',
    totalLength: '15km',
    approximateTime: '8 – 12 hours',
    image: Road6,
  },
];

const RoadsSection = () => {
  const [activePath, setActivePath] = useState(0);

  return (
    <div className="w-full min-h-screen relative bg-gray-900 py-10 flex items-center justify-center">
      <img src={Roadback1} alt="hiking background" className='absolute bottom-0 right-0 h-auto' />
      <div className="max-w-6xl w-full bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20">
        {/* Header */}
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold text-white">Routes to Sri Padaya</h2>
          <p className="text-gray-200 mt-2">
            Select a route to explore its features, challenges, and a brief overview.
          </p>
        </div>
        {/* Tab Menu */}
        <div className="flex flex-wrap justify-center mb-6 space-x-0 md:space-x-4">
          {paths.map((path, index) => (
            <button
              key={index}
              onClick={() => setActivePath(index)}
              className={`relative px-5 py-3 m-2 text-sm font-medium rounded-lg group transition-all duration-300 ease-in-out ${
                activePath === index
                  ? 'bg-gradient-to-r from-[#50A246] to-[#7AB53E] shadow-lg text-gray-100'
                  : 'bg-gray-200 text-gray-700'
              } hover:bg-white hover:shadow-lg hover:text-gray-100`}
            >
              <span
                className="absolute inset-0 w-full h-full transition-transform transform scale-100 bg-gradient-to-r from-[#50A246] to-[#7AB53E] rounded-lg opacity-0 group-hover:opacity-100 group-hover:scale-105"
                aria-hidden="true"
              ></span>
              <span className="relative z-10">{path.name}</span>
            </button>
          ))}
        </div>
        {/* Details */}
        <div className="p-4 bg-gray-800 rounded-xl transition-opacity duration-500">
          {/* Image & Description */}
          <div className="flex flex-col md:flex-row items-center">
            <img
              src={paths[activePath].image}
              alt={paths[activePath].name}
              className="w-full md:w-1/2 h-auto object-cover rounded-lg md:mb-0 md:mr-4"
            />
            <div className="text-gray-100 w-full md:w-1/2">
              <h3 className="text-2xl uppercase font-black text-gray-200 mb-4">
                {paths[activePath].name}
              </h3>
              <p className="mb-4">{paths[activePath].description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Upsides */}
                <div>
                  <h4 className="text-xl font-semibold text-green-400 mb-2">Upsides</h4>
                  <ul className="list-disc list-inside text-gray-300">
                    {paths[activePath].upsides.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                {/* Challenges */}
                <div>
                  <h4 className="text-xl font-semibold text-red-400 mb-2">Challenges</h4>
                  <ul className="list-disc list-inside text-gray-300">
                    {paths[activePath].challenges.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-300"><strong>Elevation Gain:</strong> {paths[activePath].elevationGain}</p>
                <p className="text-gray-300"><strong>Total Length:</strong> {paths[activePath].totalLength}</p>
                <p className="text-gray-300"><strong>Approximate Time:</strong> {paths[activePath].approximateTime}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadsSection;
