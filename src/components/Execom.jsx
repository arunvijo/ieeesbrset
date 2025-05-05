import React from 'react';

const societies = {
  "SB": [
    { name: "Rinza Yunus", position: "Chair", img: "Rinza Yunus.jpg.JPG" },
    { name: "Alias Eldho", position: "Vice Chair", img: "AliasEldo.jpg" },
    { name: "Arun Vijo Tharakan", position: "Webmaster", img: "arun vijo.jpeg" },
    // Add more members
  ],
  "CS Society": [
    { name: "Navaneeth K B", position: "Chair", img: "Navaneeth K.B.jpg" },
    { name: "Richard K Sabu", position: "Vice Chair", img: "Richard 1.jpg" },
    // ...
  ],
  "IAS": [
    { name: "Diya Sarah", position: "Chair", img: "Diya Sarah.jpg" },
    { name: "Ashish John Binu", position: "Vice Chair", img: "Ashish John Binu.jpg" },
    // ...
  ],
  "SPS": [
    { name: "Jeremy Simon Moncey", position: "Chair", img: "sameer.jpg" },
    // ...
  ],
  "WIE": [
    { name: "Sreepriya", position: "Chair", img: "Sreepriya.jpg" },
    // ...
  ],
  "RAS": [
    { name: "Abner Sebastian", position: "Chair", img: "Abner Sebastian Lopez .jpg" },
    // ...
  ],
};

const Execom = () => {
  return (
    <div className='container mx-auto px-6 md:px-16 lg:px-24 py-16' id='Execom'>
      <h2 className='text-4xl font-bold text-center mb-10'>Meet Our <span className='text-blue-600'>Execom</span></h2>

      {Object.entries(societies).map(([society, members]) => (
        <div key={society} className='mb-12'>
          <h3 className='text-2xl font-semibold mb-6 border-b-2 border-blue-600 inline-block'>
            {society}
          </h3>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
            {members.map((member, index) => (
              <div key={index} className='text-center'>
                <img
                  src={`/Execom25/${member.img}`}
                  alt={member.name}
                  className='rounded-lg shadow-md w-full object-cover h-56'
                />
                <p className='mt-2 font-medium'>{member.name}</p>
                <p className='text-sm text-gray-500'>{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Execom;
