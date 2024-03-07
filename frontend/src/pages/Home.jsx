import Property from "../components/Property";
import AdvantagesSection from "../components/home/AdvantagesSection";
import HeroSection from "../components/home/HeroSection";
import LatestListingsSection from "../components/home/LatestListingsSection";
import Header from "../layouts/Header";

export default function Home({ ishome }) {
    console.log();
    return (
        <>
            <HeroSection ishome={ishome} />
            <LatestListingsSection />
            <div className="container-fluid bg-info pt-1 mt-5">
                <AdvantagesSection />
            </div>
        </>
    );
}
