import logo from './logo.png'
import logo_dark from './logo_dark.svg'
import cross_icon from './cross_icon.svg'
import menu_icon from './menu_icon.svg'
import star_icon from './star_icon.svg'
import left_arrow from './left_arrow.svg'
import right_arrow from './right_arrow.svg'
import header_img from './header_img.png'
import brand_img from './title.jpeg'
import project_img_1 from './project_img_1.jpg'
import project_img_2 from './project_img_2.jpg'
import project_img_3 from './project_img_3.jpg'
import project_img_4 from './project_img_4.jpg'
import project_img_5 from './project_img_5.jpg'
import project_img_6 from './project_img_6.jpg'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'

export const assets = {
    logo,
    logo_dark,
    cross_icon,
    menu_icon,
    star_icon,
    header_img,
    brand_img,
    project_img_1,
    project_img_2,
    project_img_3,
    project_img_4,
    left_arrow,
    right_arrow, 
}

export const projectsData = [
    {
      title: "Skyline Haven",
      price: "$2,50,000",
      location: "California",
      image: project_img_1
    },
    {
      title: "Vista Verde",
      price: "$2,50,000",
      location: "San Francisco",
      image: project_img_2
    },
    {
      title: "Serenity Suites",
      price: "$2,50,000",
      location: "Chicago",
      image: project_img_3
    },
    {
      title: "Central Square",
      price: "$2,50,000",
      location: "Los Angeles",
      image: project_img_4
    },
    {
      title: "Vista Verde",
      price: "$2,50,000",
      location: "San Francisco",
      image: project_img_5
    },
    {
      title: "Serenity Suites",
      price: "$2,50,000",
      location: "Chicago",
      image: project_img_6
    },
    
  ];

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

  export const testimonialsData = [
    {
        name: "Donald Jackman",
        title: "Marketing Manager",
        image: profile_img_1,
        alt: "Portrait of Donald Jackman",
        rating: 5,
        text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    },
    {
        name: "Richard Nelson",
        title: "UI/UX Designer",
        image: profile_img_2,
        alt: "Portrait of Richard Nelson",
        rating: 4,
        text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    },
    {
        name: "James Washington",
        title: "Co-Founder",
        image: profile_img_3,
        alt: "Portrait of James Washington",
        rating: 5,
        text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    }
];