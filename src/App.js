import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Screens/Home";
import Services from "./Screens/Services";
import About from "./Screens/About";
import Blog from "./Screens/Blog";
import Contact from "./Screens/Contact";
import Header from "./Screens/Header";
import Footer from "./Screens/Footer"
import Error404 from "./Screens/Error404";

function App() {
  return (
    <div className="text-light bg-light vh-100">
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/servicios" element={<Services/>} />
            <Route path="/nosotros" element={<About/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/contactanos" element={<Contact/>} />
            <Route path="/*" element={<Error404/>} />
          </Routes>
        <Footer/>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
