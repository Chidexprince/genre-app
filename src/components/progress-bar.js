import React from 'react';

import './progress-bar.css';

const ProgressBar = () => {
    return (
        <div>
            <h4>Add book - New book</h4>


            <div className="progress-bar">
                <div className="step">
                    <div className="bullet">
                        <span>1</span>
                    </div>
                    <p>Genre</p>
                </div>
                <div className="step">
                    <div className="bullet">
                        <span>2</span>
                    </div>
                    <p>Subgenre</p>
                </div>
                <div className="step">
                    <div className="bullet">
                        <span>3</span>
                    </div>
                    <p>Add new subgenre</p>
                </div>
                <div className="step">
                    <div className="bullet">
                        <span>4</span>
                    </div>
                    <p>Information</p>
                </div>

            </div>
        </div>
    );
};

export default ProgressBar