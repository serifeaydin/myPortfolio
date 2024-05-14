

import { CHANGE_LANGUAGE } from "./actions";

export const initialState = {
  language: "en",
  darkMode:false
  };


const reducer=(state, action) {
    switch (action.type) {
      case CHANGE_LANGUAGE:
        return {
          ...state,
          language: state.language === "en" ? "tr" : "en"
        };

        
       
    }
  }
  