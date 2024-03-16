import { useState } from "react";
import LessorSidebar from "../../layouts/LessorSidebar";
import luffy from "../../assets/luffy.jpg"

export default function MyAccount() {
    const [lessorInfos_inputes, setLessorInfos] = useState({
        lessor_name: "",
        lessor_image: "",
        lessor_firstName: "",
        lessor_lastName: "",
        lessor_address: "",
        lessor_phone1: "",
        lessor_phone2: "",
        lessor_email: "",
        current_password: "",
        new_password: "",
        confirm_password: ""
    })
    const handleAcc_inputes = (e) => {
        setLessorInfos({
            ...lessorInfos_inputes, [e.target.name]: e.target.value
        })
    } 
    return (
        <div className="d-flex flex-row justify-content-center">
            <LessorSidebar />
            <div className="container m-0 pt-5">
                <h2 className="text-primary d-inline">My Account</h2>
                <button type="button" className="btn btn-success save_changes_btn text-white float-end">
                    save
                </button>
                <form className="account_info mt-3">
                    <div className="personal_infos border rounded pt-1 p-3 bg-altlight">
                        <div className="row m-0 mt-2">
                            <div className="col-sm lessor_name_myAcc ps-0">
                                <p className="text-dark m-0 "><strong>Lessor name</strong></p>
                                <input
                                    type="text"
                                    name="lessor_name"
                                    value={lessorInfos_inputes.lessor_name}
                                    onChange={e=> handleAcc_inputes(e)}
                                    className="form-control"
                                    placeholder="lessor name"
                                />
                            </div>
                            <div className="col-sm-3 lessor_img_container p-0">
                                <img src={luffy} alt="profilePic" />
                            </div>
                        </div>
                        <p className="text-dark mt-1 mb-1">
                            <strong>Personal informations</strong>
                        </p>
                        <div className="lessor_firstName pe-1">
                            <label htmlFor="lessorfirstName">first name</label>
                            <input
                                type="text"
                                name="lessor_firstName"
                                value={lessorInfos_inputes.first_name}
                                className="form-control"
                                onChange={e=> handleAcc_inputes(e)}
                                placeholder="first name"
                            />
                        </div>
                        <div className="lessor_lastName ps-1">
                            <label htmlFor="lessorlastName">last name</label>
                            <input
                                type="text"
                                name="lessor_lastName"
                                value={lessorInfos_inputes.last_name}
                                className="form-control"
                                onChange={e=> handleAcc_inputes(e)}
                                placeholder="last name"
                            />
                        </div>
                        <label htmlFor="lessorAddress" className="mt-1">
                            Address
                        </label>
                        <input
                            type="text"
                            name="lessor_address"
                            value={lessorInfos_inputes.address}
                            className="form-control"
                            onChange={e=> handleAcc_inputes(e)}
                            placeholder="Address"
                        />
                        <div className="lessor_phone1 mt-1 pe-1">
                            <label htmlFor="lessorphone1">Phone 1</label>
                            <input
                                type="text"
                                name="lessor_phone1"
                                value={lessorInfos_inputes.phone1}
                                className="form-control"
                                onChange={e=> handleAcc_inputes(e)}
                                placeholder="phone 1"
                            />
                        </div>
                        <div className="lessor_phone2 mt-1 ps-1">
                            <label htmlFor="lessorphone2">Phone 2</label>
                            <input
                                type="text"
                                name="lessor_phone2"
                                value={lessorInfos_inputes.phone2}
                                className="form-control"
                                onChange={e=> handleAcc_inputes(e)}
                                placeholder="phone 2"
                            />
                        </div>
                        <label htmlFor="lessorEmail" className="mt-1">
                            Email
                        </label>
                        <input
                            type="text"
                            name="lessor_email"
                            value={lessorInfos_inputes.email}
                            className="form-control"
                            onChange={e=> handleAcc_inputes(e)}
                            placeholder="email"
                        />
                    </div>
                    <div className="change_password border rounded bg-altlight mt-2 pt-1 p-3">
                        <p className="text-dark mt-1">
                            <strong>Change password</strong>
                        </p>
                        <label htmlFor="currentPassword" className="mt-1">
                            Current password
                        </label>
                        <input
                            type="password"
                            name="current_password"
                            value={lessorInfos_inputes.current_password}
                            className="form-control current_password"
                            onChange={e=> handleAcc_inputes(e)}
                            placeholder="current password"
                        />
                        <div className="new_password mt-1 pe-1">
                            <label htmlFor="newPassword">New password</label>
                            <input
                                type="password"
                                name="new_password"
                                value={lessorInfos_inputes.new_password}
                                className="form-control"
                                onChange={e=> handleAcc_inputes(e)}
                                placeholder="new password"
                            />
                        </div>
                        <div className="confirm_password mt-1 ps-1">
                            <label htmlFor="confirmPassword">
                                Confirm password
                            </label>
                            <input
                                type="password"
                                name="confirm_password"
                                value={lessorInfos_inputes.confirm_password}
                                className="form-control"
                                onChange={e=> handleAcc_inputes(e)}
                                placeholder="confirm password"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
