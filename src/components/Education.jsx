import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      id: 1,
      degree: "MSc Computer Science (Distinction)",
      university: "University of Nottingham",
      thesis: "Designed and implemented a text-based conversational agent (Chat Bot) in Java to aid first-year Computer Science students with Java programming queries.",
      modules: ["Advanced Algorithms and Data Structures", "Software Engineering", "Artificial Intelligence", "Machine Learning", "Computer Vision"]
    },
    {
      id: 2,
      degree: "BSc Computing (2:1)",
      university: "University of Leicester",
      thesis: "Developed a Candy Crush style game in Java as a dissertation project.",
      modules: ["Operating Systems", "Computer Architecture", "Database Systems", "Web Technologies", "Networking"]
    }
  ];

  return (
    <div name="education" className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Education</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 px-12 sm:px-0">
          {education.map(({ id, degree, university, thesis, modules }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg p-6 bg-gray-900 hover:scale-105 duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <FaGraduationCap size={30} className="text-gray-400" />
                  <h3 className="text-2xl font-bold">{university}</h3>
                </div>
                <p className="text-xl font-semibold mb-2 text-cyan-500">{degree}</p>
                <p className="text-gray-300 mb-4">{thesis}</p>
              </div>
              
              <div>
                <p className="font-bold text-gray-400 mb-2">Key Modules:</p>
                <div className="flex flex-wrap gap-2">
                  {modules.map((module, idx) => (
                    <span key={idx} className="bg-gray-800 text-xs text-gray-300 px-2 py-1 rounded-full border border-gray-700">
                      {module}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
