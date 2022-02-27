import React, { useState, createContext } from "react";

export const FormContext = createContext();

export const FormContextProvider = ({ children }) => {
    // step 1,2,3,4, then 0 for completed
    const [step, setStep] = useState(1);

  

  

  
    return (
      <FormContext.Provider
          value={{
            step
          }}
      >
         {children}
      </FormContext.Provider>
    )
  };