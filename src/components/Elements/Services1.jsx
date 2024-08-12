import React from 'react';
import { NavLink } from 'react-router-dom';

const services = [
    {
        count: '01',
        title: 'Exteriors',
        flaticon: 'flaticon-sketch',
        description: 'Crafting stunning facades that blend functionality with aesthetic appeal.',
    },
    {
        count: '02',
        title: 'Interiors',
        flaticon: 'flaticon-stairs',
        description: 'Designing sophisticated and comfortable living spaces that reflect your style.',
    },
    {
        count: '03',
        title: 'Decor',
        flaticon: 'flaticon-window',
        description: 'Enhancing spaces with unique and elegant decor elements that inspire.',
    },
    {
        count: '04',
        title: 'Modulars',
        flaticon: 'flaticon-skyline',
        description: 'Innovative modular solutions for efficient, adaptable, and modern living.',
    },
    {
        count: '05',
        title: 'Styling',
        flaticon: 'flaticon-bed',
        description: 'Curating cohesive styles that bring your vision to life with impeccable taste.',
    },
    {
        count: '06',
        title: 'Wall Art',
        flaticon: 'flaticon-door',
        description: 'Transforming walls into artful expressions with bespoke, captivating pieces.',
    }
]

var bgimg1 = require('./../../images/background/cross-line2.png');

class Services1 extends React.Component {
    render() {

        return (
            <>
                <div className="section-full mobile-page-padding p-t80  p-b50 bg-gray">
                    <div className="section-content">
                        <div className="container">
                            {/* TITLE START */}
                            <div className="section-head">
                                <div className="sx-separator-outer separator-left">
                                    <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                                        <h3 className="sep-line-one ">All Services</h3>
                                    </div>
                                </div>
                            </div>
                            {/* TITLE END */}
                            <div className="row">
                                {services.map((item, index) => (
                                    <div className="col-lg-4 col-md-6 col-sm-12 m-b30" key={index}>
                                        <div className="sx-icon-box-wraper  icon-count-2-outer">
                                            <div className="icon-count-2 bg-white">
                                                <span className="icon-count-number">{item.count}</span>
                                                <div className="icon-xl inline-icon m-b5 scale-in-center">
                                                    <span className="icon-cell"><i className={item.flaticon} /></span>
                                                </div>
                                                <div className="icon-content">
                                                    <h4 className="sx-tilte">{item.title}</h4>
                                                    <p>{item.description}</p>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="hilite-title text-left p-l50 text-uppercase">
                        <strong>Services</strong>
                    </div>
                </div>
            </>
        );
    }
};

export default Services1;