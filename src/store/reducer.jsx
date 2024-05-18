

import { CHANGE_LANGUAGE } from "./actions";
import { CHANGE_MODE } from "./actions";


export const initialState = {
  language: "en",
  darkMode:false
  };


export const reducer=(state, action)=> {
    switch (action.type) {
      case CHANGE_LANGUAGE:
        return {
          ...state,
          language: state.language === "en" ? "tr" : "en"
        };
        case CHANGE_MODE:
            return {
                ...state,
                darkMode: !state.darkMode 
            };

       
       
    }
  }
