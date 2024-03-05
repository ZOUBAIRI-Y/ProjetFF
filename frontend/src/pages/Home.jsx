import Property from "../components/Property";
import HeroSection from "../components/home/HeroSection";
import LatestListingsSection from "../components/home/LatestListingsSection";
import Header from "../layouts/Header";

export default function Home({ ishome }) {
    console.log();
    return (
        <>
            <HeroSection ishome={ishome} />
            <LatestListingsSection />
            <div className="advantages_section container mt-5">
                <h5 className="text-secondary">Our advantages</h5>
                <h2 className="text-primary">Giving you peace of mind</h2>
            </div>
        </>
    );
}
