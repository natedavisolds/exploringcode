import 'styles/globals.scss'
import Footer from 'components/Footer'
import SiteHeader from 'components/SiteHeader'

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <SiteHeader />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
