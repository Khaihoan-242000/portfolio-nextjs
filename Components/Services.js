import { useState } from 'react'

const Services = () => {
    const [openModalFe, setOpenModalFe] = useState(false)
    const [openModalDe, setOpenModalDe] = useState(false)


    return (
        <section className="services section" id="services">
            <h2 className="section__title">Experience</h2>
            <span className="section__subtitle">My accumulated experience </span>

            <div className="services__container container grid">
                {/* Services 1 */}
                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">Front End <br /> Developer</h3>
                    </div>

                    <span className="btn btn--flex btn--small btn--link services__btn" onClick={() => setOpenModalFe(!openModalFe)}>
                        View More
                        <i className="uil uil-arrow-right btn__icon"></i>
                    </span>

                    {/* Modal Front End */}
                    {
                        openModalFe && <ModalFe openModalFe={openModalFe} setOpenModalFe={setOpenModalFe} />
                    }
                </div>

                {/* Services 2 */}
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">UI/UX <br /> Design</h3>
                    </div>

                    <span className="btn btn--flex btn--small btn--link services__btn" onClick={() => setOpenModalDe(!openModalDe)}>
                        View More
                        <i className="uil uil-arrow-right btn__icon"></i>
                    </span>

                    {/* Modal Design */}
                    {
                        openModalDe && <ModalDe openModalDe={openModalDe} setOpenModalDe={setOpenModalDe} />
                    }
                </div>
            </div>
        </section>
    )
}

export default Services

const ModalFe = ({ openModalFe, setOpenModalFe }) => {
    return (
        <div className="services__modal">
            <div className="services__modal-content">
                <h4 className="services__modal-title">Front End Developer</h4>
                <i className="uil uil-times services__modal-close" onClick={() => setOpenModalFe(!openModalFe)}></i>

                <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p>I develop user interfaces</p>
                    </li>
                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p>Write Google seo standard HTML code</p>
                    </li>
                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p>Website Speed Optimization</p>
                    </li>
                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p>Meet all requirements</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

const ModalDe = ({ openModalDe, setOpenModalDe }) => {
    return (
        <div className="services__modal">
            <div className="services__modal-content">
                <h4 className="services__modal-title">UI/UX Design</h4>
                <i className="uil uil-times services__modal-close" onClick={() => setOpenModalDe(!openModalDe)}></i>

                <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p>I develop user interfaces</p>
                    </li>
                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p>Write Google seo standard HTML code</p>
                    </li>
                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p>Website Speed Optimization</p>
                    </li>
                    {/* <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p>Meet all requirements</p>
                    </li> */}
                </ul>
            </div>
        </div>
    )
}