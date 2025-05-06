import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../NavbarComponent/Navbar';
import "./HomeComponent.css";

function HomeComponent() {
    const navigate = useNavigate(); // Import useNavigate

    return (
        <div className='px-3'>
            <Navbar />
            <div className='container-fluid'>
                <div className='row g-3 my-2'>
                    <div className='col-md-4 p-1'>
                        <div
                            className='p-3 gradient-bg1 shadow-sm d-flex justify-content-around align-items-center rounded'
                            style={{ cursor: 'pointer' }}
                            onClick={() => navigate('/user')}
                        >
                            <div>
                                <h3 className='fs-3'>Create New User</h3>
                            </div>
                            <i className='bi bi-person-plus-fill p-3 fs-1'></i>
                        </div>
                    </div>

                    <div className='col-md-4 p-1'>
                        <div
                            className='p-3 gradient-bg2 shadow-sm d-flex justify-content-around align-items-center rounded'
                            style={{ cursor: 'pointer' }}
                            onClick={() => navigate('/myrequest')}
                        >                            <div>
                                <h3 className='fs-3'>My Requests</h3>
                            </div>
                            <i className='bi bi-app-indicator p-3 fs-1'></i>
                        </div>
                    </div>

                    <div className='col-md-4 p-1'>
                        <div
                            className='p-3 gradient-bg3 shadow-sm d-flex justify-content-around align-items-center rounded'
                            style={{ cursor: 'pointer' }}
                            onClick={() => navigate('/myapproval')}
                        >                             <div>
                                <h3 className='fs-3'>My Approvals</h3>
                            </div>
                            <i className='bi bi-hand-thumbs-up p-3 fs-1'></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className='table'>

                <table class="table">

                    <thead>
                        <tr>
                            <th scope="col">User Id</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Expiration Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>

                            <td>U12525</td>
                            <td>Mark</td>
                            <td>Antony</td>
                            <td>10/06/2028</td>

                        </tr>

                        <tr>
                            <td>U13678</td>
                            <td>Sarah</td>
                            <td>Connor</td>
                            <td>03/14/2027</td>
                        </tr>
                        <tr>
                            <td>U14231</td>
                            <td>John</td>
                            <td>Doe</td>
                            <td>12/25/2030</td>
                        </tr>
                        <tr>
                            <td>U15489</td>
                            <td>Emma</td>
                            <td>Watson</td>
                            <td>05/30/2029</td>
                        </tr>
                        <tr>
                            <td>U16745</td>
                            <td>Michael</td>
                            <td>Scott</td>
                            <td>09/09/2026</td>
                        </tr>
                        <tr>
                            <td>U17890</td>
                            <td>Olivia</td>
                            <td>Smith</td>
                            <td>07/22/2028</td>
                        </tr>
                        <tr>
                            <td>U18952</td>
                            <td>James</td>
                            <td>Bond</td>
                            <td>01/01/2035</td>
                        </tr>
                        <tr>
                            <td>U19234</td>
                            <td>Emily</td>
                            <td>Clark</td>
                            <td>06/18/2027</td>
                        </tr>
                        <tr>
                            <td>U20345</td>
                            <td>Robert</td>
                            <td>Downey</td>
                            <td>08/15/2032</td>
                        </tr>
                        <tr>
                            <td>U21567</td>
                            <td>Linda</td>
                            <td>Johnson</td>
                            <td>11/29/2029</td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </div>


    );
}

export default HomeComponent;
