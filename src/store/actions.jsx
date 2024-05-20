export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';
export const CHANGE_MODE = 'CHANGE_MODE'; // Yeni eylem

export const changeLanguage = (language) => {
    return { type: CHANGE_LANGUAGE, payload: language };
};

export const changeMode = () => { 
    return { type: CHANGE_MODE };
};