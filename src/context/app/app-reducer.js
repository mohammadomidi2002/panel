const appReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_LANGUAGE": {
      return {
        ...state,
        language: action.payload,
      };
    }
    case "CHANGE-THEME": {
      return {
        ...state,
        theme: action.payload,
      }
    }
  }
};

export default appReducer;
