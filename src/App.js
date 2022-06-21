import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import AuthProvider from "./Context/AuthProvider";
import Card from "./Pages/Card/Card";
import Footer from "./Pages/Footer/Footer";
import Contact from "./Pages/Contact/Contact";
import Doctors from "./Pages/DepartmentDoctors/Doctors";
import Information from "./Pages/VeiwDoctorsInfo/Information";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/card" element={<Card />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors" element={<Information />} />
        </Routes>
        <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
