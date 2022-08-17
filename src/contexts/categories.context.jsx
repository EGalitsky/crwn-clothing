import { createContext, useEffect, useReducer } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

import { createAction } from "../utils/reducer/reduce.utils.jsx";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CATEGORIES_ACTION_TYPES = {
  SET_CATEGORIES_MAP: "SET_CATEGORIES_MAP",
};

const categoriesReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_CATEGORIES_MAP":
      return { ...state, categoriesMap: payload };
    default:
      throw new Error(`Unhandled type ${type} in categoriesReducer`);
  }
};

const INITIAL_STATE = {
  categoriesMap: {},
};

export const CategoriesProvider = ({ children }) => {
  const [{ categoriesMap }, dispatch] = useReducer(
    categoriesReducer,
    INITIAL_STATE
  );

  const setCategoriesMap = (category) => {
    dispatch(
      createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, category)
    );
  };

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments("categories");
      setCategoriesMap(categoryMap);
    };

    getCategoriesMap();
  }, []);
  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
