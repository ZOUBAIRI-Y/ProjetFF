import Property from "../components/Property";
import AdvantagesSection from "../components/home/AdvantagesSection";
import HeroSection from "../components/home/HeroSection";
import LatestListingsSection from "../components/home/LatestListingsSection";
import PopularCitiesSection from "../components/home/PopularCitiesSection";
import TopLessorsSection from "../components/home/TopLessorsSection";
import ourValue_img from "../assets/ourValue_img.png";

export default function Home() {
    return (
        <>
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
            <div className="container">
                <h2 className="text-center text-primary">So, who we are?</h2>
                <p className="text-center text-light">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cupiditate aliquid consequuntur molestiae voluptatibus,
                    labore expedita eos ipsam reiciendis, numquam nulla quas
                    vitae esse impedit ducimus ullam, optio placeat ut tempore.
                </p>
                <div className="row">
                    <div className="col-sm-4 d-flex flex-column align-items-center justify-content-center">
                        <h2 className="text-primary text-center">Our value!</h2>
                        <p className="text-secondary text-center fs-3 ">
                            <strong>"Inclusive.Safe.Respectful."</strong>
                        </p>
                    </div>
                    <div className="col-sm-8 ">
                        <div className="valueimg_container">
                            <img
                                src={ourValue_img}
                                alt="ourValue_img"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
