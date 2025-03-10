import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FileText, Home, MessageSquare, Star } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <FileText className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">ResumeBuilder</span>
            </Link>
          </div>
          
          <div className="flex space-x-4">
            <Link
              to="/"
              className={`inline-flex items-center px-3 py-2 text-sm font-medium ${
                isActive('/') 
                  ? 'text-indigo-600 border-b-2 border-indigo-600' 
                  : 'text-gray-500 hover:text-indigo-600'
              }`}
            >
              <Home className="h-4 w-4 mr-1" />
              Home
            </Link>
            
            <Link
              to="/resume-builder"
              className={`inline-flex items-center px-3 py-2 text-sm font-medium ${
                isActive('/resume-builder') 
                  ? 'text-indigo-600 border-b-2 border-indigo-600' 
                  : 'text-gray-500 hover:text-indigo-600'
              }`}
            >
              <FileText className="h-4 w-4 mr-1" />
              Resume Builder
            </Link>
            
            <Link
              to="/reviews"
              className={`inline-flex items-center px-3 py-2 text-sm font-medium ${
                isActive('/reviews') 
                  ? 'text-indigo-600 border-b-2 border-indigo-600' 
                  : 'text-gray-500 hover:text-indigo-600'
              }`}
            >
              <Star className="h-4 w-4 mr-1" />
              Reviews
            </Link>
            
            <Link
              to="/contact"
              className={`inline-flex items-center px-3 py-2 text-sm font-medium ${
                isActive('/contact') 
                  ? 'text-indigo-600 border-b-2 border-indigo-600' 
                  : 'text-gray-500 hover:text-indigo-600'
              }`}
            >
              <MessageSquare className="h-4 w-4 mr-1" />
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;