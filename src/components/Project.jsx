import React, { useContext } from "react";
import { AppContext } from '../context/AppContext.jsx';
import translations from '../translations.jsx';

const Project = () => {
  const { state } = useContext(AppContext);
  const { language } = state;
  const t = translations[language];

  return (
    <div className="flex-col justify-center bg-[#CBF281] p-20">
      <h1>{t.projects}</h1>
      {t.projectsData.map((project) => (
        <div key={project.id} className="flex max-w-4xl rounded overflow-hidden shadow-lg m-6 bg-white">
          <div className="flex-shrink-0">
            <img className="w-64 h-64 object-cover" src={project.image} alt={project.projectTitle} />
          </div>
          <div className="px-6 py-4 flex-col justify-between">
            <div>
              <div className="text-[#4731D3] font-bold text-2xl mb-2 mt-2">{project.projectTitle}</div>
              <p className=" text-base">{project.introduction}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              {project.techStack.map((tech, index) => (
                <span key={index} className="inline-block bg-[#4731D3] rounded-full px-3 py-1 text-sm font-semibold text-white  mr-2 mb-2">{tech}</span>
              ))}
            </div>
            <div className="flex space-x-4">
              
                <a href={project.github} className="text-[#4731D3] hover:underline" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
             
             
                <a href={project.website} className="text-[#4731D3] hover:underline" target="_blank" rel="noopener noreferrer">
                  Website
                </a>
          
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;