import Property from "../components/Property";
import HeroSection from "../components/home/HeroSection";
import Header from "../layouts/Header";

export default function Home({ishome}) {
    console.log();
    return (
        <>
            <HeroSection ishome={ishome} />
        </>
    )
}