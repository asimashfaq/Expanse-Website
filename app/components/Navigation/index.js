/* eslint-disable */

import React from 'react';
import Scroll  from 'react-scroll';
import About from '../About/index';
import Home from '../Home';
import Services from '../Services';
import SkillArea from '../SkillArea';
import Buy from '../Buy';
import Contact from '../ContactUs';
import Footer from '../Footer';
import ScrollEvent from 'react-onscroll';
import Team from '../Team';

var Link       = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;


class Navigation extends React.Component {

    componentDidMount() {
        Events.scrollEvent.register('begin', function(to, element) {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function(to, element) {
            console.log("end", arguments);
        });

        scrollSpy.update();



    }
    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }
    scrollToTop() {
        scroll.scrollToTop();
    }
    scrollToBottom() {
        scroll.scrollToBottom();
    }
    scrollTo() {
        scroll.scrollTo(100);
    }
    scrollMore() {
        scroll.scrollMore(100);
    }
    handleSetActive(to) {
        console.log(to);
    }

    render() {
       // (generaterParticles())
        return (
            <div>
                <header id="home">
                    <div className="main-navigation sticky-header">
                        <div className="container">
                            <div className="row">

                                <div className="col-lg-2 col-md-2 col-sm-3 col-xs-10" id="expanse_logo">
                                    <div className="logo-area">
                                        <a href="#">
                                            <img src={require('../../img/logo.png')} />
                                        </a>
                                    </div>
                                </div>

                                <div className="col-lg-8 col-md-8 col-sm-7 col-xs-2" >
                                    <div className="menubar">
                                        <nav >
                                            <ul className="text-right" id="menu" >
                                                <li>
                                                    <Link activeClass="active" to="home" spy={true} smooth={true} duration={500}>
                                                        Home
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="about" spy={true} smooth={true} duration={500}>
                                                        about
                                                    </Link>
                                                </li>

                                                <li className="dropdown">
                                                    <a className="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        Mining<span className="caret"></span>
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li><a href="http://pool.expanse.tech/">EXP.POOL</a></li>
                                                        <li><a href="https://exp.suprnova.cc/">suprnova</a></li>
                                                        <li><a href="http://dwarfpool.com/exp">dwarfpool</a></li>
                                                        <li><a href="http://exp.akasha-pool.eu/">akasha</a></li>
                                                        <li><a href="http://exp.digger.ws/">Digger.ws</a></li>
                                                    </ul>
                                                </li>

                                                <li>
                                                    <Link to="buy" spy={true} smooth={true} duration={500}>
                                                        buy
                                                    </Link>
                                                </li>
                                                <li><a href="http://explorer.expanse.tech">explore</a></li>
                                                <li><a href="http://docs.expanse.tech">docs</a></li>
                                                <li><a href="http://blog.expanse.tech">news</a></li>
                                                <li>
                                                    <Link to="contact" spy={true} smooth={true} duration={500}>
                                                        contact
                                                    </Link>
                                                </li>


                                            </ul>
                                        </nav>

                                    </div>

                                </div>
                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12" id="expanse_lang">
                                    <div className="lang-container">
                                        <div className="btn-group bootstrap-select btn-cta fit-width"><button type="button" className="btn dropdown-toggle btn-new" data-toggle="dropdown" role="button" title="English"><span className="filter-option pull-left"><span className="flag-icon flag-icon-us"></span> English</span>&nbsp;<span className="bs-caret"><span className="caret"></span></span></button><div className="dropdown-menu open" role="combobox"><ul className="dropdown-menu inner" role="listbox" aria-expanded="false"><li data-original-index="0" className="selected"><a tabIndex="0" className="" data-tokens="null" role="option" aria-disabled="false" aria-selected="true"><span className="flag-icon flag-icon-us"></span> English<span className="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="1"><a tabIndex="0" className="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="flag-icon flag-icon-cn"></span> 中文<span className="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="2"><a tabIndex="0" className="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="flag-icon flag-icon-jp"></span> 日本語<span className="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="3"><a tabIndex="0" className="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="flag-icon flag-icon-mx"></span> Español<span className="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="4"><a tabIndex="0" className="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="flag-icon flag-icon-kr"></span> 한국어<span className="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="5"><a tabIndex="0" className="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="flag-icon flag-icon-ru"></span> русский<span className="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="6"><a tabIndex="0" className="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="flag-icon flag-icon-de"></span> Deutsche<span className="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="7"><a tabIndex="0" className="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="flag-icon flag-icon-fr"></span> français<span className="glyphicon glyphicon-ok check-mark"></span></a></li></ul></div><select data-style="btn-new" className="selectpicker btn-cta" data-width="fit" onChange="window.location = '?lang='+this.value+''" tabIndex="-98">
                                            <option value="english" selected="selected" data-content="<span class=&quot;flag-icon flag-icon-us&quot;></span> English">English</option>
                                            <option value="chinese" data-content="<span className=&quot;flag-icon flag-icon-cn&quot;></span> 中文">中文</option>
                                            <option value="japanese" data-content="<span className=&quot;flag-icon flag-icon-jp&quot;></span> 日本語">日本語</option>
                                            <option value="spanish" data-content="<span className=&quot;flag-icon flag-icon-mx&quot;></span> Español">Español</option>
                                            <option value="korean" data-content="<span className=&quot;flag-icon flag-icon-kr&quot;></span> 한국어">한국어</option>
                                            <option value="russian" data-content="<span className=&quot;flag-icon flag-icon-ru&quot;></span> русский">русский</option>
                                            <option value="german" data-content="<span className=&quot;flag-icon flag-icon-de&quot;></span> Deutsche">Deutsche</option>
                                            <option value="french" data-content="<span className=&quot;flag-icon flag-icon-fr&quot;></span> français">français</option>




                                        </select></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <Element name="home" className="element">
                    <Home />
                </Element>

                <Element name="about" className="element">

                    <About/>
                    <Services/>
                    <SkillArea/>
                </Element>
                <Element name="buy" className="element">
                    <Buy/>
                    <Team/>
                </Element>
                <Element name="contact" className="element">
                    <Contact/>
                </Element>
                <Footer/>

                {/*<div id="scrollUp"><a onClick={this.scrollToTop}>To the top!</a></div>*/}

                {/*<br/>
                <a onClick={this.scrollToBottom}>To the bottom!</a>
                <br/>
                <a onClick={this.scrollTo}>Scroll to 100px from the top</a>
                <br/>
                <a onClick={this.scrollMore}>Scroll 100px more from the current position!</a>*/}
            </div>
        );
    }
};
export default Navigation;
