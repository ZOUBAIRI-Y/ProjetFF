import Property from "../components/Property";
import AdvantagesSection from "../components/home/AdvantagesSection";
import HeroSection from "../components/home/HeroSection";
import LatestListingsSection from "../components/home/LatestListingsSection";
import PopularCitiesSection from "../components/home/PopularCitiesSection";
import TopLessorsSection from "../components/home/TopLessorsSection";

export default function Home({ ishome }) {
    return (
        <>
            <HeroSection ishome={ishome} />
            <LatestListingsSection />
            <div className="container-fluid bg-info pt-4 pb-4 mt-5">
                <AdvantagesSection />
            </div>
            <div className="container mt-5 pt-5 pb-5 ">
                <PopularCitiesSection />
            </div>
            <div className="container mt-5 pt-5 pb-5">
                <TopLessorsSection />
            </div>
        </>
    );
}
