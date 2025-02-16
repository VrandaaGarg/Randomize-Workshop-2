import React from "react";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <div className="py-20 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Master React Development
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Learn modern React development through hands-on workshops and real-world projects.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Get Started
          </button>
        </div>

        {/* Content Section */}
        <div className="bg-white flex items-center gap-4 rounded-xl shadow-lg p-8 mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">What You'll Learn</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {['React Fundamentals', 'Component-Based Architecture', 'React Router for Navigation', 
              'State Management', 'Basic Authentication Flow'].map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <span className="text-blue-500">✓</span>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
