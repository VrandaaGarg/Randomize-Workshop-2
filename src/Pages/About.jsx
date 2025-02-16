import React from "react";

function About() {
  const workshopFlow = [
    {
      title: "Introduction to Web Development",
      points: [
        "Overview of Web Development (Frontend, Backend, Full-Stack)",
        "Why React for modern web applications?",
        "DOM Vs Virtual DOM"
      ]
    },
    {
      title: "Setting Up the Environment",
      points: [
        "Install Node.js, Vite, and create a React project",
        "Overview of React project file structure",
        "Configure Tailwind CSS with Vite (v4.0.5)"
      ]
    },
    {
      title: "React Basics",
      points: [
        "Understanding JSX",
        "Creating functional components",
        "Using props for component communication",
        "Basic useState hook for interactivity"
      ]
    },
    {
      title: "Routing Basics with React Router",
      points: [
        "Installing and setting up react-router-dom",
        "Creating simple navigation between pages"
      ]
    },
    {
      title: "Building a Simple App",
      points: [
        "Create a simple React app with two pages",
        "Add interactivity with useState",
        "Style it using Tailwind CSS"
      ]
    },
    {
      title: "Q&A and Next Steps",
      points: [
        "Recap key concepts",
        "Share resources for further learning"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">About the Workshop</h1>
        
        {/* Workshop Overview */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <p className="text-lg text-gray-700 mb-6">
            This comprehensive workshop is designed to help students master React development
            through practical, hands-on experience with modern tools and best practices.
          </p>
          
          <div className="grid grid-cols-2 gap-6 mt-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">Duration</h3>
              <p className="text-blue-600">2 Hours Workshop</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">Experience Level</h3>
              <p className="text-green-600">Beginner to Intermediate</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-2">Prerequisites</h3>
              <p className="text-purple-600">Basic JavaScript Knowledge</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="font-semibold text-orange-800 mb-2">Format</h3>
              <p className="text-orange-600">Hands-on Coding Sessions</p>
            </div>
          </div>
        </div>

        {/* Workshop Workflow */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6">Workshop Workflow</h2>
          <div className="space-y-8">
            {workshopFlow.map((section, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {index + 1}. {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.points.map((point, idx) => (
                    <li key={idx} className="text-gray-600 flex items-center gap-2">
                      <span className="text-blue-500">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
