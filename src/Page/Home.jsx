import Banner from "../Component/Banner";
import Header from "../Component/Header";
import Navbar from "../Component/Navber";
import SubBar from "../Component/SubBar";


const Home = () => {
    return (
        <div>
            <Header/>
            <Navbar/>
            <SubBar/>
            <Banner/>
        </div>
    );
};

export default Home;