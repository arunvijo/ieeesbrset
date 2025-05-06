import React from 'react';
import { useParams } from 'react-router-dom';

const profiles = {
  rinza: {
    name: "Rinza Yunus",
    position: "Chair",
    img: "Rinza Yunus.jpg.JPG",
    bio: "Rinza is the chair of SB and has been leading the society since its inception.",
  },
  alias: {
    name: "Alias Eldho",
    position: "Vice Chair",
    img: "AliasEldo.jpg",
    bio: "Alias is the Vice Chair of SB and is responsible for managing various operations.",
  },
  arun: {
    name: "Arun Vijo Tharakan",
    position: "Webmaster",
    img: "arun vijo.jpeg",
    bio: "Arun is the Webmaster and ensures the website runs smoothly with the latest updates.",
  },
  adriel: {
    name: "Adriel Bobby",
    position: "Member",
    img: "Adriel Bobby.jpg",
    bio: "Adriel is a member of SB and actively participates in various society events.",
  },
  amelin: {
    name: "Amelin Alexander",
    position: "Member",
    img: "amelin alexander.jpg",
    bio: "Amelin is a member of the SB team, contributing to various projects and activities.",
  },
  anagha: {
    name: "Anagha N Nath",
    position: "Member",
    img: "Anagha N Nath.jpg",
    bio: "Anagha is a dedicated member who helps in the planning and execution of events.",
  },
  ananya: {
    name: "Ananya Merlyn George",
    position: "Member",
    img: "Ananya Merlyn George .jpg",
    bio: "Ananya is a member who brings fresh perspectives to the team and contributes creatively.",
  },
  aparna: {
    name: "Aparna Mahesh",
    position: "Member",
    img: "aparna mahesh.jpg",
    bio: "Aparna is a committed member working on various aspects of society operations.",
  },
  athira: {
    name: "Athira Ajay",
    position: "Secretary",
    img: "athira ajay.jpg",
    bio: "Athira is the Secretary, handling all administrative duties and keeping the team organized.",
  },
  behanan: {
    name: "Behanan K Bahnan",
    position: "Member",
    img: "behanan k bahanan.jpg",
    bio: "Behanan is a member contributing to the overall success of the society through teamwork.",
  },
  darsan: {
    name: "Darsan Dileep",
    position: "Member",
    img: "Darsan Dileep.JPG",
    bio: "Darsan is a member involved in various activities and actively contributes to events.",
  },
  devamanas: {
    name: "Devamanas S",
    position: "Member",
    img: "Devamanas S.JPG",
    bio: "Devamanas is a member who actively participates in brainstorming and organizing events.",
  },
  jala: {
    name: "Jala Vishwa Keerthi",
    position: "Member",
    img: "jala vishwa keerthi.png",
    bio: "Jala brings new ideas and enthusiasm to the team as a valued member of the society.",
  },
  krishnapriya: {
    name: "Krishnapriya M",
    position: "Member",
    img: "krishnapriya m.jpg",
    bio: "Krishnapriya is a team player, always ready to lend a hand in various society activities.",
  },
  milee: {
    name: "Milee B Kokkatt",
    position: "Member",
    img: "MILEE B KOKKATT.png",
    bio: "Milee is an energetic member who helps organize events and engages the community.",
  },
  neha: {
    name: "Neha Biju",
    position: "Member",
    img: "Neha Biju.JPEG",
    bio: "Neha is a diligent member contributing to team efforts and supporting society goals.",
  },
  nehar: {
    name: "Neha R Jacob",
    position: "Member",
    img: "Neha R Jacob.jpg",
    bio: "Neha R is a committed member working tirelessly behind the scenes.",
  },
  nia: {
    name: "Nia Jobby",
    position: "Member",
    img: "Nia Jobby .jpg",
    bio: "Nia is a creative member who helps with event planning and execution.",
  },
  nihala: {
    name: "Nihala Nizamudeen",
    position: "Member",
    img: "NIHALA NIZAMUDEEN .HEIC",
    bio: "Nihala is a versatile member with a range of talents and ideas for society events.",
  },
  noahan: {
    name: "Noahan Zacharia",
    position: "Member",
    img: "Noahan zacharia.png",
    bio: "Noahan is a dedicated member contributing to every aspect of society operations.",
  },
  punya: {
    name: "Punya D",
    position: "Member",
    img: "Punya D.JPG",
    bio: "Punya is an active member with excellent organizational and leadership skills.",
  },
  ryyan: {
    name: "Ryyan Safar",
    position: "Member",
    img: "Ryyan Safar.png",
    bio: "Ryyan is a team member who excels in planning and managing various society tasks.",
  },
  sabharish: {
    name: "Sabharish P V",
    position: "Member",
    img: "Sabharish P V.jpg",
    bio: "Sabharish is a valued member who actively contributes to the society's success.",
  },
  sangeeth: {
    name: "Sangeeth M S",
    position: "Member",
    img: "Sangeeth m s.jpg",
    bio: "Sangeeth is an innovative member who plays a key role in society's event planning.",
  },
  shreya: {
    name: "Shreya M",
    position: "Member",
    img: "Shreya M.JPG",
    bio: "Shreya is a member who contributes her skills and expertise to the team's success.",
  }
};

const Profile = () => {
  const { memberId } = useParams(); // Get the memberId from the URL
  const member = profiles[memberId.toLowerCase()]; // Retrieve member data by ID

  if (!member) {
    return <div>Member not found</div>; // Show if the profile does not exist
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-900 bg-opacity-50 py-8">
      {/* Dark Transparent Box Container */}
      <div className="bg-black bg-opacity-70 p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        {/* Profile Image (Small Circle) */}
        <img
          src={`/Execom25/${member.img}`}
          alt={member.name}
          className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-blue-500 mb-4"
        />
        {/* Name and Position */}
        <h1 className="text-3xl font-bold text-white mb-2">{member.name}</h1>
        <h2 className="text-xl text-gray-300 mb-4">{member.position}</h2>

        {/* Bio */}
        <p className="text-lg text-gray-200">{member.bio}</p>
      </div>
    </div>
  );
};

export default Profile;
