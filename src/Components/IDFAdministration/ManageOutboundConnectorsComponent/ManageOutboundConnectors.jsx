import React from 'react';
import Navbar from '../../NavbarComponent/Navbar'; // Adjust the path as needed
import Sidebar from '../../SidebarComponents/Sidebar'; // Adjust the path as needed
import './ManageOutboundConnectors.scss';

function ManageOutboundConnectors() {
    return (
        <div className="d-flex" margin="auto">
            <Sidebar />
            <div className="flex-grow-1">
                <Navbar />
                <div className='search-bar'>

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


                    {/* Second Section: Permissions */}
                    <div className="card p-3 shadow-sm">
                        <h4>Connectors</h4>
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
                        <textarea className="form-control mt-3" rows="15" placeholder="Enter details here..."></textarea>


                    </div>

                </div>
            </div >
        </div >
    );
}

export default ManageOutboundConnectors