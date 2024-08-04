import React from 'react';
import img1 from '../assets/Group 48095764.png';
import img2 from '../assets/Group 48095765.png';
import img3 from '../assets/Group 48095809.png';
import img4 from '../assets/Group 48095812.png';
import img5 from '../assets/Group 48095765.png';

const timelineData = [
  {
    title: 'Join',
    description: 'Join the incubation program to start your entrepreneurial journey.',
    imgSrc: img1,
  },
  {
    title: 'Interview by Mentors',
    description: 'Engage in one-on-one sessions with industry mentors to refine your business model.',
    imgSrc: img2,
  },
  {
    title: 'Evaluation Process',
    description: 'Receive feedback and guidance during the evaluation of your business idea.',
    imgSrc: img3,
  },
  {
    title: 'Finalizing',
    description: 'Finalize your business plan and prepare for presentation.',
    imgSrc: img4,
  },
  {
    title: 'Selection',
    description: 'Selected startups receive incubation support based on potential and feasibility.',
    imgSrc: img5,
  },
];

const Lines = () => {
  return (
    <div className="relative py-20">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full"></div>
      {timelineData.map((item, index) => (
        <div
          key={index}
          className={`flex items-center w-full my-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
        >
          <div className={`w-1/2 p-4 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
            <div className="bg-white shadow-md rounded-lg p-6 relative">
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
              <div className="absolute top-1/2 transform -translate-y-1/2 w-16 h-16 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center">
                <img src={item.imgSrc} alt={item.title} className="w-12 h-12" />
              </div>
            </div>
          </div>
          <div
            className={`absolute w-0 h-0 border-t-8 border-b-8 ${index % 2 === 0 ? 'border-r-8 border-transparent left-1/2 -ml-2' : 'border-l-8 border-transparent right-1/2 -mr-2'}`}
            style={{ borderColor: 'transparent transparent transparent white' }}
          ></div>
          {index < timelineData.length - 1 && (
            <div
              className={`absolute h-8 ${index % 2 === 0 ? 'left-1/2 ml-2' : 'right-1/2 mr-2'} top-full transform -translate-y-1/2`}
            >
              <svg
                className="h-full w-8 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="M4 12l1.5 1.5 3-3L10.5 15l6-6" />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Lines;
