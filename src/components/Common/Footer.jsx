import React from 'react';
import { NavLink } from 'react-router-dom';
import Switcher from '../Elements/Switcher';

class Footer extends React.Component {
    render() {

        return (
            <>
                <footer className="site-footer footer-large  footer-dark	footer-wide">
                    {/* FOOTER BLOCKES START */}
                    <div className="footer-top overlay-wraper">
                        <div className="overlay-main" />
                        <div className="container">
                            <div className="row">
                                {/* ABOUT COMPANY */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget widget_about">
                                        {/*<h4 class="widget-title">About Company</h4>*/}
                                        <div className="logo-footer clearfix p-b15">
                                            <NavLink to={"./"}>
                                                <img src={require('./../../images/logo-light.png')} alt="Inteshape" />
                                            </NavLink>
                                        </div>
                                        <p>Intaa Interiors transforms spaces with innovative designs, blending functionality and aesthetics to create personalized, stunning interiors for every client.</p>
                                        <ul className="social-icons  sx-social-links">
                                            
                                            <li><a href="https://www.facebook.com/profile.php?id=61562552330048" aria-label="1"> <i className="fa fa-facebook" rel="noreferrer"target="_blank"></i></a></li>
                                            <li><a href="https://www.linkedin.com/company/intaa-interiors/about/"aria-label="2"> <i className="fa fa-linkedin"rel="noreferrer" target="_blank" ></i></a></li>
                                            <li><a href="https://www.instagram.com/intaainteriors"aria-label="3"> <i className="fa fa-instagram" rel="noreferrer"target="_blank"></i> </a> </li>
                                        </ul>
                                    </div>
                                </div>
                               
                                {/* USEFUL LINKS */}
                                <div className="col-lg-3 col-md-6 col-sm-6 footer-col-3">
                                    <div className="widget widget_services inline-links">
                                        <h5 className="widget-title">Useful links</h5>
                                        <ul>
                                            <li><NavLink to={"/about-1"}>About</NavLink></li>
                                            <li><NavLink to={"/services-1"}>Services</NavLink></li>
                                            <li><NavLink to={"/project-grid-3-columns"}>Projects</NavLink></li>
                                            
                                            <li><NavLink to={"/contact-us"}>Contact Us</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* CONTACT US */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget widget_address_outer">
                                        <h5 className="widget-title">Contact Us</h5>
                                        <ul className="widget_address">
                                            <li>Kondapur,Hyderabad, Telangana</li>
                                            <li>intaainterios@gmail.com</li>
                                            <li>+91 7674060206</li>
                                            <li>+91 9959099397</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                    {/* FOOTER COPYRIGHT */}
                    <div className="footer-bottom overlay-wraper">
                        <div className="overlay-main" />
                        <div className="container">
                            <div className="row">
                                <div className="sx-footer-bot-left">
                                    <span className="copyrights-text">© 2024 Intaa Interiors. Designed By CYBROSPHERE SOLUTIONS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <Switcher/>

            </>
        );
    };
};

export default Footer;