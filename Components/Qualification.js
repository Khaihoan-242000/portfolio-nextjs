import {useState} from 'react'

const Qualification = () => {
    const [openEducation, setOpenEducation] = useState(true)
    const [openWord, setOpenWord] = useState(false)

    const handleOpenEducation = () => {
       if(openEducation === false) {
            setOpenEducation(true)
            setOpenWord(false)
            return ;
       } 
       return ;
    }
    const handleOpenWord = () => {
        if(openWord === false) {
            setOpenWord(true)
            setOpenEducation(false)
            return;
        }
        return ;
    }
    
    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={openEducation ? `qualification__btn btn--flex active` : `qualification__btn btn--flex`} onClick={handleOpenEducation}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>

                    <div className={openEducation ? `qualification__btn btn--flex` : `qualification__btn btn--flex active`} onClick={handleOpenWord}>
                        <i className="uil uil-bag qualification__icon"></i>
                        Work
                    </div>
                </div>
                <div className="qualification__section">
                    {/* qualification content 1 */}
                    <div className={openEducation ? `qualification__content qualification__open` : `qualification__content qualification__close`}>
                        {/* qualification 1 */}
                        <div className="qualification__data">
                            <div>
                                <h2 className="qualification__title">Information Technology</h2>
                                <span className="qualification__subtitle">Industrial University - HCM</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2015 - 2018
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rouder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        {/* qualification 2 */}
                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rouder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h2 className="qualification__title">Front End Developer</h2>
                                <span className="qualification__subtitle">CFD Team - CFD4</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2018 - 2019
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* qualification content 2 */}
                    <div className={openWord ? `qualification__content qualification__open` : `qualification__content qualification__close`}>
                        {/* qualification 1 */}
                        <div className="qualification__data">
                            <div>
                                <h2 className="qualification__title">Front End Developer</h2>
                                <span className="qualification__subtitle">Purchase Manager - VCLICK</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2019 - 2021
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rouder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification