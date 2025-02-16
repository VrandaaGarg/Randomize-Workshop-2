import React from "react";

function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">React Workshop</h3>
            <p className="text-sm">Building better web experiences through modern React development.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <a href="#" className="hover:text-white transition-colors">Home</a>
              <a href="#" className="hover:text-white transition-colors">Courses</a>
              <a href="#" className="hover:text-white transition-colors">About</a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">GitHub</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-sm text-center">
          <p>© 2024 Vranda Garg.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
