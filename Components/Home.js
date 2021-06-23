import Link from 'next/link'
const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <div className="home__social">
                        <Link href="/">
                            <a className="home__social-icon" target="_blank">
                                <i className="uil uil-linkedin-alt"></i>
                            </a>
                        </Link>
                        <Link href="/">
                            <a className="home__social-icon" target="_blank">
                                <i className="uil uil-dribbble"></i>
                            </a>
                        </Link>
                        <Link href="/">
                            <a className="home__social-icon" target="_blank">
                                <i className="uil uil-instagram"></i>
                            </a>
                        </Link>
                    </div>
                    <div className="home__img">
                        <h2>Developer</h2>
                        <p>KhaiHoan</p>
                    </div>
                    <div className="home__data">
                        <h2 className="home__title">Hi, I'm Hoan</h2>
                        <h3 className="home__subtitle">Front End Developer</h3>
                        <p className="home__description">I have experience and knowledge in website design and development, actively learn and develop myself to bring the best products to customers.</p>
                        
                        <Link href="#contact">
                            <a className="btn btn--flex">Contact Me <i className="uil uil-message btn-icon"></i></a>
                        </Link>
                    </div>
                </div>
                <div className="home__scroll">
                    <Link href="#about">
                    <a className="home__scroll-btn btn--flex">
                        <i className="uil uil-mouse-alt home__scroll-mouse"></i>
                        <span className="home__scroll-name">Scroll down</span>
                        <i className="uil uil-arrow-down home__scroll-arrow"></i>
                    </a>
                    </Link>
                </div>
            </div>
        </section>
    )
}
export default Home