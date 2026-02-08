import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full h-24 bg-black text-gray-500 flex justify-center items-center">
      <div className="max-w-screen-lg w-full px-4 flex justify-between">
        <p>&copy; 2026 Dylan Hamersztein. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="https://github.com/DylanHamersztein" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaGithub size={20} /></a>
          <a href="https://linkedin.com/in/dylan-hamersztein" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaLinkedin size={20} /></a>
          <a href="https://twitter.com/dylanhamersztein" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaTwitter size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
