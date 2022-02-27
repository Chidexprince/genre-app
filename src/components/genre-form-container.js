import React from 'react';

import ProgressBar from './progress-bar';
import StepFourForm from './step-four-form';
import StepOneForm from './step-one-form';
import StepThreeForm from './step-three-form';
import StepTwoForm from './step-two-form';

import './genre-form-container.css';
import Footer from './footer';
import CompletedSection from './completed-section';

const GenreFormContainer = () => {
    return (
        <div>
            <ProgressBar />
            <StepOneForm />
            <StepTwoForm />
            <StepThreeForm />
            <StepFourForm />
            <Footer />
            <CompletedSection />
        </div>
    );
};

export default GenreFormContainer