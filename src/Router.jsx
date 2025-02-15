
import { Routes, Route } from "react-router-dom"
import Register from "./components/Register";
import Login from "./components/Login";
import MainPage from "./components/interface/interface";
import Admin from "./components/Admin";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/headerComp/About";
import Contact from "./components/headerComp/Contact";
import MainUi from "./components/interface/MainUi";
import Cart from "./components/interface/Cart";
import Dashboard from "./components/Dashboard.jsx/DashBoard";
import Profile from "./components/Profile/Profile";
import DailyTodos from "./components/React/DailyTodos";
import Topics from "./components/React/Topics";
import CreateTopics from "./components/React/CreateTopics";

const RouterConfig=()=>{
  return(
    <>
    <Routes>
        <Route path="/cart" element={<Cart/>} />
          <Route path="/" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/home" element={<Header />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Mainui" element={<MainUi/>} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/dailtTodos" element={<DailyTodos/>} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/createTopic" element={<CreateTopics />} />
        </Routes>
    </>
  )
}
export default RouterConfig;