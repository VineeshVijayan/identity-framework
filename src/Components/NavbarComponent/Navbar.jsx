import 'bootstrap/js/dist/dropdown';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const navigate = useNavigate(); // ✅ Initialize navigate
    React.useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            document.documentElement.classList.add('dark-mode');
        }
    }, []);
    return (
        <nav className="navbar navbar-expand-sm navbar-custom px-3">
            <div className='container-fluid'>

                <div class='navbar-icon'><i className="bi-justify fs-3"></i>
                </div>




                <div className="welcome d-flex align-items-center gap-2">
                    <h5 className="mb-0">Welcome</h5>
                    <div className="welcomeName">
                        <h3 className="mb-0">Rico Brown</h3>
                    </div>
                </div>


                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation"></button>

                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">


                        <li className="nav-item nav-item4">
                            <button
                                className="btn dark-toggle"
                                onClick={() => {
                                    const html = document.documentElement;
                                    const isDark = html.classList.toggle('dark-mode');
                                    localStorage.setItem('theme', isDark ? 'dark' : 'light');
                                }}
                                title="Toggle Theme"
                            >
                                <i className="bi bi-moon"></i>
                            </button>
                        </li>



                        <li className="nav-item1">
                            <button className="btn btn-primary nav-btn1" onClick={() => navigate('/user')} title="Create New User">
                                <i className='bi bi-person-plus-fill'></i>
                            </button>
                        </li>
                        <li className="nav-item2">
                            <button className="btn btn-secondary nav-btn2" onClick={() => navigate('/myrequest')} title="My Requests"><i className='bi bi-app-indicator'></i></button>
                        </li>
                        <li className="nav-item3">
                            <button className="btn btn-secondary nav-btn3" onClick={() => navigate('/myapproval')} title="My Approvals"> <i className='bi bi-hand-thumbs-up'></i></button>
                        </li>
                        <li className="nav-item dropdown" title="My Profile">
                            <a
                                className="nav-link dropdown-toggle d-flex align-items-center hidden-arrow"
                                href="#"
                                id="navbarDropdownMenuAvatar"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                                    className="rounded-circle profile-img"
                                    alt="User Avatar"
                                    loading="lazy"
                                />
                            </a>


                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
                                <li>
                                    <a className="dropdown-item" style={{ cursor: "pointer" }} onClick={() => navigate('/userprofile')}>
                                        My Profile
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">Settings</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" style={{ cursor: "pointer" }} onClick={() => navigate('/')}>Logout</a>
                                </li>
                            </ul>


                        </li>
                    </ul>
                </div>
            </div>

        </nav>
    );
}

export default Navbar;
