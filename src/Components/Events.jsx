import React, { useState } from 'react';
import imageone from '../assets/image 79.png';
import imagetwo from '../assets/image 79 (1).png';

export default function Events() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const events = [
    { date: 'Sun, Sep 13', title: 'Leadership Skills for Tech Professionals' },
    { date: 'Mon, Sep 14', title: 'Advanced JavaScript Workshop' },
    { date: 'Tue, Sep 15', title: 'React Development Best Practices' },
  ];

  return (
    <div className='w-[1440px] h-[1115px]'>
      <div className="heading mt-[105px] flex justify-center align-middle text-center">
        <h1 className='text-[#022956] w-[612px] h-[48px] text-[40px] font-black font-sans font-lato'>Upcoming Events</h1>
      </div>
      <div className="elements mt-[72px] flex flex-row justify-center align-middle">
        <div className='flex flex-col justify-center align-middle'>
          {events.map((event, index) => (
            <div 
              key={index} 
              className='flex flex-row justify-start items-center mb-6'
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >  
              <div className={`content w-[606px] h-[60px] ml-[106px] ${hoveredIndex === index ? 'text-orange-500' : 'text-[#1D2228]'}`}>
                <p className={`text-[16px] font-light font-sans font-lato ${hoveredIndex === index ? 'text-orange-500' : 'text-[#1D2228]'}`}>{event.date}</p>
                <h3 className={`text-[18px] font-medium font-lato ${hoveredIndex === index ? 'text-orange-500' : 'text-[#1D2228]'}`}>{event.title}</h3>
              </div>
              <div className="button w-[194px] h-[42px] bg-[#022956] flex justify-center items-center ml-4">
                <button className='text-[#FFFFFF] text-[16px] font-semibold font-sans font-lato py-2'>Register Now</button>
              </div>
            </div>
          ))}
        </div>
        <div className="rightsidecontent ml-10">
          <img 
            src={hoveredIndex === null ? imageone : imagetwo} 
            alt="rightsideimage" 
            className='w-[376px] h-[326px]' 
          />
        </div>
      </div>
    </div>
  );
}
