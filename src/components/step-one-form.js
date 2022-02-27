import React, { useState, useContext, useEffect } from 'react';

import { FormContext } from '../service/form-context';


const StepOneForm = () => {
    const { step } = useContext(FormContext);
    const [formOne, setFormOne] = useState(step);

    // useEffect(() => { 
    //     setFormOne(formOne)
    // }, [formOne])

    return (
        <div className='container genre-group'>
            {formOne === 1 && (
                <button type="button" className="btn btn-outline-secondary space">Genre 1</button>
            )}
           
        </div>
    );
};

export default StepOneForm