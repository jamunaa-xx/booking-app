import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import Featured from "../../components/featured/Featured";
import "./home.css";
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import EmailList from "../../components/emailList/EmailList"
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by Property Type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes loved by Guests</h1>
        <FeaturedProperties/>
        <EmailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
