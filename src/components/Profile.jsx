import React, { useContext } from "react";
import Image2 from "../assets/image 2.png";
import { AppContext } from '../context/AppContext';
import translations from '../translations.jsx';

function Profile() {
  const { state } = useContext(AppContext);
  const { language,darkMode } = state;
  const t = translations[language];

  return (
    <div className={`${darkMode ? 'bg-[#171043]': 'bg-[#4731D3]'}`}>
      <div className="container mx-8 flex py-16 y-8">
        <div className="mt-4 w-1/3">
          <h1 className="text-[#CBF281] text-5xl font-bold mb-10">{t.profile}</h1>
          <h2 className="text-3xl text-white mb-4">{t.informationSection.basicInformation}</h2>
          <div className="flex  ">
            <div className="flex-col mt-2.5  text-[#CBF281] font-semibold text-lg w-1/2">
              <p className="pb-2.5">{t.informationSection.dateOfBirth}</p>
              <p className="pb-2.5">{t.informationSection.city}</p>
              <p className="pb-2.5">{t.informationSection.education}</p>
              <p className="pt-8">{t.informationSection.preferredRole}</p>
            </div>
            <div className="flex-col mt-2.5 text-white  text-lg">
              <p className="pb-2.5">{t.informationSection.birthday}</p>
              <p className="pb-2.5">{t.informationSection.myCity}</p>
              <p className="pb-2.5">{t.informationSection.myEducation.university}, {t.informationSection.myEducation.degree}, {t.informationSection.myEducation.year}</p>
              <p className="pb-2.5">{t.informationSection.role}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-1/3">
          <img className="mt-24" src={Image2} alt="Profile" />
        </div>
        <div className="mt-24  w-1/3">
          <h2 className="text-3xl text-white mb-8">{t.aboutMe}</h2>
          <p className="text-gray-50 text-lg">{t.aboutSection}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;