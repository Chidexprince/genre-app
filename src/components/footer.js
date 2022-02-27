import React, { useState, useContext, useEffect } from 'react';

import { FormContext } from '../service/form-context';

const Footer = () => {
    const { step } = useContext(FormContext)
    const [newStep, setNewStep] = useState(step);
    return (
        <div className="container footer">
            {newStep !== 1 && (  
                <button type="button" className="btn btn-outline-secondary space btn-navigate">Back</button>
            )}
           
           {newStep !== 4 && (
            <button type="button" className="btn btn-secondary space btn-navigate">Next</button>
           )}

           {newStep === 4 && (
            <button type="button" className="btn btn-secondary space btn-navigate">Add</button>
           )}
           
        </div>
    );
};

export default Footer