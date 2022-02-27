import React, { useState, createContext, useEffect } from "react";

import { genresRequest } from "./genre-service";

export const GenresContext = createContext();

export const GenresContextProvider = ({ children }) => {
    const [genres, setGenres] = useState([]);
  
    useEffect(() => {
     
        retrieveGenres();
  
    }, []);
  
    const retrieveGenres = () => {
        setGenres([]);
      setTimeout(() => {
        genresRequest()
          .then((results) => {
            setGenres(results);
            console.log(results);
          })
          .catch((err) => {
            console.log(err);
          });
      }, 500);
    };
  
    return (
      <GenresContext.Provider
          value={{
              genres
          }}
      >
         {children}
      </GenresContext.Provider>
    )
  };