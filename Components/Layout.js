import Header from "./Header"
import Footer from '../Components/Footer'
// import Loading from "./Loading"

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