import '../styles/globals.css'
import Navigation from '../components/Navigation'

const Marketplace = ({ Component, pageProps }) => {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  )
}

export default Marketplace
