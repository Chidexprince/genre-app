import React from 'react';


const StepThreeForm = () => {
    return (
        <div className="container">
            <form>
                <input 
                type="text" 
                className="form-input" 
                name="" 
                id="" />

                <div class="form-check">
                <input class="form-checkbox" type="checkbox" value="" id="description-required" />
                <label class="form-check-label" htmlFor="description-required" >
                    Description is required for this subgenre
                </label>
                </div>
                   
            </form>
        </div>
    );
};

export default StepThreeForm