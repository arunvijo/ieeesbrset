import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "c338cf41-bca2-4ad2-8f68-2d8b2e83fdc5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.error("Error:", data);
      toast.error(data.message || "Something went wrong");
      setResult(data.message || "Failed");
    }
  };

  return (
    <section 
      className="relative bg-cover bg-center py-20 lg:py-32"
      style={{ backgroundImage: "url('/path-to-your-image.jpg')" }} 
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 container mx-auto px-6 lg:px-32">
        <h2 className="text-4xl font-bold text-center mb-10 text-white">
          Contact <span className="text-blue-600">US</span>
        </h2>
        <p className="text-gray-300 text-center mb-12 max-w-xl mx-auto">
          Ready to connect? Fill out the form and our team will get back to you shortly.
        </p>

        <form onSubmit={onSubmit} className="max-w-2xl mx-auto space-y-6 bg-white bg-opacity-80 rounded-lg p-8 shadow-xl">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Your Name</label>
            <input
              type="text"
              name="Name"
              required
              placeholder="John Doe"
              className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Your Email</label>
            <input
              type="email"
              name="Email"
              required
              placeholder="john@example.com"
              className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Message</label>
            <textarea
              name="Message"
              required
              placeholder="Type your message here..."
              className="w-full border border-gray-300 rounded px-4 py-3 h-40 resize-none focus:outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-8 rounded hover:bg-blue-700 transition"
          >
            {result || "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
