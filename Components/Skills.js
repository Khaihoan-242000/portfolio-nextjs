import {useState} from 'react'

const Skills = () => {

    const [openSkillsFe, setOpenSkillsFe] = useState(false)
    const [openSkillsDe, setOpenSkillsDe] = useState(false)

    const handleOpenSkillsFe = () => {
        if(openSkillsFe == false) {
            setOpenSkillsFe(true)
        } else {
            setOpenSkillsFe(false)
        }
    }
    const handleOpenSkillsDe = () => {
        if(openSkillsDe == false) {
            setOpenSkillsDe(true)
        } else {
            setOpenSkillsDe(false)
        }
    }

    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical level</span>

            <div className="skills__container container grid">
                <div>
                    {/* skill 1 */}
                    <div className={openSkillsFe ? `skills__content skills__open` : `skills__content skills__close`}>
                        <div className="skills__header" onClick={handleOpenSkillsFe}>
                            <i className="uil uil-brackets-curly skills__icon"></i>

                            <div>
                                <h2 className="skills__title">Front End Developer</h2>
                                <span className="skills__subtitle">With 4 years of experience</span>
                            </div>

                            <i className={openSkillsFe ? `uil uil-angle-down skills__arrow skills__arrow-open` : `uil uil-angle-down skills__arrow`}></i>
                        </div>
                        <div className="skills__list grid">
                            {/* data 1 */}
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">HTML</h3>
                                    <span className="skills__number">90%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__html"></span>
                                </div>
                            </div>
                            {/* data 2 */}
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">CSS / SCSS</h3>
                                    <span className="skills__number">80%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__css"></span>
                                </div>
                            </div>
                            {/* data 3 */}
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">JavaScript</h3>
                                    <span className="skills__number">40%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__js"></span>
                                </div>
                            </div>
                            {/* data4  */}
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">React</h3>
                                    <span className="skills__number">60%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__react"></span>
                                </div>
                            </div>
                        </div>
                    </div>
  
                </div>
                <div>
                    {/* skill 2 */}
                    <div className={openSkillsDe ? `skills__content skills__open` : `skills__content skills__close`}>
                        <div className="skills__header" onClick={handleOpenSkillsDe}>
                            <i className="uil uil-server skills__icon"></i>

                            <div>
                                <h2 className="skills__title">Design</h2>
                                <span className="skills__subtitle">More than 1 years</span>
                            </div>

                            <i className={openSkillsDe ? `uil uil-angle-down skills__arrow skills__arrow-open` : `uil uil-angle-down skills__arrow`}></i>
                        </div>
                        <div className="skills__list grid">
                                {/* data 1 */}
                                <div className="skills__data">
                                    <div className="skills__titles">
                                        <h3 className="skills__name">PhotoShop</h3>
                                        <span className="skills__number">40%</span>
                                    </div>
                                    <div className="skills__bar">
                                        <span className="skills__percentage skills__ps"></span>
                                    </div>
                                </div>
                                {/* figma */}
                                <div className="skills__data">
                                    <div className="skills__titles">
                                        <h3 className="skills__name">Figma</h3>
                                        <span className="skills__number">40%</span>
                                    </div>
                                    <div className="skills__bar">
                                        <span className="skills__percentage skills__figma"></span>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills