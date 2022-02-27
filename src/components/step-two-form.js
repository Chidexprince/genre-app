import React, { useState, useContext, useEffect } from 'react';

import { FormContext } from '../service/form-context';
const StepTwoForm = () => {
    const { step } = useContext(FormContext)
    const [formTwo, setFormTwo] = useState(step);
    return (
        <div className='container genre-group'>
            {formTwo === 2 && (
                <button type="button" className="btn btn-outline-secondary space">Sub Genre 1</button>
             )}
        </div>
    );
};

export default StepTwoForm