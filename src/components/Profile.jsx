import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiLinkedin, FiGithub, FiGlobe, FiArrowLeft } from 'react-icons/fi';

// --- DATA ---
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

// --- COMPONENT FOR THE INTERACTIVE GLARE EFFECT ---
const ImageGlare = ({ member }) => {
    const ref = useRef(null);
    const [style, setStyle] = useState({});

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!ref.current) return;
            const rect = ref.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const style = {
                background: `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.2), transparent 150px)`,
            };
            setStyle(style);
        };
        const handleMouseLeave = () => setStyle({});
        const currentRef = ref.current;
        currentRef.addEventListener("mousemove", handleMouseMove);
        currentRef.addEventListener("mouseleave", handleMouseLeave);
        return () => {
            currentRef.removeEventListener("mousemove", handleMouseMove);
            currentRef.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <div ref={ref} className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-700 shadow-xl mx-auto">
            <img src={`/Execom25/${member.img}`} alt={member.name} className="w-full h-full object-cover object-top" />
            <div className="absolute inset-0" style={style} />
        </div>
    );
};


const Profile = () => {
    const { memberId } = useParams();
    const member = profiles[memberId.toLowerCase()];

    // UPDATED: Main wrapper is now transparent. The "Not Found" message is styled in a glass card.
    if (!member) {
        return (
            <div className="relative py-24 px-6 md:px-20 lg:px-32 text-gray-900 min-h-screen flex items-center justify-center overflow-hidden">
                <motion.div
                    className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-2xl max-w-md w-full p-8 md:p-12 relative z-10 text-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Member Not Found</h1>
                    <p className="text-lg text-gray-600">The profile you are looking for does not exist.</p>
                    <Link to="/execom" className="mt-8 inline-flex items-center bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition shadow-lg font-semibold">
                        <FiArrowLeft className="mr-2"/>
                        Back to Execom
                    </Link>
                </motion.div>
            </div>
        );
    }

    // UPDATED: Main wrapper is now transparent, showing the global App background.
    return (
        <div className="relative py-24 px-6 md:px-20 lg:px-32 text-gray-900 min-h-screen flex items-center justify-center overflow-hidden">
            
            <motion.div
                className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-2xl max-w-4xl w-full p-8 md:p-12 relative z-10"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
                    {/* Left Column: Image & Socials */}
                    <div className="flex flex-col items-center text-center">
                        <ImageGlare member={member} />
                        <div className="flex items-center gap-6 mt-6">
                            <a href="#" target="_blank" rel="noopener noreferrer"><FiLinkedin className="text-gray-500 text-2xl hover:text-blue-700 transition" /></a>
                            <a href="#" target="_blank" rel="noopener noreferrer"><FiGithub className="text-gray-500 text-2xl hover:text-blue-700 transition" /></a>
                            <a href="#" target="_blank" rel="noopener noreferrer"><FiGlobe className="text-gray-500 text-2xl hover:text-blue-700 transition" /></a>
                        </div>
                    </div>

                    {/* Right Column: Details */}
                    <motion.div
                        className="md:col-span-2 text-center md:text-left"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, staggerChildren: 0.2 }}
                    >
                        <motion.h1 initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">{member.name}</motion.h1>
                        <motion.h2 initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="text-xl font-semibold text-blue-700 mt-2 mb-6">{member.position}</motion.h2>
                        <motion.p initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }} className="text-lg text-gray-600 leading-relaxed">{member.bio}</motion.p>
                        
                        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }}>
                            <Link to="/execom" className="mt-8 inline-flex items-center bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition shadow-lg font-semibold">
                                <FiArrowLeft className="mr-2"/>
                                Back to Execom
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Profile;