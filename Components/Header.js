
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

const Header = () => {
    const [showMenuMobile, setShowMenuMobile] = useState(false)
    const [activeBgHeader, setActiveBgHeader] = useState(false)


    const handleShowMenu = () => {
        setShowMenuMobile(true)
    }
    const handleClearMenu = () => {
        setShowMenuMobile(false)
    }

    const changerBackgroundHeader = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY >= 80) {
                setActiveBgHeader(true)
            } else {
                setActiveBgHeader(false)
            }
        }
    }
    if (typeof window !== 'undefined') window.addEventListener('scroll', changerBackgroundHeader)
    useEffect(() => {
        const themeButton = document.getElementById('theme-btn')
        const darkTheme = 'dark-theme'
        const iconTheme = 'uil-sun'

        const selectedTheme = localStorage.getItem('selected-theme')
        const selectedIcon = localStorage.getItem('selected-icon')

        // We obtain the current theme that the interface has by validating the dark-theme class
        const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
        const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

        // We validate if the user previously chose a topic
        if (selectedTheme) {
        // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
        document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
        themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
        }


        // Activate / deactivate the theme manually with the button
        themeButton.addEventListener('click', () => {
            // Add or remove the dark / icon theme
            document.body.classList.toggle(darkTheme)
            themeButton.classList.toggle(iconTheme)
            // We save the theme and the current icon that the user chose
            localStorage.setItem('selected-theme', getCurrentTheme())
            localStorage.setItem('selected-icon', getCurrentIcon())
        })

    }, [])
    return (
        <header className={activeBgHeader ? `header active` : `header`} id="header">
            <nav className="nav container">
                <Link href="/">
                    <a className="nav__logo">KhaiHoan</a>
                </Link>

                <div className={showMenuMobile ? `nav__menu show-menu` : `nav__menu`}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <Link href="#home">
                                <a className="nav__link">
                                    <i className="uil uil-estate nav__icon"></i> Home
                                </a>
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link href="#about">
                                <a className="nav__link">
                                    <i className="uil uil-user nav__icon"></i> About
                                </a>
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link href="#skills">
                                <a className="nav__link">
                                    <i className="uil uil-file-alt nav__icon"></i> Skills
                                </a>
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link href="#services">
                                <a className="nav__link">
                                    <i className="uil uil-briefcase-alt nav__icon"></i> Experience
                                </a>
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link href="#portfolio">
                                <a className="nav__link">
                                    <i className="uil uil-scenery nav__icon"></i> Portfolio
                                </a>
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link href="#contact">
                                <a className="nav__link">
                                    <i className="uil uil-message nav__icon"></i> Contact Me
                                </a>
                            </Link>
                        </li>
                    </ul>
                    <i className="uil uil-times nav__close" onClick={handleClearMenu}></i>
                </div>

                <div className="nav__btns">
                    {/* Dark mode */}
                    <div className="change-theme">
                        {/* {
                            theme === 'light' ? <i className="uil uil-moon"></i> : <i className="uil uil-sun"></i>
                        } */}
                        <i className="uil uil-moon" id="theme-btn"></i>
                    </div>

                    <div className="nav__toggle" onClick={handleShowMenu}>
                        <i className="uil uil-apps"></i>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header