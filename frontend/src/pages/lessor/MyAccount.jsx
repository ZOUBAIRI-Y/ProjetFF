import { useEffect, useState } from "react";
import LessorSidebar from "../../layouts/LessorSidebar";
import luffy from "../../assets/luffy.jpg";
import { useNavigate, useParams } from "react-router-dom";
import client from "../../custom-axios";

export default function MyAccount() {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const navigate = useNavigate();

    const handleFileChange = (event) => {
        // Get the selected files from the event
        const files = event.target.files;
        // Create a copy of the existing selected files
        const updatedSelectedFiles = [...selectedFiles];
        // Iterate over each selected file and add it to the copy
        for (let i = 0; i < files.length; i++) {
            updatedSelectedFiles.push(files[i]);
        }
        // Update the selected files state with the copy
        setSelectedFiles(updatedSelectedFiles);
    };

    const handleUpload = () => {
        const formData = new FormData();
        for (let i = 0; i < selectedFiles.length; i++) {
            formData.append("image", selectedFiles[i]);
        }
        const id = localStorage.getItem("id");

        client
            .post(`http://127.0.0.1:8000/api/users/${id}/images`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((response) => {
                if (response.status == 200) {
                    alert("uploaded!");
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const [data, setData] = useState({});
    const [passwordData, setPasswordData] = useState({});
    const [userData, setUserData] = useState({});

    useEffect(() => {
        if (localStorage.getItem("id") === null) {
            navigate("/login");
        }
        const id = localStorage.getItem("id");
        client
            .get("http://localhost:8000/api/users/" + id)
            .then(({ data }) => {
                setData(data.data);
                console.log(data.data);
                localStorage.setItem("user", JSON.stringify(data.data));
            })
            .catch((err) => console.log(err.response.data));
    }, [navigate]);

    const saveData = (e) => {
        e.preventDefault();
        client
            .patch(
                "http://localhost:8000/api/users/" + localStorage.getItem("id"),
                userData
            )
            .then((data) => {
                console.log(data);
            })
            .catch((err) => console.log(err.response.data));
    };

    const updatePassword = (e) => {
        e.preventDefault();
        client
            .post(
                "http://localhost:8000/api/users/" +
                    localStorage.getItem("id") +
                    "/password",
                passwordData
            )
            .then(({ data }) => {
                alert(data.message);
            })
            .catch((err) => console.log(err.response.data));
    };

    const deleteAccount = () => {
        const confirmed = window.confirm(
            "Are you sure you want to delete your account?"
        );
        if (confirmed) {
            const userId = localStorage.getItem("id");
            client
                .delete(`http://localhost:8000/api/users/${userId}`)
                .then((response) => {
                    if (response.status === 200) {
                        navigate("/signout");
                    }
                })
                .catch((err) => console.log(err.response.data));
        }
    };

    return (
        <div className="d-flex flex-row justify-content-center">
            <LessorSidebar />
            <div className="container m-0 pt-5">
                <h2 className="text-primary d-inline">My Account</h2>
                <form className="account_info mt-3" onSubmit={saveData}>
                    {data && (
                        <div className="personal_infos border rounded pt-1 p-3 bg-altlight">
                            <input
                                value="save"
                                type="submit"
                                className="btn m-4 btn-success save_changes_btn text-white float-end"
                            />
                            <div className="row m-0 mt-2">
                                <div className="col-sm lessor_name_myAcc ps-0">
                                    <p className="text-dark m-0 ">
                                        <strong>Lessor name</strong>
                                    </p>
                                    <input
                                        type="text"
                                        name="lessor_name"
                                        value={userData.name}
                                        onChange={(e) =>
                                            setUserData({
                                                ...userData,
                                                name: e.target.value,
                                            })
                                        }
                                        className="form-control"
                                        placeholder={
                                            data.name ? data.name : "name"
                                        }
                                    />
                                </div>
                                <div className="col-sm-3 lessor_img_container p-0">
                                    {data.avatar ? (
                                        <img
                                            src={
                                                "http://127.0.0.1:8000" +
                                                data.avatar
                                            }
                                            alt="profilePic"
                                        />
                                    ) : (
                                        <img src={luffy} alt="profilePic" />
                                    )}
                                </div>
                            </div>
                            <p className="text-dark mt-1 mb-1">
                                <strong>Personal informations</strong>
                            </p>
                            <div className="lessor_firstName pe-1">
                                <label htmlFor="lessorfirstName">
                                    first name
                                </label>
                                <input
                                    type="text"
                                    name="lessor_firstName"
                                    value={userData.firstname}
                                    className="form-control"
                                    onChange={(e) =>
                                        setUserData({
                                            ...userData,
                                            firstname: e.target.value,
                                        })
                                    }
                                    placeholder={
                                        data.firstname
                                            ? data.firstname
                                            : "firstname"
                                    }
                                />
                            </div>
                            <div className="lessor_lastName ps-1">
                                <label htmlFor="lessorlastName">
                                    last name
                                </label>
                                <input
                                    type="text"
                                    name="lessor_lastName"
                                    value={userData.lastname}
                                    className="form-control"
                                    onChange={(e) =>
                                        setUserData({
                                            ...userData,
                                            lastname: e.target.value,
                                        })
                                    }
                                    placeholder={
                                        data.lastname
                                            ? data.lastname
                                            : "lastname"
                                    }
                                />
                            </div>
                            <label htmlFor="lessorAddress" className="mt-1">
                                Address
                            </label>
                            <input
                                type="text"
                                name="lessor_address"
                                value={userData.address}
                                className="form-control"
                                onChange={(e) =>
                                    setUserData({
                                        ...userData,
                                        address: e.target.value,
                                    })
                                }
                                placeholder={
                                    data.address ? data.address : "address"
                                }
                            />
                            <div className="lessor_phone1 mt-1 pe-1">
                                <label htmlFor="lessorphone1">Phone 1</label>
                                <input
                                    type="text"
                                    name="lessor_phone1"
                                    value={userData.phone1}
                                    className="form-control"
                                    maxLength={10}
                                    onChange={(e) =>
                                        setUserData({
                                            ...userData,
                                            phone1: e.target.value,
                                        })
                                    }
                                    placeholder={
                                        data.phone1 ? data.phone1 : "phone"
                                    }
                                />
                            </div>
                            <div className="lessor_phone2 mt-1 ps-1">
                                <label htmlFor="lessorphone2">Phone 2</label>
                                <input
                                    type="text"
                                    name="lessor_phone2"
                                    value={userData.phone2}
                                    className="form-control"
                                    maxLength={10}
                                    onChange={(e) =>
                                        setUserData({
                                            ...userData,
                                            phone2: e.target.value,
                                        })
                                    }
                                    placeholder={
                                        data.phone2 ? data.phone2 : "phone"
                                    }
                                />
                            </div>
                            <label htmlFor="lessorEmail" className="mt-1">
                                Email
                            </label>
                            <input
                                type="text"
                                name="lessor_email"
                                value={userData.email}
                                className="form-control"
                                onChange={(e) =>
                                    setUserData({
                                        ...userData,
                                        email: e.target.value,
                                    })
                                }
                                placeholder={data.email ? data.email : "email"}
                            />
                        </div>
                    )}
                </form>
                <form
                    className="account_info mt-3 mb-4"
                    onSubmit={updatePassword}
                >
                    <div className="change_password border rounded bg-altlight mt-2 pt-1 p-3">
                        <p className="text-dark mt-1">
                            <strong>Change password</strong>
                        </p>
                        <label htmlFor="currentPassword" className="mt-1">
                            Current password
                        </label>
                        <input
                            type="password"
                            name="old_password"
                            className="form-control current_password"
                            onChange={(e) =>
                                setPasswordData({
                                    ...passwordData,
                                    old_password: e.target.value,
                                })
                            }
                            placeholder="current password"
                        />
                        <div className="new_password mt-1 pe-1">
                            <label htmlFor="newPassword">New password</label>
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                onChange={(e) =>
                                    setPasswordData({
                                        ...passwordData,
                                        password: e.target.value,
                                    })
                                }
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
                                className="form-control"
                                onChange={(e) =>
                                    setPasswordData({
                                        ...passwordData,
                                        password_confirmation: e.target.value,
                                    })
                                }
                                placeholder="confirm password"
                            />
                        </div>
                        <input
                            value="change"
                            type="submit"
                            className="m-4 btn btn-success save_changes_btn text-white float-end"
                        />
                    </div>
                </form>
                <h2 className="my-3"> Delete Account</h2>
                <button
                    className="btn btn-outline-danger my-4"
                    onClick={deleteAccount}
                >
                    Delete Account
                </button>
                <h2 className="my-3"> Changer Image</h2>
                <input
                    className="form-control w-50"
                    type="file"
                    onChange={handleFileChange}
                />
                <button className="btn btn-primary m-3" onClick={handleUpload}>
                    Upload
                </button>
            </div>
        </div>
    );
}
