import Header from "./Header"
import Footer from '../Components/Footer'

const Layout = ({ children }) => {


    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout