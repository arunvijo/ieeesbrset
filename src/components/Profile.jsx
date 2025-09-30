import React from 'react';
import { useParams } from 'react-router-dom';

// UPDATED: Added all members and corrected positions to ensure every link works
const profiles = {
  rinza: { name: "Rinza Yunus", position: "IEEE Student Branch Chair", img: "Rinza Yunus.JPG", bio: "Leading the IEEE Student Branch with a vision for innovation and collaboration." },
  alias: { name: "Alias Eldo", position: "IEEE Student Branch Vice Chair", img: "AliasEldo.jpg", bio: "Supporting the branch's functions and fostering a dynamic environment for members." },
  amelin: { name: "Amelin Alexander Rathappillil", position: "IEEE Student Branch Secretary", img: "amelin alexander.jpg", bio: "Managing communications and ensuring the smooth administrative flow of the Student Branch." },
  athira: { name: "Athira Ajay", position: "Treasurer", img: "athira ajay.jpg", bio: "Overseeing the financial health and budgeting for all Student Branch activities." },
  jala: { name: "Jala Vishwa Keerthi", position: "Technical Coordinator", img: "jala vishwa keerthi.png", bio: "Coordinating technical workshops and events to enhance member skills." },
  adriel: { name: "Adriel Bobby", position: "Electronic Communications Coordinator", img: "Adriel Bobby.jpg", bio: "Handling online presence and digital outreach for the Student Branch." },
  sangeeth: { name: "Sangeeth M S", position: "Membership Development Coordinator", img: "Sangeeth m s.jpg", bio: "Focused on growing our community and enhancing the member experience." },
  behanan: { name: "Behanan K Bahanan", position: "Membership Development Coordinator", img: "behanan k bahanan.jpg", bio: "Working to attract new members and retain existing ones through engaging initiatives." },
  krishnapriya: { name: "Krishnapriya M", position: "Membership Development Coordinator", img: "krishnapriya m.jpg", bio: "Developing strategies to expand our membership and community reach." },
  noahan: { name: "Noahan Zachariah Pradeep", position: "Membership Development Coordinator", img: "Noahan zacharia.png", bio: "Engaging with potential members and highlighting the benefits of IEEE." },
  arun: { name: "Arun Vijo Tharakan", position: "Webmaster", img: "arun vijo.jpeg", bio: "Developing and maintaining the digital backbone of our Student Branch website." },
  aparna: { name: "Aparna Mahesh", position: "Webmaster", img: "aparna mahesh.jpg", bio: "Ensuring the website is up-to-date, functional, and user-friendly." },
  ryyan: { name: "Ryyan Safar", position: "LINK Representative", img: "Ryyan Safar.png", bio: "Serving as the liaison between our Student Branch and the IEEE LINK community." },
  abhinav: { name: "Abhinav s", position: "Design Lead", img: "Sabharish P V.jpg", bio: "Leading the creative direction and visual identity for all our events and communications." },
  sabharish: { name: "Sabharish PV", position: "Design Lead", img: "Sabharish P V.jpg", bio: "Crafting compelling visuals and designs that represent our Student Branch." },
  devamanas: { name: "Devamanas S", position: "Media Lead", img: "Devamanas S.JPG", bio: "Managing media relations and content creation to showcase our activities." },
  abhishek: { name: "Abhishek lype", position: "Utility Lead", img: "Abhishek lype.jpg", bio: "Overseeing logistical and operational support for all branch events." },
  navaneeth: { name: "Navaneeth K.B", position: "Computer Society - Chair", img: "Navaneeth K.B.jpg", bio: "Leading the Computer Society chapter with a focus on cutting-edge technology." },
  richard: { name: "Richard Sabu", position: "Computer Society - Vice Chair", img: "Richard 1.jpg", bio: "Supporting the CS chapter's initiatives and technical events." },
  nihala: { name: "Nihala Nizamudeen", position: "Computer Society - Secretary", img: "NIHALA NIZAMUDEEN .HEIC", bio: "Handling communications and records for the Computer Society." },
  punya: { name: "Punya D", position: "Computer Society - Treasurer", img: "Punya D.JPG", bio: "Managing the finances for the Computer Society chapter." },
  namitha: { name: "Namitha Mariam John", position: "Industry Applications Society - Chair", img: "Namitha Mariam John.jpeg", bio: "Leading the IAS chapter to bridge the gap between academia and industry." },
  darsan: { name: "Darsan Dileep", position: "Industry Applications Society - Vice Chair", img: "Darsan Dileep.JPG", bio: "Assisting in the planning of industrial visits and expert talks." },
  shreya: { name: "Shreya M", position: "Industry Applications Society - Secretary", img: "Shreya M.JPG", bio: "Coordinating activities and communications for the IAS chapter." },
  nia: { name: "Nia Jobby", position: "Industry Applications Society -Treasurer", img: "Nia Jobby .jpg", bio: "Handling the financial operations of the Industry Applications Society." },
  diya: { name: "Diya Sarah", position: "Power & Energy Society - Chair", img: "Diya Sarah.jpg", bio: "Leading the PES chapter with a passion for sustainable energy solutions." },
  ashish: { name: "Ashish John Binu", position: "Power & Energy Society - Vice Chair", img: "Ashish John Binu.jpg", bio: "Supporting events and workshops related to the power and energy sector." },
  neha: { name: "Neha Biju", position: "Power & Energy Society - Secretary", img: "Neha Biju.JPEG", bio: "Managing communications and organizing events for the PES chapter." },
  joel: { name: "Joel John Thumpayil", position: "Power & Energy Society - Treasurer", img: "Joel John Thumpayil.jpg", bio: "Overseeing the budget and financial planning for the PES chapter." },
  abner: { name: "Abner Sebastian Lopez", position: "Robotics & Automation Society- Chair", img: "Abner Sebastian Lopez.jpg", bio: "Driving the RAS chapter forward with exciting projects in robotics and automation." },
  akul: { name: "Akul Prasanth", position: "Robotics & Automation Society -Vice Chair", img: "Akul Prasanth .jpg", bio: "Assisting in hands-on workshops and robotics competitions." },
  adheetha: { name: "Adheetha krishnaja", position: "Robotics & Automation Society- Secretary", img: "Adheetha krishnaja .jpg", bio: "Coordinating the activities and member engagement for the RAS chapter." },
  milee: { name: "Milee B Kokkatt", position: "Robotics & Automation Society -Treasurer", img: "MILEE B KOKKATT.png", bio: "Managing finances for all robotics projects and events." },
  jeremy: { name: "Jeremy Simon Moncey", position: "Signal Processing Society Chair", img: "Rinza Yunus.JPG", bio: "Leading the SPS chapter and promoting interest in signal processing technologies." },
  jenet: { name: "Jenet Joseph", position: "Signal Processing Society - Vice Chair", img: "Rinza Yunus.JPG", bio: "Supporting the organization of technical talks and seminars for the SPS chapter." },
  keerthana: { name: "Keerthana S", position: "Signal Processing Society - Secretary", img: "Rinza Yunus.JPG", bio: "Handling administrative tasks and communications for the Signal Processing Society." },
  pooja: { name: "Pooja S Nair", position: "Signal Processing Society - Treasurer", img: "Rinza Yunus.JPG", bio: "Managing the budget and financial records for the SPS chapter." },
  sreepriya: { name: "Sreepriya S", position: "Women in Engineering - Chair", img: "Sreepriya.jpg", bio: "Leading the WIE Affinity Group to empower and support women in technical fields." },
  anagha: { name: "Anagha N Nath", position: "Women in Engineering - Vice Chair", img: "Anagha N Nath.jpg", bio: "Assisting in organizing mentorship programs and networking events for WIE." },
  nehar: { name: "Neha R Jacob", position: "Women in Engineering - Secretary", img: "Neha R Jacob.jpg", bio: "Coordinating events and communications to promote the WIE mission." },
  ananya: { name: "Ananya Merlyn George", position: "Women in Engineering - Treasurer", img: "Ananya Merlyn George .jpg", bio: "Managing the finances for the WIE Affinity Group's initiatives." },
};

const Profile = () => {
  const { memberId } = useParams();
  const member = profiles[memberId.toLowerCase()];

  if (!member) {
    return (
        <div className="w-full min-h-screen flex justify-center items-center bg-gray-900 bg-opacity-50 py-8">
             <div className="bg-black bg-opacity-70 p-8 rounded-lg shadow-lg max-w-md w-full text-center">
                <h1 className="text-3xl font-bold text-white mb-2">Member Not Found</h1>
                <p className="text-lg text-gray-200">The profile you are looking for does not exist.</p>
             </div>
        </div>
    );
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-900 bg-opacity-50 py-8">
      <div className="bg-black bg-opacity-70 p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <img
          src={`/Execom25/${member.img}`}
          alt={member.name}
          className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-blue-500 mb-4"
        />
        <h1 className="text-3xl font-bold text-white mb-2">{member.name}</h1>
        <h2 className="text-xl text-gray-300 mb-4">{member.position}</h2>
        <p className="text-lg text-gray-200">{member.bio}</p>
      </div>
    </div>
  );
};

export default Profile;