import React from 'react';
import { useNavigate } from 'react-router-dom';

// --- CRITICAL PERFORMANCE WARNING ---
// Many of your images are extremely large (e.g., Shreya M.JPG is 15.8 MB, amelin alexander.jpg is 9.45 MB).
// This is the primary cause of your website's lag.
// **ACTION REQUIRED:** Before anything else, you MUST compress and resize these images.
// Aim for a file size under 300 KB for each image for a fast web experience.
// Tools like TinyPNG.com or Squoosh.app are perfect for this.

// Full names for society titles
const societyNames = {
  SB: "Student Branch", // [cite: 2]
  CS: "Computer Society", // [cite: 5]
  IAS: "Industry Applications Society", // [cite: 6]
  PES: "Power & Energy Society", // [cite: 8]
  RAS: "Robotics & Automation Society", // [cite: 10]
  SPS: "Signal Processing Society", // [cite: 12]
  WIE: "Women in Engineering Affinity Group", // [cite: 14]
};

// CORRECTED AND UPDATED DATA from the PDF and image files
const societies = {
  SB: [
    { name: "Rinza Yunus", position: "IEEE Student Branch Chair", img: "Rinza Yunus.JPG" }, // [cite: 3]
    { name: "Alias Eldo", position: "IEEE Student Branch Vice Chair", img: "AliasEldo.jpg" }, // [cite: 3]
    { name: "Amelin Alexander Rathappillil", position: "IEEE Student Branch Secretary", img: "amelin alexander.jpg" }, // [cite: 3]
    { name: "Athira Ajay", position: "Treasurer", img: "athira ajay.jpg" }, // [cite: 3]
    { name: "Jala Vishwa Keerthi", position: "Technical Coordinator", img: "jala vishwa keerthi.png" }, // [cite: 3]
    { name: "Adriel Bobby", position: "Electronic Communications Coordinator", img: "Adriel Bobby.jpg" }, // [cite: 3]
    { name: "Sangeeth M S", position: "Membership Development Coordinator", img: "Sangeeth m s.jpg" }, // [cite: 3]
    { name: "Behanan K Bahanan", position: "Membership Development Coordinator", img: "behanan k bahanan.jpg" }, // [cite: 3]
    { name: "Krishnapriya M", position: "Membership Development Coordinator", img: "krishnapriya m.jpg" }, // [cite: 3]
    { name: "Noahan Zachariah Pradeep", position: "Membership Development Coordinator", img: "Noahan zacharia.png" }, // [cite: 3]
    { name: "Arun Vijo Tharakan", position: "Webmaster", img: "arun vijo.jpeg" }, // [cite: 3]
    { name: "Aparna Mahesh", position: "Webmaster", img: "aparna mahesh.jpg" }, // [cite: 3]
    { name: "Ryyan Safar", position: "LINK Representative", img: "Ryyan Safar.png" }, // [cite: 3]
    { name: "Abhinav s", position: "Design Lead", img: "Sabharish P V.jpg" }, // Note: Using Sabharish's image for Abhinav as no image was provided
    { name: "Sabharish PV", position: "Design Lead", img: "Sabharish P V.jpg" }, // [cite: 3]
    { name: "Devamanas S", position: "Media Lead", img: "Devamanas S.JPG" }, // [cite: 3]
    { name: "Abhishek lype", position: "Utility Lead", img: "Abhishek lype.jpg" }, // [cite: 3]
  ],
  CS: [
    { name: "Navaneeth K.B", position: "Chair", img: "Navaneeth K.B.jpg" }, // [cite: 4]
    { name: "Richard Sabu", position: "Vice Chair", img: "Richard 1.jpg" }, // [cite: 4]
    { name: "Nihala Nizamudeen", position: "Secretary", img: "NIHALA NIZAMUDEEN .HEIC" }, // [cite: 4] // Note: .HEIC files may not work on all browsers. Convert to JPG or WebP.
    { name: "Punya D", position: "Treasurer", img: "Punya D.JPG" }, // [cite: 4]
  ],
  IAS: [
    { name: "Namitha Mariam John", position: "Chair", img: "Namitha Mariam John.jpeg" }, // [cite: 7]
    { name: "Darsan Dileep", position: "Vice Chair", img: "Darsan Dileep.JPG" }, // [cite: 7]
    { name: "Shreya M", position: "Secretary", img: "Shreya M.JPG" }, // [cite: 7]
    { name: "Nia Jobby", position: "Treasurer", img: "Nia Jobby .jpg" }, // [cite: 7]
  ],
  PES: [
    { name: "Diya Sarah", position: "Chair", img: "Diya Sarah.jpg" }, // [cite: 9]
    { name: "Ashish John Binu", position: "Vice Chair", img: "Ashish John Binu.jpg" }, // [cite: 9]
    { name: "Neha Biju", position: "Secretary", img: "Neha Biju.JPEG" }, // [cite: 9]
    { name: "Joel John Thumpayil", position: "Treasurer", img: "Joel John Thumpayil.jpg" }, // [cite: 9]
  ],
  RAS: [
    { name: "Abner Sebastian Lopez", position: "Chair", img: "Abner Sebastian Lopez.jpg" }, // [cite: 11]
    { name: "Akul Prasanth", position: "Vice Chair", img: "Akul Prasanth .jpg" }, // [cite: 11]
    { name: "Adheetha krishnaja", position: "Secretary", img: "Adheetha krishnaja .jpg" }, // [cite: 11]
    { name: "Milee B Kokkatt", position: "Treasurer", img: "MILEE B KOKKATT.png" }, // [cite: 11]
  ],
  SPS: [
    { name: "Jeremy Simon Moncey", position: "Chair", img: "Rinza Yunus.JPG" }, // Note: Using a placeholder image as none was provided
    { name: "Jenet Joseph", position: "Vice Chair", img: "Rinza Yunus.JPG" }, // Note: Using a placeholder image as none was provided
    { name: "Keerthana S", position: "Secretary", img: "Rinza Yunus.JPG" }, // Note: Using a placeholder image as none was provided
    { name: "Pooja S Nair", position: "Treasurer", img: "Rinza Yunus.JPG" }, // Note: Using a placeholder image as none was provided
  ],
  WIE: [
    { name: "Sreepriya S", position: "Chair", img: "Sreepriya.jpg" }, // [cite: 15]
    { name: "Anagha N Nath", position: "Vice Chair", img: "Anagha N Nath.jpg" }, // [cite: 15]
    { name: "Neha R Jacob", position: "Secretary", img: "Neha R Jacob.jpg" }, // [cite: 15]
    { name: "Ananya Merlyn George", position: "Treasurer", img: "Ananya Merlyn George .jpg" }, // [cite: 15]
  ]
};

