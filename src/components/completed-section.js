import React, { useState, useContext, useEffect } from 'react';

import { FormContext } from '../service/form-context';


const CompletedSection = () => {
    const { step } = useContext(FormContext);
    const [complete, setComplete] = useState(step);
    return (
        <div className='container'>
             {complete === 0 && ( 
                <div>
                    <p>Book added successfully</p>
                    <button type="button" className="btn btn-secondary space">Add another book</button>
                </div>
             )}
           
        </div>
    );
};

export default CompletedSection