import BannerSlider from "../Components/Home/BannerSlider/BannerSlider";
import Navbar from "../Components/Navbar/Navbar";
import { homeNavItems } from "../data/NavItems";


const Home = () => {
    return (
        <div>
            <Navbar navItems={homeNavItems}/>
            <BannerSlider/>
        </div>
    );
};

export default Home;