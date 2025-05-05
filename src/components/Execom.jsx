import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const societies = {
  SB: Array.from(
    new Map(
      [
        { name: "Rinza Yunus", position: "Chair", img: "Rinza Yunus.jpg.JPG", link: "/profile/rinza" },
        { name: "Alias Eldho", position: "Vice Chair", img: "AliasEldo.jpg", link: "/profile/alias" },
        { name: "Arun Vijo Tharakan", position: "Webmaster", img: "arun vijo.jpeg", link: "/profile/arun" },
        { name: "Adriel Bobby", position: "Member", img: "Adriel Bobby.jpg", link: "/profile/adriel" },
        { name: "Amelin Alexander", position: "Member", img: "amelin alexander.jpg", link: "/profile/amelin" },
        { name: "Anagha N Nath", position: "Member", img: "Anagha N Nath.jpg", link: "/profile/anagha" },
        { name: "Ananya Merlyn George", position: "Member", img: "Ananya Merlyn George .jpg", link: "/profile/ananya" },
        { name: "Aparna Mahesh", position: "Member", img: "aparna mahesh.jpg", link: "/profile/aparna" },
        { name: "Athira Ajay", position: "Secretary", img: "athira ajay.jpg", link: "/profile/athira" },
        { name: "Behanan K Bahnan", position: "Member", img: "behanan k bahanan.jpg", link: "/profile/behanan" },
        { name: "Darsan Dileep", position: "Member", img: "Darsan Dileep.JPG", link: "/profile/darsan" },
        { name: "Devamanas S", position: "Member", img: "Devamanas S.JPG", link: "/profile/devamanas" },
        { name: "Jala Vishwa Keerthi", position: "Member", img: "jala vishwa keerthi.png", link: "/profile/jala" },
        { name: "Krishnapriya M", position: "Member", img: "krishnapriya m.jpg", link: "/profile/krishnapriya" },
        { name: "Milee B Kokkatt", position: "Member", img: "MILEE B KOKKATT.png", link: "/profile/milee" },
        { name: "Neha Biju", position: "Member", img: "Neha Biju.JPEG", link: "/profile/neha" },
        { name: "Neha R Jacob", position: "Member", img: "Neha R Jacob.jpg", link: "/profile/nehaR" },
        { name: "Nia Jobby", position: "Member", img: "Nia Jobby .jpg", link: "/profile/nia" },
        { name: "Nihala Nizamudeen", position: "Member", img: "NIHALA NIZAMUDEEN .HEIC", link: "/profile/nihala" },
        { name: "Noahan Zacharia", position: "Member", img: "Noahan zacharia.png", link: "/profile/noahan" },
        { name: "Punya D", position: "Member", img: "Punya D.JPG", link: "/profile/ponya" },
        { name: "Ryyan Safar", position: "Member", img: "Ryyan Safar.png", link: "/profile/ryyan" },
        { name: "Sabharish P V", position: "Member", img: "Sabharish P V.jpg", link: "/profile/sabharish" },
        { name: "Sangeeth M S", position: "Member", img: "Sangeeth m s.jpg", link: "/profile/sangeeth" },
        { name: "Shreya M", position: "Member", img: "Shreya M.JPG", link: "/profile/shreya" },
      ].map((m) => [m.name, m])
    ).values()
  ),
};

const Execom = () => {
  const [expanded, setExpanded] = useState({});
  const navigate = useNavigate();

  const toggleShowMore = (society) => {
    setExpanded((prev) => ({
      ...prev,
      [society]: !prev[society]
    }));
  };

  const handleRedirect = (link) => {
    navigate(link);
  };

  const getRandomSize = () => {
    const sizes = [
      'col-span-1 row-span-1',
      'col-span-2 row-span-2',
      'col-span-1 row-span-2',
      'col-span-2 row-span-1'
    ];
    return sizes[Math.floor(Math.random() * sizes.length)];
  };

  return (
    <div className='w-full min-h-[120vh] overflow-auto bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-900 px-4 md:px-10 py-10' id='Execom'>
      <h2 className='text-4xl font-extrabold text-center mb-10 text-blue-800 drop-shadow'>
        Meet Our <span className='text-blue-600'>Execom</span>
      </h2>

      {Object.entries(societies).map(([society, members]) => {
        const initialMembers = members.slice(0, 6);
        const displayedMembers = expanded[society] ? members : initialMembers;

        return (
          <div key={society} className='mb-16'>
            <h3 className='text-2xl font-semibold mb-6 border-b-4 border-blue-600 inline-block text-blue-900'>
              {society}
            </h3>
            <div className='grid grid-cols-4 md:grid-cols-6 auto-rows-[120px] gap-4 w-full'>
              {displayedMembers.map((member, index) => {
                const sizeClass = getRandomSize();
                return (
                  <div
                    key={index}
                    className={`relative group overflow-hidden rounded-xl shadow-xl bg-white ${sizeClass} cursor-pointer transition-transform duration-300 hover:scale-105`}
                    onClick={() => handleRedirect(member.link)}
                  >
                    <img
                      src={`/Execom25/${member.img}`}
                      alt={member.name}
                      className='w-full h-full object-cover group-hover:brightness-75 transition-all duration-300'
                    />
                    <div className='absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white text-center p-2'>
                      <p className='text-sm font-bold'>{member.name}</p>
                      <p className='text-xs'>{member.position}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            {members.length > 6 && (
              <div className='text-center mt-6'>
                <button
                  onClick={() => toggleShowMore(society)}
                  className='px-6 py-2 bg-blue-700 text-white font-semibold rounded-full shadow-lg hover:bg-blue-800 transition'
                >
                  {expanded[society] ? 'Show Less' : 'Show All'}
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Execom;
