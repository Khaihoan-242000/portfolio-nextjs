import Link from 'next/link'

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My information</span>
            <div className="about__container container grid">
                <img src="/img/avatar.jpeg" alt="KhaiHoan Avatar" className="about__img" />
                <div className="about__data">
                    <p className="about__description">I am a web developer, with my strength in JavaScript can work with React, Nodejs, Restful API,.. In addition, I also self-taught UI / UX with the desire to bring users many great experiences. the best</p>
                     <div className="about__info">
                        <div>
                            <span className="about__info-title">4+</span>
                            <span className="about__info-name"> Industrial University <br/> IT Students </span>
                        </div>

                        <div>
                            <span className="about__info-title">1+</span>
                            <span className="about__info-name"> CFD Team <br/> Internship </span>
                        </div>

                        <div>
                            <span className="about__info-title">3+</span>
                            <span className="about__info-name"> VCLICK <br/> Junior </span>
                        </div>
                     </div>
                     <div className="about__btn">
                         <Link href="/img/avatar.jpeg">
                            <a download className="btn btn--flex">
                                Download CV <i className="uil uil-import btn-icon"></i>    
                            </a>                         
                         </Link>
                     </div>
                </div>
            </div>
        </section>
    )
}
export default About