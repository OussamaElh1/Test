import React from "react";

const Newsletter = () => {
  return (
    <section className="py-16 bg-white text-gray-800">
      {/* Container */}
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg shadow-lg">
          {/* Title */}
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
            Stay Connected with Us ✨
          </h2>
          <p className="text-lg text-center mb-6 text-gray-600">
            Subscribe to our newsletter and never miss an update. Get the latest news, events, and opportunities delivered straight to your inbox.
          </p>

          {/* Newsletter Form */}
          <form
            action="#"
            method="POST"
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            {/* Email Input */}
            <input
              type="email"
              placeholder="Enter your email address"
              required
              className="flex-1 px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-sm"
            />
            {/* Subscribe Button */}
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 shadow-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
