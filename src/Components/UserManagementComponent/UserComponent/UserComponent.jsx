import React, { useState } from 'react';
import Navbar from '../../NavbarComponent/Navbar';
import Sidebar from '../../SidebarComponents/Sidebar';
import './UserComponent.scss';

function UserComponent() {

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
        }
    };

    return (
        <div className="d-flex" margin="auto">
            <Sidebar />
            <div className="flex-grow-1">
                <Navbar />


                <div className="container mt-4">
                    <div className="card p-3 mb-3 shadow-sm">
                        <h4>Create New  User</h4>

                        {/* <h4>User Details</h4> */}
                        <div className="row">
                            <div className="col-md-6">
                                <label>First Name</label>
                                <input type="text" className="form-control" placeholder="Enter First Name" />
                            </div>
                            <div className="col-md-6">
                                <label>Last Name</label>
                                <input type="text" className="form-control" placeholder="Enter Last Name" />
                            </div>
                            <div className="col-md-6">
                                <label>Phone Number</label>
                                <input type="text" className="form-control" placeholder="Enter Phone Number" />
                            </div>

                            <div className="col-md-6 mt-2">
                                <label>Last 4 SSN</label>
                                <input type="text" className="form-control" placeholder="XXXX" maxLength="4" />
                            </div>
                            <div className="col-md-6 mt-2">
                                <label>Date of Birth</label>
                                <input type="date" className="form-control" />
                            </div>
                            <div className="col-md-6 mt-2">
                                <label>Upload Profile Image</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="card p-3 shadow-sm">
                        <h4>Assign Role</h4>
                        <form role="search" className="d-flex align-items-center">

                            <input
                                className="form-control"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                style={{ width: "300px" }}
                            />
                            <div className='search-btn'><button className="btn btn-outline-success me-3" type="submit">Search</button></div>

                        </form>
                        <div className="button-container mt-3">
                            <button type="button" className="btn btn-success">Submit</button>
                        </div>
                    </div>

                </div>
            </div >
        </div >
    );
}

export default UserComponent;

