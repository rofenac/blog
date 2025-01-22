import Header from '../components/header'
import Footer from '../components/footer'
import Body from '../components/body'

function HomePage({ className }) {
  return (
    <>
      <Header />
      <Body className={className} />
      <Footer />
    </>
  )
}

export default HomePage