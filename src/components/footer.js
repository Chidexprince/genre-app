import React from 'react';

const Footer = () => {
    return (
        <div className="container footer">
           <button type="button" className="btn btn-outline-secondary space btn-navigate">Back</button>
           <button type="button" className="btn btn-secondary space btn-navigate">Next</button>
           <button type="button" className="btn btn-secondary space btn-navigate">Submit</button>
        </div>
    );
};

export default Footer