import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative py-16 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Find Your Perfect Holiday</h1>
        </div>
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <form className="flex space-x-4">
            <input type="text" placeholder="Where do you want to go?" className="w-full border p-2 rounded" />
            <input type="text" placeholder="When do you want to go?" className="w-full border p-2 rounded" />
            <button type="submit" className="px-6 py-2 bg-teal-500 text-white rounded">Search</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
