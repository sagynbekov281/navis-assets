import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Reviews from './pages/Reviews'
import Pricing from './pages/Pricing'
import News from './pages/News'
import NewsDetail from './pages/NewsDetail'
import RequestPage from './pages/RequestPage'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/request" element={<RequestPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
