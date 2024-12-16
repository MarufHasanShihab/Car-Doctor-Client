import Navbar from "../Components/Navbar/Navbar";
import { homeNavItems } from "../data/NavItems";


const Home = () => {
    return (
        <div>
            <Navbar navItems={homeNavItems}/>
        </div>
    );
};

export default Home;