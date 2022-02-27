import React, { useState, useContext, useEffect } from 'react';

import { FormContext } from '../service/form-context';


const StepThreeForm = () => {
    const { step } = useContext(FormContext)
    const [formThree, setFormThree] = useState(step);
    return (
        <div className="container">
            {formThree === 3 && ( 
                <form>
                <input 
                type="text" 
                className="form-input" 
                name="" 
                id="" />

                <div className="form-check">
                <input className="form-checkbox" type="checkbox" value="" id="description-required" />
                <label className="form-check-label" htmlFor="description-required" >
                    Description is required for this subgenre
                </label>
                </div>
                   
            </form>
            )}
            
        </div>
    );
};

export default StepThreeForm