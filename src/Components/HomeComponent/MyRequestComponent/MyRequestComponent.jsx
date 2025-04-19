import React from 'react';
import Navbar from '../../NavbarComponent/Navbar'; // Adjust the path as needed
import Sidebar from '../../SidebarComponents/Sidebar'; // Adjust the path as needed
import './MyRequestComponent.scss';
function MyRequestComponent() {
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

                        <div className='table'>
                            <caption className="fs-8 text-dark d-inline" >Open requests requiring manager approval</caption>
                            <table class="table">

                                <thead>
                                    <tr>
                                        <th scope="col">Request Id</th>
                                        <th scope="col">Requester</th>
                                        <th scope="col">Requested For</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Estimated Time for Approval</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>

                                        <td>U12525</td>
                                        <td>Mark Antony</td>
                                        <td>Joseph Dom</td>
                                        <td>Request for Accessing Accouting</td>
                                        <td>12/12/2022</td>

                                    </tr>

                                    <tr>
                                        <td>U12526</td>
                                        <td>John Doe</td>
                                        <td>Emma Watson</td>
                                        <td>Request for VPN Access</td>
                                        <td>22/02/2022</td>
                                    </tr>
                                    <tr>
                                        <td>U12527</td>
                                        <td>Jane Smith</td>
                                        <td>Michael Brown</td>
                                        <td>Software Installation Request</td>
                                        <td>28/08/2020</td>
                                    </tr>
                                    <tr>
                                        <td>U12528</td>
                                        <td>Robert Johnson</td>
                                        <td>Sophia Miller</td>
                                        <td>Request for New Hardware</td>
                                        <td>09/05/2021</td>
                                    </tr>
                                    <tr>
                                        <td>U12529</td>
                                        <td>Emily Davis</td>
                                        <td>William Garcia</td>
                                        <td>Data Access Permission</td>
                                        <td>14/10/2023</td>
                                    </tr>
                                    <tr>
                                        <td>U12530</td>
                                        <td>Daniel Martinez</td>
                                        <td>Olivia Wilson</td>
                                        <td>Change of Email ID</td>
                                        <td>19/09/2023</td>

                                    </tr>


                                </tbody>
                            </table>


                            {/* Submit Button */}
                            <div className="button-container mt-3">
                                <button type="button" className="btn btn-success">Submit</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div >
        </div >
    );
}
export default MyRequestComponent