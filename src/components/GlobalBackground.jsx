import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const GlobalBackground = ({ src, type = "image" }) => {
  const ref = useRef()
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, -100]) // Adjust parallax depth

  return (
    <>
      {type === "video" ? (
        <motion.video
          style={{ y }}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          className="fixed top-0 left-0 w-full h-full object-cover z-[-10]"
        />
      ) : (
        <motion.div
          style={{
            y,
            backgroundImage: `url("/bg.jpg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className="fixed top-0 left-0 w-full h-full z-[-10]"
        />
      )}
      {/* Optional overlay for darkening */}
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-[-5]" />
    </>
  )
}

export default GlobalBackground
