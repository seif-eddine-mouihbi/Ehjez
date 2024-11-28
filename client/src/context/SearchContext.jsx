import { createContext, useEffect, useReducer } from 'react';

const INITIAL_STATE = {
  city: undefined,
  date: undefined,
  option: {
    adult: undefined,
    childern: undefined,
    room: undefined,
  },
};

export const SearchContext = createContext(INITIAL_STATE);

const searchReducer = (state, action) => {
  switch (action.type) {
    case 'NEW_SEARCH':
      return action.payload;
    case 'RESET_SEARCH':
      return INITIAL_STATE;
    default:
      return state;
  }
};

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(searchReducer, INITIAL_STATE);

  useEffect(() => {
    if (state.date !== undefined) {
      localStorage.setItem('date', JSON.stringify(state.date));
    } else {
      return;
    }
  }, [state.date]);

  return (
    <SearchContext.Provider
      value={{
        city: state.city,
        dates: state.date,
        option: state.option,
        dispatch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
