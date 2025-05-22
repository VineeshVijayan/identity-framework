import React from 'react';
import Navbar from '../../NavbarComponent/Navbar';
import Sidebar from '../../SidebarComponents/Sidebar';
import './RemoveAppComponent.scss';

function RemoveAppComponent() {
    return (
        <div className="d-flex" margin="auto">
            <Sidebar />
            <div className="flex-grow-1">
                <Navbar />
                <div className='search-bar'>
                    <h6>Employee Name</h6>
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

                </div>

                <div className="container mt-4">
                    <div className="card p-3 mb-3 shadow-sm">
                        <h4>Remove Application User</h4>

                        <h4>User Details</h4>
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
                        </div>
                    </div>

                    {/* Second Section: Permissions */}
                    <div className="card p-3 shadow-sm">
                        <h4>Application(s) being requested</h4>
                        {/* Search Form */}
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

                        {/* Large Text Area */}
                        <textarea className="form-control mt-3" rows="5" placeholder="Enter details here..."></textarea>

                        {/* Submit Button */}
                        <div className="button-container mt-3">
                            <button type="button" className="btn btn-success">Submit</button>
                        </div>
                    </div>

                </div>
            </div >
        </div >
    );
}

export default RemoveAppComponent





