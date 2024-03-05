import Header from "../../layouts/Header";

export default function HeroSection({ishome}) {
    return (
        <>
            <header className="hero_section_homepage">
                <Header ishome={ishome}/>
                <div className="hero_section_main container d-flex flex-column align-items-center justify-content-center">
                    <h1 className="text-primary fw-bolder fs-1 text-center">Where you love to live? <br/> or rent?</h1>
                    <p className="text-light">Appartments or houses for rent are <strong className="text-secondary">Now</strong> available</p>
                    <div className="input-group">
                        <input
                            type="text"
                            name="search_input_herosection"
                            className="form-control"
                            placeholder="search by city or lessor name"
                            aria-label="Recipient's username"
                            aria-describedby="button-addon2"
                        />
                        <button
                            className="btn btn-success text-white"
                            type="button"
                            id="button-addon2"
                        >
                            Search
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
}
