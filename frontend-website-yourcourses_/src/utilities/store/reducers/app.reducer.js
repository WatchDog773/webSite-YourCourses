// Primero: el estado inicial
const emptyApp = {
  initialized: false,
  minTimeElapsed: false,
};

// Segundo: la definicion de las constantes, el tipo
export const APP_INIT = "APP_INIT";
export const APP_MIN = "APP_MIN";

// Tercero:
const appReducer = (state = emptyApp, action = {}) => {
  switch (action.type) {
    case APP_INIT:
      return {
        ...state,
        initialized: true,
      };

    case APP_MIN:
      return {
        ...state,
        minTimeElapsed: true,
      };

    default: {
      return state;
    }
  }
};

export default appReducer;
