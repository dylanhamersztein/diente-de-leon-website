import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Policy Expert',
      duration: '2023 - Present',
      description:
        'Senior fullstack role involving greenfield development of front-end solutions, and integration of existing backend systems with those of external vendors.',
      points: [
        'Creating a CRM system to handle new products being rolled out to market.',
        'Integrating our policy lifecycle management system with new third-party vendors.',
        'Writing tooling to improve developer workflows.',
      ],
    },
    {
      id: 2,
      role: '10x Banking',
      duration: '2021 - 2022',
      description:
        'Maintaining and developing a set of microservices responsible for storing and publishing customer data through restful HTTP endpoints or Kafka topics.',
      points: [
        'Maintaining legacy APIs used by clients.',
        'Designing and implementing new APIs.',
        'Out of hours support.',
        'Improving code quality by addressing technical debt.',
      ],
    },
    {
      id: 3,
      role: 'CMC Markets',
      duration: '2020 - 2021',
      description:
        'Working within the Java Core Services team to maintain and upgrade microservices responsible for payments, compliance and internationalisation of the main Trading Application.',
      points: [
        'Integrating with an external provider of PRIIPs financial analysis data for compliance purposes.',
        "Overhauling trading platform's onboarding process and creating an application form management tool.",
        'Integrating with an external provider of Address and Identity Verification services.',
        'Maintaining and improving the payments system used by clients to deposit and withdraw trading account funds.',
        'Various changes to administration tools used by non-technical employees to manage and configure services relevant to their work.',
      ],
    },
    {
      id: 4,
      role: 'Caplin Systems',
      duration: '2017 - 2020',
      description:
        'I joined Caplin Systems to participate in their graduate developer program, during which I spent time rotating several teams in the company undertaking tasks such as:',
      points: [
        'Integrating functionality from external providers of trading data/services into the Caplin stack.',
        'Improving and maintaining the main mock trading platform used by the front-end teams.',
        'Maintaining and creating new JavaScript components for BladeRunnerJS, a proprietary library for creating FX trading platforms.',
        'Contributing to the DevOps effort by creating new Chef recipes, Packer templates, Docker containers, and slack bots.',
      ],
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 px-12 sm:px-0">
          {experiences.map(({ id, role, duration, description, points }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg p-6 bg-gray-900 hover:scale-105 duration-300">
              <h3 className="text-2xl font-bold mb-2">{role}</h3>
              <p className="text-gray-400 mb-4">{duration}</p>
              <p className="mb-4 text-gray-300">{description}</p>
              <ul className="list-disc list-outside ml-5 text-gray-400 space-y-2">
                {points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
