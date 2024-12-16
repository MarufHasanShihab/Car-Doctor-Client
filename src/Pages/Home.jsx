import About from "../Components/Home/About/About";
import BannerSlider from "../Components/Home/BannerSlider/BannerSlider";
import Navbar from "../Components/Navbar/Navbar";
import { homeNavItems } from "../data/NavItems";


const Home = () => {
    return (
        <div>
            <Navbar navItems={homeNavItems}/>
            <BannerSlider/>
            <About/>
        </div>
    );
};

export default Home;