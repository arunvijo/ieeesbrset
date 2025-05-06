import React from 'react';
import { useNavigate } from 'react-router-dom';

const societies = {
  SB: [
    { name: "Rinza Yunus", position: "Chair", img: "Rinza Yunus.jpg.JPG", link: "/profile/rinza" },
    { name: "Alias Eldho", position: "Vice Chair", img: "AliasEldo.jpg", link: "/profile/alias" },
    { name: "Arun Vijo Tharakan", position: "Webmaster", img: "arun vijo.jpeg", link: "/profile/arun" },
    { name: "Adriel Bobby", position: "Member", img: "Adriel Bobby.jpg", link: "/profile/adriel" },
    { name: "Amelin Alexander", position: "Member", img: "amelin alexander.jpg", link: "/profile/amelin" },
    { name: "Anagha N Nath", position: "Member", img: "Anagha N Nath.jpg", link: "/profile/anagha" },
  ],
  CS: [
    { name: "Ananya Merlyn George", position: "Member", img: "Ananya Merlyn George .jpg", link: "/profile/ananya" },
          { name: "Aparna Mahesh", position: "Member", img: "aparna mahesh.jpg", link: "/profile/aparna" },
          { name: "Athira Ajay", position: "Secretary", img: "athira ajay.jpg", link: "/profile/athira" },
          { name: "Behanan K Bahnan", position: "Member", img: "behanan k bahanan.jpg", link: "/profile/behanan" },
          { name: "Darsan Dileep", position: "Member", img: "Darsan Dileep.JPG", link: "/profile/darsan" },
          { name: "Devamanas S", position: "Member", img: "Devamanas S.JPG", link: "/profile/devamanas" },
          { name: "Jala Vishwa Keerthi", position: "Member", img: "jala vishwa keerthi.png", link: "/profile/jala" },
  ],
  PES: [
    { name: "Krishnapriya M", position: "Member", img: "krishnapriya m.jpg", link: "/profile/krishnapriya" },
    { name: "Milee B Kokkatt", position: "Member", img: "MILEE B KOKKATT.png", link: "/profile/milee" },
    { name: "Neha Biju", position: "Member", img: "Neha Biju.JPEG", link: "/profile/neha" },
    { name: "Neha R Jacob", position: "Member", img: "Neha R Jacob.jpg", link: "/profile/nehaR" },
    { name: "Nia Jobby", position: "Member", img: "Nia Jobby .jpg", link: "/profile/nia" },
    { name: "Nihala Nizamudeen", position: "Member", img: "NIHALA NIZAMUDEEN .HEIC", link: "/profile/nihala" },
  ],
  IAS: [
    { name: "Noahan Zacharia", position: "Member", img: "Noahan zacharia.png", link: "/profile/noahan" },
    { name: "Punya D", position: "Member", img: "Punya D.JPG", link: "/profile/ponya" },
    { name: "Ryyan Safar", position: "Member", img: "Ryyan Safar.png", link: "/profile/ryyan" },
    { name: "Sabharish P V", position: "Member", img: "Sabharish P V.jpg", link: "/profile/sabharish" },
    { name: "Sangeeth M S", position: "Member", img: "Sangeeth m s.jpg", link: "/profile/sangeeth" },
    { name: "Shreya M", position: "Member", img: "Shreya M.JPG", link: "/profile/shreya" },
  ],
  RAS: [
    { name: "Henry Adams", position: "Chair", img: "Henry.jpg", link: "/profile/henry" },
    { name: "Isabella Clark", position: "Treasurer", img: "Isabella.jpg", link: "/profile/isabella" },
  ],
  WIE: [
    { name: "John Lewis", position: "Chair", img: "John.jpg", link: "/profile/john" },
    { name: "Katherine Scott", position: "Member", img: "Katherine.jpg", link: "/profile/katherine" },
  ],
  SPS: [
    { name: "Liam Brown", position: "Chair", img: "Liam.jpg", link: "/profile/liam" },
    { name: "Mia Harris", position: "Vice Chair", img: "Mia.jpg", link: "/profile/mia" },
  ]
};

const Execom = () => {
  const navigate = useNavigate();

  const handleRedirect = (link) => {
    navigate(link);
  };

  return (
    <div className='w-full min-h-screen bg-gray-50 text-gray-900'>
      {/* Banner */}
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

      {/* Separate Sections for Societies */}
      {Object.entries(societies).map(([society, members]) => (
        <div key={society} className='mb-16'>
          {/* Centered Society Name */}
          <div className="flex justify-center items-center mb-6">
            <h3 className='text-2xl font-semibold border-b-4 border-blue-600 inline-block text-blue-900'>
              {society} Executive Committee
            </h3>
          </div>

          {/* Grid Layout for Members */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 px-4 lg:px-8'>
            {members.map((member, index) => (
              <div
                key={index}
                className='relative group rounded-xl shadow-lg bg-white cursor-pointer transition-transform transform duration-300 hover:scale-105 hover:shadow-2xl'
                onClick={() => handleRedirect(member.link)}
              >
                <img
                  src={`/Execom25/${member.img}`}
                  alt={member.name}
                  className='w-full h-[300px] object-cover rounded-t-xl group-hover:brightness-75 transition-all duration-300'
                />
                <div className='absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent text-white text-center p-4'>
                  {/* Name with Hover Animation */}
                  <p className='text-lg font-semibold opacity-100 group-hover:opacity-0 transition-opacity duration-300'>
                    {member.name}
                  </p>
                  {/* Hidden on hover */}
                  <p className='text-sm opacity-100 group-hover:opacity-0 transition-opacity duration-300'>{member.position}</p>
                </div>

                {/* Hovered name animation */}
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
