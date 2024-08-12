import React from 'react';
import CountUp from 'react-countup';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const testimonials = [
    {
        image: require('./../../images/testimonials/pic1.jpg'),
        reviewername: 'Ramesh Gupta',
        position: 'Vijayawada',
        review: '“ I had a fantastic experience with Intaa Interiors! Their team transformed my living room into a modern yet cozy space that my family and I love spending time in. From the initial consultation to the final touches, their attention to detail and dedication to quality were evident. I highly recommend Intaa Interiors to anyone looking to revamp their home.”'
    },
    {
        image: require('./../../images/testimonials/pic2.jpg'),
        reviewername: 'Priya Sharma',
        position: 'Bengaluru',
        review: '“Choosing Intaa Interiors for our office renovation was the best decision we made. They understood our needs perfectly and designed a space that is both functional and stylish. The project was completed on time and within budget, exceeding our expectations. Thank you, Intaa Interiors, for creating such an inspiring work environment!”'
    },
    {
        image: require('./../../images/testimonials/pic3.jpg'),
        reviewername: 'Anjali Varma',
        position: 'Hyderabad',
        review: '“Intaa Interiors did an amazing job with our new kitchen. Their innovative designs and use of space have made our kitchen more efficient and beautiful. The team was professional, friendly, and always open to our suggestions. We are extremely satisfied with the outcome and would definitely recommend their services to others.”'
    },
    
]

var bgimg1 = require('./../../images/background/bg-2.jpg');
var bgimg2 = require('./../../images/background/bg-5.png');
var bgimg3 = require('./../../images/background/cross-line2.png');
var bgimg4 = require('./../../images/background/bg-12.jpg');

class Testimonials1 extends React.Component {
    render() {
        const options = {
            loop: true,
            autoplay: true,
            margin: 30,
            autoplayTimeout: 6000,
            nav: false,
            dots: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                991: {
                    items: 1
                }
            }
        };
        return (
            <>
                <div className="section-full container-fluid">
                    <div className="section-content">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-12 bg-gray bg-cover bg-no-repeat" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                                
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 bg-white bg-repeat" style={{ backgroundImage: 'url(' + bgimg4 + ')' }}>
                                <div className="sx-right-part mobile-page-padding  p-t80 p-b50">
                                    {/* TITLE START */}
                                    <div className="section-head">
                                        <div className="sx-separator-outer separator-left">
                                            <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg3 + ')' }}>
                                                <h3 className="sep-line-one">Testimonial</h3>
                                            </div>
                                        </div>
                                    </div>
                                    {/* TITLE END */}
                                    {/* TESTIMONIAL START */}
                                    <OwlCarousel className="owl-carousel testimonial-home number-slider" {...options}>
                                        {testimonials.map((item, index) => (
                                            <div className="item" key={index}>
                                                <div className="testimonial-2  hover-animation-1">
                                                    <div className="testimonial-detail clearfix">
                                                        <div className="testimonial-pic shadow scale-in-center"><img src={item.image} alt="" width={100} height={100} /></div>
                                                        <h4 className="testimonial-name">{item.reviewername}</h4>
                                                        <span className="testimonial-position">{item.position}</span>
                                                        <span className="fa fa-quote-right" />
                                                    </div>
                                                    <div className="testimonial-text bg-white  shadow-sm">
                                                        <p>{item.review}</p>
                                                    </div>
                                                </div>
                                            </div>

                                        ))}

                                    </OwlCarousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Testimonials1;