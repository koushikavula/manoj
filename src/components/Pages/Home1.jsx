import React from 'react';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Slider1 from './../Elements/Slider1';
import About1 from './../Elements/About1';
import WhatWeDo1 from './../Elements/WhatWeDo1';
import Testimonials1 from './../Elements/Testimonials1';
import Services1 from './../Elements/Services1';
import Projects1 from './../Elements/Projects1';


class Home1 extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                    <Slider1 />
                    <About1 />
                    <WhatWeDo1 />
                    <Testimonials1 />
                    <Services1 />
                    <Projects1 />
                    
                    
                </div>
                <Footer />
            </>
        );
    };
};

export default Home1;