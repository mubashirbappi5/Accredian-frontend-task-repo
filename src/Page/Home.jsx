import Banner from "../Component/Banner";
import FAQSection from "../Component/FAQSection";
import Header from "../Component/Header";
import Navbar from "../Component/Navber";
import Refer from "../Component/Refer";
import ReferralBenefits from "../Component/ReferralBenefits";
import SubBar from "../Component/SubBar";
import Support from "../Component/Support";


const Home = () => {
    return (
        <div>
            <Header/>
            <Navbar/>
            <SubBar/>
            <Banner/>
            <Refer/>
            <ReferralBenefits/>
        <FAQSection/>
        <Support/>
        </div>
    );
};

export default Home;