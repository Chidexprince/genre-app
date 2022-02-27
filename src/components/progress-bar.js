import React, { useState, useContext, useEffect } from 'react';

import { FormContext } from '../service/form-context';

import './progress-bar.css';

const ProgressBar = () => {
    const { step } = useContext(FormContext);
    return (
        <div>
            <h4>Add book - New book</h4>


            <div className="progress-bar">
                <div className="step">
                    <div className={`bullet ${step === 1 ? "active" : ""}`}>
                        <span>1</span>
                    </div>
                    <p>Genre</p>
                </div>
                <div className="step">
                    <div className={`bullet ${step === 2 ? "active" : ""}`}>
                        <span>2</span>
                    </div>
                    <p>Subgenre</p>
                </div>
                <div className="step">
                    <div className={`bullet ${step === 3 ? "active" : ""}`}>
                        <span>3</span>
                    </div>
                    <p>Add new subgenre</p>
                </div>
                <div className="step">
                    <div className={`bullet ${step === 4 ? "active" : ""}`}>
                        <span>4</span>
                    </div>
                    <p>Information</p>
                </div>

            </div>
        </div>
    );
};

export default ProgressBar