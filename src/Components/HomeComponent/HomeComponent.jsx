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
                            onClick={() => navigate('/user')} // Correct usage
                        >
                            <div>
                                <h3 className='fs-3'>Create New User</h3>
                            </div>
                            <i className='bi bi-person-plus-fill p-3 fs-1'></i>
                        </div>
                    </div>

                    <div className='col-md-4 p-1'>
                        <div className='p-3 gradient-bg2 shadow-sm d-flex justify-content-around align-items-center rounded'>
                            <div>
                                <h3 className='fs-3'>My Request</h3>
                            </div>
                            <i className='bi bi-app-indicator p-3 fs-1'></i>
                        </div>
                    </div>

                    <div className='col-md-4 p-1'>
                        <div className='p-3 gradient-bg3 shadow-sm d-flex justify-content-around align-items-center rounded'>
                            <div>
                                <h3 className='fs-3'>My Approvals</h3>
                            </div>
                            <i className='bi bi-hand-thumbs-up p-3 fs-1'></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className='table'>
                <caption className="fs-8 text-dark d-inline" >User Details</caption>
                <table class="table">

                    <thead>
                        <tr>
                            <th scope="col">User Id</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Date of Birth</th>
                            <th scope="col">Last 4 SSN</th>
                            <th scope="col">Expiration Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>

                            <td>U12525</td>
                            <td>Mark</td>
                            <td>Antony</td>
                            <td>12/04/1990</td>
                            <td>6397</td>
                            <td>10/06/2028</td>

                        </tr>

                        <tr>
                            <td>U13678</td>
                            <td>Sarah</td>
                            <td>Connor</td>
                            <td>05/22/1985</td>
                            <td>4821</td>
                            <td>03/14/2027</td>
                        </tr>
                        <tr>
                            <td>U14231</td>
                            <td>John</td>
                            <td>Doe</td>
                            <td>08/15/1993</td>
                            <td>7529</td>
                            <td>12/25/2030</td>
                        </tr>
                        <tr>
                            <td>U15489</td>
                            <td>Emma</td>
                            <td>Watson</td>
                            <td>07/10/1995</td>
                            <td>9632</td>
                            <td>05/30/2029</td>
                        </tr>
                        <tr>
                            <td>U16745</td>
                            <td>Michael</td>
                            <td>Scott</td>
                            <td>11/02/1980</td>
                            <td>3157</td>
                            <td>09/09/2026</td>
                        </tr>
                        <tr>
                            <td>U17890</td>
                            <td>Olivia</td>
                            <td>Smith</td>
                            <td>04/18/1992</td>
                            <td>8456</td>
                            <td>07/22/2028</td>
                        </tr>
                        <tr>
                            <td>U18952</td>
                            <td>James</td>
                            <td>Bond</td>
                            <td>06/25/1975</td>
                            <td>0070</td>
                            <td>01/01/2035</td>
                        </tr>
                        <tr>
                            <td>U19234</td>
                            <td>Emily</td>
                            <td>Clark</td>
                            <td>09/30/1988</td>
                            <td>2145</td>
                            <td>06/18/2027</td>
                        </tr>
                        <tr>
                            <td>U20345</td>
                            <td>Robert</td>
                            <td>Downey</td>
                            <td>02/05/1970</td>
                            <td>1123</td>
                            <td>08/15/2032</td>
                        </tr>
                        <tr>
                            <td>U21567</td>
                            <td>Linda</td>
                            <td>Johnson</td>
                            <td>03/12/1984</td>
                            <td>5678</td>
                            <td>11/29/2029</td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </div>


    );
}

export default HomeComponent;
