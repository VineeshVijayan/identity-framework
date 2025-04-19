import React from 'react';
import Navbar from '../../NavbarComponent/Navbar'; // Adjust the path as needed
import Sidebar from '../../SidebarComponents/Sidebar'; // Adjust the path as needed
import './UserAdministrationComponent.scss';
function UserAdministrationComponent() {
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
                            <caption className="fs-8 text-dark d-inline" >Employee Table</caption>
                            <table class="table">

                                <thead>
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">First Name</th>
                                        <th scope="col">Last Name</th>
                                        <th scope="col">Date of Birth</th>
                                        <th scope="col">Last 4 SSN</th>
                                        <th scope="col">Expiration Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td>U12501</td><td>Mark</td><td>Antony</td><td>10/02/1990</td><td>1234</td><td>17/12/2058</td></tr>
                                    <tr><td>U12502</td><td>John</td><td>Doe</td><td>22/04/1985</td><td>5678</td><td>05/11/2055</td></tr>
                                    <tr><td>U12503</td><td>Jane</td><td>Smith</td><td>15/07/1992</td><td>9876</td><td>09/03/2060</td></tr>
                                    <tr><td>U12504</td><td>Emma</td><td>Watson</td><td>01/01/1988</td><td>4321</td><td>12/12/2050</td></tr>
                                    <tr><td>U12505</td><td>Harry</td><td>Potter</td><td>30/06/1991</td><td>7788</td><td>20/08/2065</td></tr>
                                    <tr><td>U12506</td><td>Ron</td><td>Weasley</td><td>14/03/1989</td><td>6655</td><td>03/04/2053</td></tr>
                                    <tr><td>U12507</td><td>Hermione</td><td>Granger</td><td>19/09/1990</td><td>1111</td><td>25/05/2059</td></tr>
                                    <tr><td>U12508</td><td>Tom</td><td>Hanks</td><td>09/07/1960</td><td>9999</td><td>07/07/2040</td></tr>
                                    <tr><td>U12509</td><td>Robert</td><td>Downey</td><td>04/04/1965</td><td>2468</td><td>01/01/2045</td></tr>
                                    <tr><td>U12510</td><td>Chris</td><td>Evans</td><td>13/06/1981</td><td>1357</td><td>19/09/2052</td></tr>
                                    <tr><td>U12511</td><td>Natasha</td><td>Romanoff</td><td>28/11/1984</td><td>1112</td><td>30/12/2060</td></tr>
                                    <tr><td>U12512</td><td>Steve</td><td>Rogers</td><td>04/07/1918</td><td>9990</td><td>15/05/2070</td></tr>
                                    <tr><td>U12513</td><td>Bruce</td><td>Banner</td><td>18/12/1969</td><td>3333</td><td>21/10/2049</td></tr>
                                    <tr><td>U12514</td><td>Clint</td><td>Barton</td><td>07/01/1975</td><td>4444</td><td>09/09/2044</td></tr>
                                    <tr><td>U12515</td><td>Peter</td><td>Parker</td><td>10/08/2001</td><td>2222</td><td>16/06/2061</td></tr>
                                    <tr><td>U12516</td><td>Tony</td><td>Stark</td><td>29/05/1970</td><td>5555</td><td>11/11/2066</td></tr>
                                    <tr><td>U12517</td><td>Wanda</td><td>Maximoff</td><td>13/02/1989</td><td>8888</td><td>22/07/2057</td></tr>
                                    <tr><td>U12518</td><td>Stephen</td><td>Strange</td><td>11/11/1976</td><td>1010</td><td>06/03/2063</td></tr>
                                    <tr><td>U12519</td><td>Nick</td><td>Fury</td><td>21/12/1951</td><td>6060</td><td>08/08/2048</td></tr>
                                    <tr><td>U12520</td><td>Scott</td><td>Lang</td><td>17/04/1979</td><td>7070</td><td>28/02/2062</td></tr>


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
export default UserAdministrationComponent

