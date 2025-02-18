import Banner from "../Component/Banner";
import Header from "../Component/Header";
import Navbar from "../Component/Navber";
import Refer from "../Component/Refer";
import SubBar from "../Component/SubBar";


const Home = () => {
    return (
        <div>
            <Header/>
            <Navbar/>
            <SubBar/>
            <Banner/>
            <Refer/>
        </div>
    );
};

export default Home;