const Execom = () => {
  const navigate = useNavigate();

  const handleRedirect = (link) => {
    // A simple link generation based on name, you can make this more robust
    const profileLink = `/profile/${link.toLowerCase().replace(/ /g, '-')}`;
    navigate(profileLink);
  };

  return (
    <div className='w-full min-h-screen bg-gray-50 text-gray-900'>
      {/* Banner */}
      <div className='relative w-full h-[350px] overflow-hidden mb-12'>
        <img
          src="/banner2.JPG"
          alt="Events Banner"
          className="absolute inset-0 w-full h-full object-cover"
          // OPTIMIZATION: Also consider compressing your banner image
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h2 className="text-white text-5xl font-extrabold drop-shadow-lg">
            Meet <span className="text-blue-400">Our Execom</span>
          </h2>
        </div>
      </div>

      {/* Separate Sections for Societies */}
      {Object.entries(societies).map(([societyKey, members]) => (
        <div key={societyKey} className='mb-16'>
          {/* Centered Society Name */}
          <div className="flex justify-center items-center mb-6">
            <h3 className='text-2xl font-semibold border-b-4 border-blue-600 inline-block text-blue-900'>
              {societyNames[societyKey] || societyKey} Executive Committee
            </h3>
          </div>

          {/* Grid Layout for Members */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 px-4 lg:px-8'>
            {members.map((member, index) => (
              <div
                key={index}
                className='relative group rounded-xl shadow-lg bg-white cursor-pointer transition-transform transform duration-300 hover:scale-105 hover:shadow-2xl'
                onClick={() => handleRedirect(member.name)}
              >
                <img
                  // --- PERFORMANCE OPTIMIZATION ADDED ---
                  loading="lazy"
                  width="300"
                  height="300"
                  // ------------------------------------
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