import LessorSidebar from "../../layouts/LessorSidebar";

export default function MyAccount() {
    return (
        <div className="d-flex flex-row justify-content-center">
            <LessorSidebar />
            <div className="container m-0 pt-5">
                <h2 className="text-primary d-inline">My Account</h2>
                <button className="btn btn-success save_changes_btn text-white float-end">
                    save
                </button>
                <form className="account_info mt-3">
                    <div className="personal_infos border rounded pt-1 p-3 bg-altlight">
                        <p className="text-dark mt-1">
                            <strong>Personal informations</strong>
                        </p>
                        <div className="lessor_name">
                            <label htmlFor="lessorName">Lessor name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="lessor name"
                            />
                        </div>
                        <div className="lessor_img_acc_container"></div>
                        <div className="lessor_firstName mt-1 pe-1">
                            <label htmlFor="lessorfirstName">first name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="first name"
                            />
                        </div>
                        <div className="lessor_lastName mt-1 ps-1">
                            <label htmlFor="lessorlastName">last name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="last name"
                            />
                        </div>
                        <label htmlFor="lessorAddress" className="mt-1">Address</label>
                        <input
                            type="text"
                            name="lessor_address"
                            className="form-control"
                            placeholder="Address"
                        />
                        <div className="lessor_phone1 mt-1 pe-1">
                            <label htmlFor="lessorphone1">Phone 1</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="phone 1"
                            />
                        </div>
                        <div className="lessor_phone2 mt-1 ps-1">
                            <label htmlFor="lessorphone2">Phone 2</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="phone 2"
                            />
                        </div>
                        <label htmlFor="lessorEmail" className="mt-1">Email</label>
                        <input
                            type="text"
                            name="lessor_email"
                            className="form-control"
                            placeholder="email"
                        />
                    </div>
                    <div className="change_password border rounded bg-altlight mt-2 pt-1 p-3">
                        <p className="text-dark mt-1">
                            <strong>Change password</strong>
                        </p>
                        <label htmlFor="currentPassword" className="mt-1">Current password</label>
                        <input
                            type="password"
                            name="current_password"
                            className="form-control current_password"
                            placeholder="current password"
                        />
                        <div className="new_password mt-1 pe-1">
                            <label htmlFor="newPassword">New password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="new password"
                            />
                        </div>
                        <div className="confirm_password mt-1 ps-1">
                            <label htmlFor="confirmPassword">Confirm password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="confirm password"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
