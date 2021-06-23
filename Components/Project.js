import Link from 'next/link'


const Project = () => {
    return (
        <section className="project section">
            <div className="project__bg">
                <div className="project__container container grid">
                    <div className="project__data">
                        <h2 className="project__title">You have a new project</h2>
                        <span className="project__description">Contact me now and get a 30% discount on your new project.</span>
                        <Link href="#contact">
                            <a className="btn btn--flex btn--white">
                                Contact Me
                                <i className="uil uil-message project__icon btn__icon"></i>
                            </a>
                        </Link>
                    </div>

                    <img src="/img/avatar-02.jpeg" alt="" className="project__img" />
                </div>
            </div>
        </section>
    )
}

export default Project