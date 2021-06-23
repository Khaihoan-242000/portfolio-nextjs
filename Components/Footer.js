import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__bg">
                <div className="footer__container container grid">
                    <div>
                        <h1 className="footer__title">KhaiHoan</h1>
                        <span className="footer__subtitle">Front End Developer</span>
                    </div>

                    <ul className="footer__links">
                        <li>
                            <Link href="#services">
                                <a className="footer__link">Services</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#portfolio">
                                <a className="footer__link">Portfolio</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#contact">
                                <a className="footer__link">Contact Me</a>
                            </Link>
                        </li>
                    </ul>

                    <div className="footer__socials">
                        <Link href="/">
                            <a className="footer__social" target="_blank">
                                <i className="uil uil-facebook-f"></i>
                            </a>
                        </Link>
                        <Link href="/">
                            <a className="footer__social" target="_blank">
                                <i className="uil uil-instagram"></i>
                            </a>
                        </Link>
                        <Link href="/">
                            <a className="footer__social" target="_blank">
                                <i className="uil uil-facebook-messenger"></i>
                            </a>
                        </Link>
                    </div>
                </div>

                <p className="footer__coppy">&#169; Khai Hoan - FigDom</p>
            </div>
        </footer>
    )
}

export default Footer