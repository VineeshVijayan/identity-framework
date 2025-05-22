import React from 'react';
import Navbar from '../../NavbarComponent/Navbar';
import Sidebar from '../../SidebarComponents/Sidebar';
import './ManageExistingRoleComponent.scss';

function ManageExistingRoleComponent() {
    return (
        <div className="d-flex" margin="auto">
            <Sidebar />
            <div className="flex-grow-1">
                <Navbar />

                <div className="container mt-4">
                    <h3>Manage Existing Role</h3>
                    <div className="card p-3 mb-3 shadow-sm">
                        <h3>Requestor</h3>


                        <div className="row">
                            <div className="col-md-6">

                                <form role="search" className="d-flex align-items-center">

                                    <input
                                        className="form-control"
                                        type="search"
                                        placeholder="Search"
                                        aria-label="Search"
                                        style={{ width: "300px" }}
                                    />
                                    <div className='search-btn'><button className="btn btn-outline-success me-3" type="submit">Search</button>
                                    </div>

                                </form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>First Name</label>
                                        <input type="text" className="form-control" placeholder="Enter First Name" />
                                    </div>
                                    <div className="col-md-6">
                                        <label>Last Name</label>
                                        <input type="text" className="form-control" placeholder="Enter Last Name" />
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>

                    <div className="card p-3 mb-3 shadow-sm">
                        <h4>Role</h4>
                        <form role="search" className="d-flex align-items-center">

                            <input
                                className="form-control"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                style={{ width: "300px" }}
                            />
                            <div className='search-btn'><button className="btn btn-outline-success me-3" type="submit">Search</button>
                            </div>

                        </form>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Position Title</label>
                                        <input type="text" className="form-control" placeholder="Enter First Name" />
                                    </div>

                                </div>

                            </div>


                        </div>
                    </div>

                    <div className="card p-3 mb-3 shadow-sm">
                        <h4>Application(s)</h4>


                        <div className="row">
                            <div className="col-md-6">

                                <form role="search" className="d-flex align-items-center">

                                    <input
                                        className="form-control"
                                        type="search"
                                        placeholder="Search"
                                        aria-label="Search"
                                        style={{ width: "300px" }}
                                    />
                                    <div className='search-btn'><button className="btn btn-outline-success me-3" type="submit">Search</button>
                                    </div>

                                </form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Application(s) to add to Role</label>
                                        <input type="text" className="form-control" placeholder="Enter First Name" />
                                    </div>
                                </div>

                            </div>


                        </div>


                    </div>
                    <div className="button-container mt-3">
                        <button type="button" className="btn btn-success">Submit</button>
                    </div>
                </div>
            </div >
        </div >
    );
}

export default ManageExistingRoleComponent
