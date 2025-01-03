import About from "../Components/Home/About/About";
import BannerSlider from "../Components/Home/BannerSlider/BannerSlider";
import Contact from "../Components/Home/Contact/Contact";
import Services from "../Components/Home/Services/Services";
import Navbar from "../Components/Navbar/Navbar";
import { homeNavItems } from "../data/NavItems";


const Home = () => {
    return (
        <div>
            <Navbar navItems={homeNavItems}/>
            <BannerSlider/>
            <About/>
            <Services/>
            <Contact/>
        </div>
    );
};

export default Home;