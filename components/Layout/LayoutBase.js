import SiteHeader from '@components/SiteHeader'
import Footer from '@components/Footer'

const Layout = ({children}) =>
  <div className="container">
    <SiteHeader />
    {children}
    <Footer />
  </div>

export default Layout
