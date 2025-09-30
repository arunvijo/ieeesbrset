import React from 'react';
import { useNavigate } from 'react-router-dom';

// --- CRITICAL PERFORMANCE WARNING ---
// Your images are large. Remember to compress and resize them for a faster website.

const societyNames = {
  SB: "Student Branch", //
  CS: "Computer Society", //
  IAS: "Industry Applications Society", //
  PES: "Power & Energy Society", //
  RAS: "Robotics & Automation Society", //
  SPS: "Signal Processing Society", //
  WIE: "Women in Engineering Affinity Group", //
};

const societies = {
  SB: [
    { name: "Rinza Yunus", position: "IEEE Student Branch Chair", img: "Rinza Yunus.JPG", link: 'rinza' }, //
    { name: "Alias Eldo", position: "IEEE Student Branch Vice Chair", img: "AliasEldo.jpg", link: 'alias' }, //
    { name: "Amelin Alexander Rathappillil", position: "IEEE Student Branch Secretary", img: "amelin alexander.jpg", link: 'amelin' }, //
    { name: "Athira Ajay", position: "Treasurer", img: "athira ajay.jpg", link: 'athira' }, //
    { name: "Jala Vishwa Keerthi", position: "Technical Coordinator", img: "jala vishwa keerthi.png", link: 'jala' }, //
    { name: "Adriel Bobby", position: "Electronic Communications Coordinator", img: "Adriel Bobby.jpg", link: 'adriel' }, //
    { name: "Sangeeth M S", position: "Membership Development Coordinator", img: "Sangeeth m s.jpg", link: 'sangeeth' }, //
    { name: "Behanan K Bahanan", position: "Membership Development Coordinator", img: "behanan k bahanan.jpg", link: 'behanan' }, //
    { name: "Krishnapriya M", position: "Membership Development Coordinator", img: "krishnapriya m.jpg", link: 'krishnapriya' }, //
    { name: "Noahan Zachariah Pradeep", position: "Membership Development Coordinator", img: "Noahan zacharia.png", link: 'noahan' }, //
    { name: "Arun Vijo Tharakan", position: "Webmaster", img: "arun vijo.jpeg", link: 'arun' }, //
    { name: "Aparna Mahesh", position: "Webmaster", img: "aparna mahesh.jpg", link: 'aparna' }, //
    { name: "Ryyan Safar", position: "LINK Representative", img: "Ryyan Safar.png", link: 'ryyan' }, //
    { name: "Abhinav s", position: "Design Lead", img: "Sabharish P V.jpg", link: 'abhinav' }, //
    { name: "Sabharish PV", position: "Design Lead", img: "Sabharish P V.jpg", link: 'sabharish' }, //
    { name: "Devamanas S", position: "Media Lead", img: "Devamanas S.JPG", link: 'devamanas' }, //
    { name: "Abhishek lype", position: "Utility Lead", img: "Abhishek lype.jpg", link: 'abhishek' }, //
  ],
  CS: [
    { name: "Navaneeth K.B", position: "Chair", img: "Navaneeth K.B.jpg", link: 'navaneeth' }, //
    { name: "Richard Sabu", position: "Vice Chair", img: "Richard 1.jpg", link: 'richard' }, //
    { name: "Nihala Nizamudeen", position: "Secretary", img: "NIHALA NIZAMUDEEN .HEIC", link: 'nihala' }, //
    { name: "Punya D", position: "Treasurer", img: "Punya D.JPG", link: 'punya' }, //
  ],
  IAS: [
    { name: "Namitha Mariam John", position: "Chair", img: "Namitha Mariam John.jpeg", link: 'namitha' }, //
    { name: "Darsan Dileep", position: "Vice Chair", img: "Darsan Dileep.JPG", link: 'darsan' }, //
    { name: "Shreya M", position: "Secretary", img: "Shreya M.JPG", link: 'shreya' }, //
    { name: "Nia Jobby", position: "Treasurer", img: "Nia Jobby .jpg", link: 'nia' }, //
  ],
  PES: [
    { name: "Diya Sarah", position: "Chair", img: "Diya Sarah.jpg", link: 'diya' }, //
    { name: "Ashish John Binu", position: "Vice Chair", img: "Ashish John Binu.jpg", link: 'ashish' }, //
    { name: "Neha Biju", position: "Secretary", img: "Neha Biju.JPEG", link: 'neha' }, //
    { name: "Joel John Thumpayil", position: "Treasurer", img: "Joel John Thumpayil.jpg", link: 'joel' }, //
  ],
  RAS: [
    { name: "Abner Sebastian Lopez", position: "Chair", img: "Abner Sebastian Lopez.jpg", link: 'abner' }, //
    { name: "Akul Prasanth", position: "Vice Chair", img: "Akul Prasanth .jpg", link: 'akul' }, //
    { name: "Adheetha krishnaja", position: "Secretary", img: "Adheetha krishnaja .jpg", link: 'adheetha' }, //
    { name: "Milee B Kokkatt", position: "Treasurer", img: "MILEE B KOKKATT.png", link: 'milee' }, //
  ],
  SPS: [
    { name: "Jeremy Simon Moncey", position: "Chair", img: "Rinza Yunus.JPG", link: 'jeremy' }, //
    { name: "Jenet Joseph", position: "Vice Chair", img: "Rinza Yunus.JPG", link: 'jenet' }, //
    { name: "Keerthana S", position: "Secretary", img: "Rinza Yunus.JPG", link: 'keerthana' }, //
    { name: "Pooja S Nair", position: "Treasurer", img: "Rinza Yunus.JPG", link: 'pooja' }, //
  ],
  WIE: [
    { name: "Sreepriya S", position: "Chair", img: "Sreepriya.jpg", link: 'sreepriya' }, //
    { name: "Anagha N Nath", position: "Vice Chair", img: "Anagha N Nath.jpg", link: 'anagha' }, //
    { name: "Neha R Jacob", position: "Secretary", img: "Neha R Jacob.jpg", link: 'nehar' }, //
    { name: "Ananya Merlyn George", position: "Treasurer", img: "Ananya Merlyn George .jpg", link: 'ananya' }, //
  ]
};

