const Contact = () => {
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Contact Me</h2>
            <span className="section__subtitle">Get in touch</span>

            <div className="contact__container container grid">
                <div>
                    <div className="contact__info">
                        <i className="uil uil-phone contact__icon"></i>

                        <div>
                            <h3 className="contact__title">Call me</h3>
                            <span className="contact__subtitle">+84 677-091-810</span>
                        </div>
                    </div>

                    <div className="contact__info">
                        <i className="uil uil-envelope contact__icon"></i>

                        <div>
                            <h3 className="contact__title">Gmail</h3>
                            <span className="contact__subtitle">hoan.lekhaihoan@gmail.com</span>
                        </div>
                    </div>

                    <div className="contact__info">
                        <i className="uil uil-map-marker contact__icon"></i>

                        <div>
                            <h3 className="contact__title">Address</h3>
                            <span className="contact__subtitle">Chung cư Garden Gate Novaland - 08 Hoàng Minh Giám - Phường 9 - Phú Nhuận - Tp.HCM</span>
                        </div>
                    </div>
                </div>

                <form action="" className="contact__form grid">
                    <div className="contact__inputs grid">
                        <div className="contact__content">
                            <label className="contact__label">Name</label>
                            <input className="contact__input" type="text" />
                        </div>
                        <div className="contact__content">
                            <label className="contact__label">Gmail</label>
                            <input className="contact__input" type="email" />
                        </div>
                    </div>

                    <div className="contact__content">
                        <label className="contact__label">Project</label>
                        <input className="contact__input" type="text" />
                    </div>
                    <div className="contact__content">
                        <label className="contact__label">Message</label>
                        <textarea className="contact__input" cols="0" rows="7"></textarea>
                    </div>

                    <div>
                        <p className="btn btn--flex">
                            Send Message
                            <i className="uil uil-message btn__icon"></i>
                        </p>
                    </div>
                </form>

            </div>
        </section>
    )
}

export default Contact