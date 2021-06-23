import Link from 'next/link'

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"

import SwiperCore, {
    Navigation, Pagination, Mousewheel, Keyboard
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);


const Portfolio = () => {
    return (
        <section className="portfolio section" id="portfolio">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">Outstanding project</span>

            <div className="portfolio__container container">
                <Swiper cssMode={true} navigation={true} pagination={true} mousewheel={true} keyboard={true} className="mySwiper">
                    {/* portfolio 1 */}
                    <SwiperSlide>
                        <div className="portfolio__content grid">
                            <img src="/img/slider-01.jpeg" alt="" className="portfolio__img" />

                            <div className="portfolio__data">
                                <h3 className="portfolio__title">Coffee Website</h3>
                                <p className="portfolio__description">Website adaptable to all devices, with ui components
                                    and animated interactions.</p>
                                <Link href="/">
                                    <a className="btn btn--flex btn--small portfolio__btn">
                                        Demo
                                        <i className="uil uil-arrow-right btn__icon"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* portfolio 2 */}
                    <SwiperSlide>
                        <div className="portfolio__content grid">
                            <img src="/img/slider-02.jpeg" alt="" className="portfolio__img" />

                            <div className="portfolio__data">
                                <h3 className="portfolio__title">Coffee Website</h3>
                                <p className="portfolio__description">Website adaptable to all devices, with ui components
                                    and animated interactions.</p>
                                <Link href="/">
                                    <a className="btn btn--flex btn--small portfolio__btn">
                                        Demo
                                        <i className="uil uil-arrow-right btn__icon"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* portfolio 3 */}
                    <SwiperSlide>
                        <div className="portfolio__content grid">
                            <img src="/img/slider-03.jpeg" alt="" className="portfolio__img" />

                            <div className="portfolio__data">
                                <h3 className="portfolio__title">Coffee Website</h3>
                                <p className="portfolio__description">Website adaptable to all devices, with ui components
                                    and animated interactions.</p>
                                <Link href="/">
                                    <a className="btn btn--flex btn--small portfolio__btn">
                                        Demo
                                        <i className="uil uil-arrow-right btn__icon"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* portfolio 4 */}
                    <SwiperSlide>
                        <div className="portfolio__content grid">
                            <img src="/img/slider-04.png" alt="" className="portfolio__img" />

                            <div className="portfolio__data">
                                <h3 className="portfolio__title">Coffee Website</h3>
                                <p className="portfolio__description">Website adaptable to all devices, with ui components
                                    and animated interactions.</p>
                                <Link href="/">
                                    <a className="btn btn--flex btn--small portfolio__btn">
                                        Demo
                                        <i className="uil uil-arrow-right btn__icon"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}
export default Portfolio