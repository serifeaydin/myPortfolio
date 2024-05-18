import React, { useContext } from "react";
import Image2 from "../assets/image2.png";
import { AppContext } from '../context/AppContext';
import translations from '../translations.jsx';

function Profile() {
  const { state } = useContext(AppContext);
  const { language } = state;
  const t = translations[language];

  return (
    <div className="flex bg-[#4731D3] h-[552px]">
      <div className="mt-24 ml-28">
        <h1 className="text-[#CBF281] text-5xl font-bold mb-10">{t.profile}</h1>
        <h2 className="text-3xl text-white mb-[10px]">{t.informationSection.basicInformation}</h2>
        <div className="flex w-[300px] h-[290]">
          <div className="flex-col mt-[10px] text-[#CBF281] w-[150px] h-[202px] font-semibold text-lg">
            <p className="pb-2.5">{t.informationSection.dateOfBirth}</p>
            <p className="pb-2.5">{t.informationSection.city}</p>
            <p className="pb-2.5">{t.informationSection.education}</p>
            <p className="pt-7">{t.informationSection.preferredRole}</p>
          </div>
          <div className="flex-col mt-2.5 text-white w-64 text-lg">
            <p className="pb-2.5">{t.informationSection.birthday}</p>
            <p className="pb-2.5">{t.informationSection.myCity}</p>
            <p className="pb-2.5">{t.informationSection.myEducation.university}, {t.informationSection.myEducation.degree}, {t.informationSection.myEducation.year}</p>
            <p className="pb-2.5">{t.informationSection.role}</p>
          </div>
        </div>
      </div>

      <div className="flex">
        <img className="mt-32" src={Image2} alt="Profile" />
      </div>

      <div className="mt-44 w-96 h-72 mr-28">
        <h2 className="text-3xl text-white mb-6">{t.aboutMe}</h2>
        <p className="text-gray-50 text-lg">{t.aboutSection}</p>
      </div>
    </div>
  );
}

export default Profile;
