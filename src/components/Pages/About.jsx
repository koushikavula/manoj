import React from 'react';
import Header4 from '../Common/Header4';
import Footer from '../Common/Footer';
import Banner from '../Elements/Banner';

import WhatWeDo3 from '../Elements/WhatWeDo3';

import Statistics1 from '../Elements/Statistics1';
import Team1 from '../Elements/Team1';
import Team2 from '../Elements/Team2';
import ClientsLogo1 from '../Elements/ClientsLogo1';

var bnrimg = require('./../../images/banner/6.jpg');

class Home4 extends React.Component {
    componentDidMount() {
        function loadScript(src) {

            return new Promise(function (resolve, reject) {
                var script = document.createElement('script');
                script.src = src;
                script.addEventListener('load', function () {
                    resolve();
                });
                script.addEventListener('error', function (e) {
                    reject(e);
                });
                document.body.appendChild(script);
                document.body.removeChild(script);
            })
        };

        loadScript('./assets/js/custom.js');

    };
    render() {
        return (
            <>
                <Header4 />
                <div className="page-content">
                    <Banner title="About Us"  description="The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized." bgimage={bnrimg}/>
                    <WhatWeDo3 />
                    
                    
                    <Team2 />
                    
                </div>

                <Footer />
            </>
        );
    };
};

export default Home4;