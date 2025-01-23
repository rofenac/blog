import Header from '../components/header'
import Footer from '../components/footer'
import BlogForm from '../components/blogentries'

function HomePage({ className }) {
  return (
    <>
      <Header />
      <BlogForm className={className} />
      <Footer />
    </>
  )
}

export default HomePage