export default function FormPropertiesList() {
    return (
        <form className="container mt-4">
            <div className="row">
                <div className="col-sm-4 ps-0 pe-1">
                    <input
                        type="text"
                        placeholder="type the city name"
                        className="form-control p-2 "
                    />
                </div>
                <div className="col-sm p-0 pe-1">
                    <select
                        className="form-select p-2"
                        aria-label="Default select example"
                    >
                        <option selected="">rooms</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                        <option value={4}>Four</option>
                        <option value={"more"}>More...</option>
                    </select>
                </div>
                <div className="col-sm p-0 pe-1">
                    <select
                        className="form-select p-2"
                        aria-label="Default select example"
                    >
                        <option selected="">price</option>
                        <option value={100}>100</option>
                        <option value={200}>200</option>
                        <option value={300}>300</option>
                        <option value={"400..."}>...</option>
                    </select>
                </div>

                <button
                    type="button"
                    className="btn btn-outline-success col-sm-2"
                >
                    Advanced
                </button>
            </div>
        </form>
    );
}
