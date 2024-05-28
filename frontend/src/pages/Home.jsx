import AdvantagesSection from "../components/home/AdvantagesSection";
import LatestListingsSection from "../components/home/LatestListingsSection";
import PopularCitiesSection from "../components/home/PopularCitiesSection";
import TopLessorsSection from "../components/home/TopLessorsSection";
import ourvalueIMG from '../assets/ourvalueIMG.png'

export default function Home() {
    return (
        <>
            <LatestListingsSection />
            <div className="container-fluid bg-info pt-4 pb-4 mt-5">
                <AdvantagesSection />
            </div>
            <div className="container-fluid popularcities_container m-0 mt-5 pb-4 pb-md-3 ">
                <PopularCitiesSection />
            </div>
            <div className="container-fluid topratedlessors_container m-0 mt-5 pb-5 pb-md-5 ">
                <TopLessorsSection />
            </div>
            <div className="container mt-5">
                <h2 className="text-center fw-bold text-primary">So, who we are?</h2>
                <p className="text-center text-light">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cupiditate aliquid consequuntur molestiae voluptatibus,
                    labore expedita eos ipsam reiciendis, numquam nulla quas
                    vitae esse impedit ducimus ullam, optio placeat ut tempore.
                </p>
                <div className="row p-0 m-0">
                    <div className="col-sm-6 d-flex flex-column align-items-center justify-content-center">
                        <h2 className="text-primary fw-bold text-center">Our value!</h2>
                        <p className="text-secondary text-center fs-2">
                            <strong>Inclusive Safe Respectful.</strong>
                        </p>
                    </div>
                    <div className="col-sm-6 ">
                        <div className="ourvalu_img_container p-2 p-lg-4 p-xl-5">
                            <img
                                src={ourvalueIMG}
                                alt="ourValue_img"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
