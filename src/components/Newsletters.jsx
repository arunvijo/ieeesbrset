import React from 'react';
import { FiDownload, FiEye } from 'react-icons/fi';

// --- Add your newsletter information here ---
// To add a new newsletter:
// 1. Add its PDF file to the `public/Newsletters` folder.
// 2. Create a preview image (a screenshot of the first page is perfect) and add it to the same folder.
// 3. Add a new object to this array with the correct file names.
const newslettersData = [
  {
    title: 'Newsletter 2024',
    // Make sure you have a 'Newsletter_2024.png' preview image in `/public/Newsletters/`
    previewImage: '/Newsletters/Newsletter_2024.png',
    pdfUrl: '/Newsletters/IEEE_RSET_SB_Newsletter_2024.pdf',
    fileName: 'IEEE_RSET_SB_Newsletter_2024.pdf'
  },
  {
    title: 'Newsletter 2023',
     // Make sure you have a 'Newsletter_2023.png' preview image in `/public/Newsletters/`
    previewImage: '/Newsletters/Newsletter_2023.png',
    pdfUrl: '/Newsletters/IEEE_RSET_SB_Newsletter_2023.pdf',
    fileName: 'IEEE_RSET_SB_Newsletter_2023.pdf'
  }
];

const Newsletters = () => {
  return (
    <div className="py-12 md:py-20 bg-white backdrop-blur-md text-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">Our Newsletters</h2>
          <p className="text-lg text-gray-700 mt-2">
            Check out the latest news, events, and achievements from our Student Branch.
          </p>
          <div className="mt-4 w-24 h-1 bg-blue-400 mx-auto rounded"></div>
        </div>

        {/* Grid for Newsletter Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {newslettersData.map((newsletter, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-lg shadow-xl overflow-hidden group transition-transform transform hover:-translate-y-2"
            >
              <div className="p-1 bg-gray-900">
                <img
                  src={newsletter.previewImage}
                  alt={`Preview of ${newsletter.title}`}
                  className="w-full h-80 object-cover object-top rounded-t-md"
                  // Add a fallback for missing images
                  onError={(e) => { e.target.onerror = null; e.target.src='/Newsletters/default-preview.png' }}
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-white mb-4">{newsletter.title}</h3>
                <div className="flex space-x-4">
                  {/* View Button */}
                  <a
                    href={newsletter.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <FiEye className="mr-2" />
                    View
                  </a>
                  {/* Download Button */}
                  <a
                    href={newsletter.pdfUrl}
                    download={newsletter.fileName}
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <FiDownload className="mr-2" />
                    Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Newsletters;