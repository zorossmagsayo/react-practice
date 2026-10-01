import { BrowserRouter, Routes, Route } from "react-router";
import Contact from './Contact'
import Header from './Header'
import './Header.css'
import Home from './Home'
import Footer from './Footer'

function About(){
  return <h1>About Me</h1>
}


export default function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Header />
        <main className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
