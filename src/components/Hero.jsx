import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from 'react-icons/fa';
import cv from '../assets/CV.pdf'; // Ensure to copy CV.pdf to src/assets or public/assets
import dylan from '../assets/dylan.jpeg'; // Ensure to copy dylan.jpeg

const Hero = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full max-w-lg">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md text-lg">
            I specialize in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
          </p>

          <div className="flex space-x-6 mt-4">
            <a
              href="https://github.com/dylanhamersztein"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 duration-200"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/dylanhamersztein"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 duration-200"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="mailto:dylan@dientedeleon.co.uk"
              className="hover:scale-110 duration-200"
            >
              <FaEnvelope size={30} />
            </a>
            <a
              href={cv}
              download="Dylan Hamersztein CV.pdf"
              className="hover:scale-110 duration-200"
            >
              <FaFilePdf size={30} />
            </a>
          </div>
        </div>

        <div className="mt-8 md:mt-0 md:ml-10">
          <img
            src={dylan}
            alt="Dylan Hamersztein"
            className="rounded-2xl mx-auto w-2/3 md:w-full object-cover shadow-lg shadow-cyan-500/50 hover:shadow-cyan-400/50 transition-shadow duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
