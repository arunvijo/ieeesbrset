import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";

// --- SB Achievements Images ---
const sbImages = [
  "/SbAwards/sba2.jpeg",
  "/SbAwards/sba3.jpeg",
  "/SbAwards/sba4.png",
  "/SbAwards/sba5.jpeg",
  "/SbAwards/sba6.jpeg",
  "/SbAwards/sba7.jpeg",
  "/SbAwards/sba8.jpeg",
  "/SbAwards/sba9.jpeg",
];

// --- Student Achievements Images ---
const studentImages = [
  "/StudentAwards/sa1.jpeg",
  "/StudentAwards/sa2.jpeg",
  "/StudentAwards/sa3.jpeg",
  "/StudentAwards/sa4.jpeg",
  "/StudentAwards/sa5.jpeg",
];

// Animation variants for grid and cards
const gridVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, ease: "easeOut" } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

// Combined for search/filter
const combineImages = sbImages.concat(studentImages);

const Achievements = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter function based on search term
  const filterImages = (images) =>
    images.filter((img) =>
      img.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="py-20 px-6 md:px-20 lg:px-32 bg-white backdrop-blur-sm">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 inline-block relative">
          Achievements
          <motion.div
            className="absolute bottom-[-10px] left-0 w-full h-1 bg-blue-600"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
        </h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          Explore all the milestones, awards, and accolades of our IEEE Student Branch and student members. Use the search or tabs to filter achievements.
        </p>
      </div>

      {/* Search */}
      <div className="max-w-md mx-auto mb-8">
        <Input
          placeholder="Search achievements..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Tabs */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-8 justify-center">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="sb">SB Awards</TabsTrigger>
          <TabsTrigger value="student">Student Awards</TabsTrigger>
        </TabsList>

        {/* All */}
        <TabsContent value="all">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={gridVariants}
            initial="hidden"
            animate="visible"
          >
            {filterImages(combineImages).map((src, idx) => (
              <motion.div
                key={idx}
                className="rounded-xl shadow-lg overflow-hidden cursor-pointer group bg-white/10"
                variants={cardVariants}
                onClick={() => setSelectedImg(src)}
              >
                <img
                  src={src}
                  alt={`Achievement ${idx + 1}`}
                  className="w-full h-72 object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>

        {/* SB Awards */}
        <TabsContent value="sb">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={gridVariants}
            initial="hidden"
            animate="visible"
          >
            {filterImages(sbImages).map((src, idx) => (
              <motion.div
                key={idx}
                className="rounded-xl shadow-lg overflow-hidden cursor-pointer group bg-white/10"
                variants={cardVariants}
                onClick={() => setSelectedImg(src)}
              >
                <img
                  src={src}
                  alt={`SB Award ${idx + 1}`}
                  className="w-full h-72 object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>

        {/* Student Awards */}
        <TabsContent value="student">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={gridVariants}
            initial="hidden"
            animate="visible"
          >
            {filterImages(studentImages).map((src, idx) => (
              <motion.div
                key={idx}
                className="rounded-xl shadow-lg overflow-hidden cursor-pointer group bg-white/10"
                variants={cardVariants}
                onClick={() => setSelectedImg(src)}
              >
                <img
                  src={src}
                  alt={`Student Award ${idx + 1}`}
                  className="w-full h-72 object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>
      </Tabs>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 p-4"
            onClick={() => setSelectedImg(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={selectedImg}
              alt="Enlarged achievement"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Achievements;
