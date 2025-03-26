import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Sidebar() {
    const navigate = useNavigate(); // Import useNavigate

    const [openMenus, setOpenMenus] = useState({}); // Object to track open/close state

    // Toggle function for individual menus
    const toggleMenu = (menu) => {
        setOpenMenus((prev) => ({
            ...prev,
            [menu]: !prev[menu], // Toggle only the selected menu
        }));
    };

    return (
        <div className="bg-white sidebar p-1">
            <div className="m-2">
                <i className="bi bi-fingerprint me-2 fs-4"></i>
                <span className="brand-name fs-6 " onClick={() => navigate('/dashboard')}
                    style={{ cursor: "pointer" }}>Identity Framework</span>
            </div>

            <div>
                {/* Dashboard */}
                <div>
                    <a
                        className="list-group-item py-2 d-flex justify-content-between align-items-center"
                        onClick={() => toggleMenu("dashboard")}
                        style={{ cursor: "pointer" }}
                    >
                        <div className="d-flex align-items-center">
                            <i className="bi bi-speedometer2 fs-4 me-2"></i>
                            <span className="fs-6">Dashboard</span>
                        </div>
                        <i className={`bi ${openMenus["dashboard"] ? "bi-chevron-up" : "bi-chevron-down"}`}></i>
                    </a>

                    {openMenus["dashboard"] && (
                        <div style={{ paddingLeft: "30px" }}>
                            <a className="list-group-item py-1 border-0" onClick={() => navigate('/dashboard')}
                                style={{ cursor: "pointer" }} >Dashboard Overview</a>
                        </div>
                    )}
                </div>

                {/* User Management */}
                <div>
                    <a
                        className="list-group-item py-2 d-flex justify-content-between align-items-center"
                        onClick={() => toggleMenu("userManagement")}
                        style={{ cursor: "pointer" }}>
                        <div className="d-flex align-items-center">
                            <i className="bi bi-house fs-4 me-3"></i>
                            <span className="fs-6">User Management</span>
                        </div>
                        <i className={`bi ${openMenus["userManagement"] ? "bi-chevron-up" : "bi-chevron-down"}`}></i>
                    </a>

                    {openMenus["userManagement"] && (
                        <div style={{ paddingLeft: "30px" }}>
                            <a className="list-group-item py-1 border-0"
                                onClick={() => navigate('/user')}
                                style={{ cursor: "pointer" }}>Create New User</a>

                            <a className="list-group-item py-1 border-0"
                                onClick={() => navigate('/request')}
                                style={{ cursor: "pointer" }}>Request Application Access</a>
                            <a className="list-group-item py-1 border-0"
                                onClick={() => navigate('/remove')}
                                style={{ cursor: "pointer" }}>Remove Application Access</a>

                            <a className="list-group-item py-1 border-0"
                                onClick={() => navigate('/terminate')}
                                style={{ cursor: "pointer" }}>Terminate Access</a>
                        </div>
                    )}
                </div>

                {/* Role-Based Access */}
                <div>
                    <a
                        className="list-group-item py-2 d-flex justify-content-between align-items-center"
                        onClick={() => toggleMenu("roleBased")}
                        style={{ cursor: "pointer" }}
                    >
                        <div className="d-flex align-items-center">
                            <i className="bi bi-table fs-4 me-3"></i>
                            <span className="fs-6">Role-Based Access</span>
                        </div>
                        <i className={`bi ${openMenus["roleBased"] ? "bi-chevron-up" : "bi-chevron-down"}`}></i>
                    </a>

                    {openMenus["roleBased"] && (
                        <div style={{ paddingLeft: "30px" }}>
                            <a className="list-group-item py-1 border-0" href="#">Create New Role</a>
                            <a className="list-group-item py-1 border-0" href="#">Manage Existing Role</a>
                        </div>
                    )}
                </div>

                {/* IDF Administration */}
                <div>
                    <a
                        className="list-group-item py-2 d-flex justify-content-between align-items-center"
                        onClick={() => toggleMenu("idfAdmin")}
                        style={{ cursor: "pointer" }}
                    >
                        <div className="d-flex align-items-center">
                            <i className="bi bi-cassette-fill fs-4 me-3"></i>
                            <span className="fs-6">IDF Administration</span>
                        </div>
                        <i className={`bi ${openMenus["idfAdmin"] ? "bi-chevron-up" : "bi-chevron-down"}`}></i>
                    </a>

                    {openMenus["idfAdmin"] && (
                        <div style={{ paddingLeft: "30px" }}>
                            <a className="list-group-item py-1 border-0" href="#">User Administration</a>
                            <a className="list-group-item py-1 border-0" href="#">Permission</a>
                            <a className="list-group-item py-1 border-0" href="#">Manage Auth Sources</a>
                            <a className="list-group-item py-1 border-0" href="#">Manage Outbound Connectors</a>
                            <a className="list-group-item py-1 border-0" href="#">IDF Settings</a>
                        </div>
                    )}
                </div>

                {/* Reporting */}
                <div>
                    <a
                        className="list-group-item py-2 d-flex justify-content-between align-items-center"
                        onClick={() => toggleMenu("reporting")}
                        style={{ cursor: "pointer" }}
                    >
                        <div className="d-flex align-items-center">
                            <i className="bi bi-clipboard-data fs-4 me-3"></i>
                            <span className="fs-6">Reporting</span>
                        </div>
                        <i className={`bi ${openMenus["reporting"] ? "bi-chevron-up" : "bi-chevron-down"}`}></i>
                    </a>

                    {openMenus["reporting"] && (
                        <div style={{ paddingLeft: "30px" }}>
                            <a className="list-group-item py-1 border-0" href="#">Create New Report</a>
                            <a className="list-group-item py-1 border-0" href="#">Run Report</a>
                        </div>
                    )}
                </div>

                {/* Analytics */}
                <div>
                    <a
                        className="list-group-item py-2 d-flex justify-content-between align-items-center"
                        onClick={() => toggleMenu("analytics")}
                        style={{ cursor: "pointer" }}
                    >
                        <div className="d-flex align-items-center">
                            <i className="bi bi-file-earmark-fill fs-4 me-3"></i>
                            <span className="fs-6">Analytics</span>
                        </div>
                        <i className={`bi ${openMenus["analytics"] ? "bi-chevron-up" : "bi-chevron-down"}`}></i>
                    </a>

                    {openMenus["analytics"] && (
                        <div style={{ paddingLeft: "30px" }}>
                            <a className="list-group-item py-1 border-0" href="#">Dashboards</a>
                        </div>
                    )}
                </div>

                {/* Checkout   */}
                <div>
                    <a
                        className="list-group-item py-2 d-flex justify-content-between align-items-center"
                        onClick={() => toggleMenu("analytics")}
                        style={{ cursor: "pointer" }}
                    >
                        <div className="d-flex align-items-center">
                            <i className="bi bi-bag-dash fs-4 me-3"></i>
                            <span className="fs-6">Checkout</span>
                        </div>
                        <i className={`bi ${openMenus["analytics"] ? "bi-chevron-up" : "bi-chevron-down"}`}></i>
                    </a>

                    {openMenus["analytics"] && (
                        <div style={{ paddingLeft: "30px" }}>
                            <a className="list-group-item py-1 border-0" href="#">Dashboards</a>
                        </div>
                    )}
                </div>


                <a className="list-group-item py-2">
                    <i className="bi bi-power fs-4 me-3"></i>
                    <span className="fs-6">Logout</span>
                </a>
            </div>
        </div>
    );
}

export default Sidebar;
