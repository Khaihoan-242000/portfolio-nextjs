import { useState } from 'react'
const ScrollTop = () => {
    const [activeScroll, setActiveScroll] = useState(false)

    const handleActiveScroll = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY >= 200) {
                setActiveScroll(true)
            } else {
                setActiveScroll(false)
            }
        }
    }

    if (typeof window !== 'undefined') window.addEventListener('scroll', handleActiveScroll)

    const handleClickToTop = () => {
        if (typeof window !== 'undefined') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
    }

    return (
        <p className={activeScroll ? `scrollup active` : `scrollup`} onClick={handleClickToTop}>
            <i className="uil uil-arrow-up scrollup__icon"></i>
        </p>
    )
}
export default ScrollTop