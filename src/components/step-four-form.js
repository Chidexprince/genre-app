import React, { useState, useContext, useEffect } from 'react';

import { FormContext } from '../service/form-context';


const StepFourForm = () => {
    const { step } = useContext(FormContext);
    const [formFour, setFormFour] = useState(step);
    return (
        <div className="container">
             {formFour === 4 && ( 
                <form>
               <label htmlFor="book-title">Book Title</label>
               <input 
                type="text" 
                className="form-input" 
                name="" 
                placeholder="Book Title"
                id="book-title" />

               <label htmlFor="author">Author</label>
               <input 
                type="text" 
                className="form-input" 
                name="" 
                placeholder="Author"
                id="author" />

               <label htmlFor="isbn">ISBN</label>
               <input 
                type="text" 
                className="form-input" 
                name="" 
                placeholder="ISBN"
                id="isbn" />

               <label htmlFor="publisher">Publisher</label>
               <input 
                type="text" 
                className="form-input" 
                placeholder="Publisher"
                name="" 
                id="publisher" />

               <label htmlFor="date-published">Date published</label>
               <input 
                type="date" 
                className="form-input"
                name="" 
                id="date-published" />

               <label htmlFor="no-of-pages">Number of pages</label>
               <input 
                type="number" 
                className="form-input" 
                placeholder="Number of pages"
                name="" 
                id="no-of-pages" /> 

                <label htmlFor="format">Format</label>
               <input 
                type="text" 
                className="form-input" 
                placeholder="Format"
                name="" 
                id="format" />   

                <label htmlFor="edition">Edition</label>
               <input 
                type="text" 
                className="form-input" 
                placeholder="Edition"
                name="" 
                id="edition" />

                <label htmlFor="edition-language">Edition language</label>
               <input 
                type="text" 
                className="form-input" 
                placeholder="Edition language"
                name="" 
                id="edition-language" />

                <label htmlFor="description">Description</label>
               <textarea 
                type="text" 
                className="form-input"
                placeholder="Type the description..."
                rows={30} 
                name="" 
                id="description" />    
           </form>
             )}
           
        </div>
    );
};

export default StepFourForm