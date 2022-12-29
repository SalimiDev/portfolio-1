import React from 'react';

// components
import { Navbar } from './components';
//container
import { About, Footer, Header, Skills, Testimonial, Work, work } from './container';

const App = () => {
    return (
        <div className='app'>
            <Navbar />
            <Header />
            <About />
            <Work />
            <Skills />
            <Testimonial />
            <Footer />
        </div>
    );
};

export default App;