const Execom = () => {
  const navigate = useNavigate();

  // UPDATED: Function now uses the member's unique link
  const handleRedirect = (linkId) => {
    if (linkId) {
      const profileLink = `/profile/${linkId}`;
      navigate(profileLink);
    }
  };

  return (
    <div className='w-full min-h-screen bg-gray-50 text-gray-900'>
      <div className='relative w-full h-[350px] overflow-hidden mb-12'>
        <img
          src="/banner2.JPG"
          alt="Events Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h2 className="text-white text-5xl font-extrabold drop-shadow-lg">
            Meet <span className="text-blue-400">Our Execom</span>
          </h2>
        </div>
      </div>

      {Object.entries(societies).map(([societyKey, members]) => (
        <div key={societyKey} className='mb-16'>
          <div className="flex justify-center items-center mb-6">
            <h3 className='text-2xl font-semibold border-b-4 border-blue-600 inline-block text-blue-900'>
              {societyNames[societyKey] || societyKey} Executive Committee
            </h3>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 px-4 lg:px-8'>
            {members.map((member, index) => (
              <div
                key={index}
                className='relative group rounded-xl shadow-lg bg-white cursor-pointer transition-transform transform duration-300 hover:scale-105 hover:shadow-2xl'
                // UPDATED: onClick now passes the member's unique link
                onClick={() => handleRedirect(member.link)}
              >
                <img
                  loading="lazy"
                  width="300"
                  height="300"
                  src={`/Execom25/${member.img}`}
                  alt={member.name}
                  className='w-full h-[300px] object-cover rounded-t-xl group-hover:brightness-75 transition-all duration-300'
                />
                <div className='absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent text-white text-center p-4'>
                  <p className='text-lg font-semibold opacity-100 group-hover:opacity-0 transition-opacity duration-300'>
                    {member.name}
                  </p>
                  <p className='text-sm opacity-100 group-hover:opacity-0 transition-opacity duration-300'>{member.position}</p>
                </div>
                <div className="absolute bottom-0 w-full text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-xl font-semibold text-white animate-text"> {member.name} </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Execom;