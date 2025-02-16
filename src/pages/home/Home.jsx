import "./Home.css"
import Navbar from "../../Components/navbar/Navbar"
import Header from "../../Components/header/Header"
import Featured from "../../Components/featured/Featured"
import PropertyList from "../../Components/propertylist/PropertyList"
import HomeGuestCard from "../../Components/homeguestcard/HomeGuestCard"
import MailList from "../../Components/maillist/MailList"  
import Footer from "../../Components/footer/Footer"
// import LoginForm from "../forms/LoginForm"
// import RegisterForm from "../forms/RegisterForm"



const Home = () => {
  return (
    <div>
     <Navbar />
     <Header/>
    <div className="homeContainer">
     <Featured/>
      <h1 className="homeTitle">Browse by property type</h1>
      <PropertyList/>
      <h1 className="homeTitle">Homes Guests Love</h1>
      <HomeGuestCard/>
      <MailList/>
      <Footer/>
   
    </div>
    </div>
  )
}

export default Home
