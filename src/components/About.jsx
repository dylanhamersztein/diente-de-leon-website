import React from 'react';
import {
  SiKotlin,
  SiSpringboot,
  SiKubernetes,
  SiDocker,
  SiPostgresql,
  SiJavascript,
  SiTypescript,
  SiGit,
  SiGithub,
  SiBitbucket,
  SiAngular,
  SiAmazon,
  SiUbuntu,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          I am a problem solver with an ability to learn and implement new
          practices quickly. Capable of working as part of a larger team, but
          also accepting of responsibility to complete projects in more
          independent settings. Primarily interested in object-oriented
          programming; JVM languages; writing robust, efficient, and performant
          code; and algorithm design.
        </p>

        <br />

        <p className="text-xl">
          Based in NW London and enjoy playing golf, drums, and working on pet
          programming projects in my spare time. Native speaker of English,
          Spanish, and Hebrew.
        </p>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          <div className="shadow-md shadow-orange-500 hover:scale-105 duration-500 py-2 rounded-lg">
            <FaJava className="mx-auto text-6xl text-orange-500" />
            <p className="mt-4">Java</p>
          </div>
          <div className="shadow-md shadow-blue-500 hover:scale-105 duration-500 py-2 rounded-lg">
            <SiKotlin className="mx-auto text-6xl text-blue-500" />
            <p className="mt-4">Kotlin</p>
          </div>
          <div className="shadow-md shadow-green-500 hover:scale-105 duration-500 py-2 rounded-lg">
            <SiSpringboot className="mx-auto text-6xl text-green-500" />
            <p className="mt-4">Spring Boot</p>
          </div>
          <div className="shadow-md shadow-blue-600 hover:scale-105 duration-500 py-2 rounded-lg">
            <SiKubernetes className="mx-auto text-6xl text-blue-600" />
            <p className="mt-4">Kubernetes</p>
          </div>
          <div className="shadow-md shadow-blue-400 hover:scale-105 duration-500 py-2 rounded-lg">
            <SiDocker className="mx-auto text-6xl text-blue-400" />
            <p className="mt-4">Docker</p>
          </div>
          <div className="shadow-md shadow-blue-300 hover:scale-105 duration-500 py-2 rounded-lg">
            <SiPostgresql className="mx-auto text-6xl text-blue-300" />
            <p className="mt-4">PostgreSQL</p>
          </div>
          <div className="shadow-md shadow-yellow-500 hover:scale-105 duration-500 py-2 rounded-lg">
            <SiJavascript className="mx-auto text-6xl text-yellow-500" />
            <p className="mt-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-blue-500 hover:scale-105 duration-500 py-2 rounded-lg">
            <SiTypescript className="mx-auto text-6xl text-blue-500" />
            <p className="mt-4">TypeScript</p>
          </div>
          <div className="shadow-md shadow-orange-600 hover:scale-105 duration-500 py-2 rounded-lg">
            <SiGit className="mx-auto text-6xl text-orange-600" />
            <p className="mt-4">Git</p>
          </div>
          <div className="shadow-md shadow-gray-400 hover:scale-105 duration-500 py-2 rounded-lg">
            <SiGithub className="mx-auto text-6xl text-gray-400" />
            <p className="mt-4">GitHub</p>
          </div>
          <div className="shadow-md shadow-blue-500 hover:scale-105 duration-500 py-2 rounded-lg">
            <SiBitbucket className="mx-auto text-6xl text-blue-500" />
            <p className="mt-4">Bitbucket</p>
          </div>
          <div className="shadow-md shadow-red-500 hover:scale-105 duration-500 py-2 rounded-lg">
            <SiAngular className="mx-auto text-6xl text-red-500" />
            <p className="mt-4">Angular</p>
          </div>
          <div className="shadow-md shadow-orange-400 hover:scale-105 duration-500 py-2 rounded-lg">
            <SiAmazon className="mx-auto text-6xl text-orange-400" />
            <p className="mt-4">AWS</p>
          </div>
          <div className="shadow-md shadow-orange-500 hover:scale-105 duration-500 py-2 rounded-lg">
            <SiUbuntu className="mx-auto text-6xl text-orange-500" />
            <p className="mt-4">Ubuntu</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
