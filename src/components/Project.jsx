import React, { useContext } from "react";
import { AppContext } from '../context/AppContext.jsx';
import translations from '../translations.jsx';

const Project = () => {
  const { state } = useContext(AppContext);
  const { language, darkMode } = state;
  const t = translations[language];

  return (
    <div className={`${darkMode ? 'bg-[#1A210B]' : 'bg-[#CBF281]'} py-8`}>
      <div className="container mx-auto px-4">
        <h1 className={`${darkMode ? 'text-[#CBF281]' : 'text-[#4731D3]'} text-5xl font-bold mb-6`}>{t.projects}</h1>
        {t.projectsData.map((project) => (
          <div key={project.id} className={`${darkMode ? 'bg-[#2B2727]' : 'bg-white'} flex flex-wrap rounded overflow-hidden shadow-lg mb-8`}>
            <div className="w-full md:w-4/12 flex-shrink-0">
              <img className="w-full h-auto" src={project.image} alt={project.projectTitle} />
            </div>
            <div className="w-full md:w-8/12 p-6 flex flex-col justify-between">
              <div>
                <div className="text-[#4731D3] font-bold text-2xl mb-4">{project.projectTitle}</div>
                <p className="text-base">{project.introduction}</p>
              </div>
              <div className="pt-4 pb-2">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="inline-block bg-[#4731D3] rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-4">{tech}</span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a href={project.github} className={`${darkMode ? 'text-white' : 'text-[#4731D3]'} hover:underline`} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href={project.website} className={`${darkMode ? 'text-white' : 'text-[#4731D3]'} hover:underline`} target="_blank" rel="noopener noreferrer">
                  Website
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;