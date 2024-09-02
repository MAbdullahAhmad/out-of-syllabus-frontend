import React from 'react';

import { LandingSection, Introduction, Testimonials } from './components';

export const HomePage : React.FC = () => {
    return (
        <div>
            <LandingSection />
            <Introduction />
            <Testimonials />
        </div>
    );
}
