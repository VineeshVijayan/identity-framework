import React, { useState } from 'react';
import Navbar from '../../NavbarComponent/Navbar';
import Sidebar from '../../SidebarComponents/Sidebar';
import './IdfSettingComponent.scss';

function IdfSettingComponent() {
    const [tempIcon, setTempIcon] = useState(null);
    const [iconPreview, setIconPreview] = useState(localStorage.getItem("sidebarIcon") || "");

    const handleIconChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setTempIcon(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = () => {
        if (tempIcon) {
            localStorage.setItem("sidebarIcon", tempIcon);
            setIconPreview(tempIcon);
            window.location.reload();
        }
    };

    return (
        <div className="page-layout">
            <Sidebar />
            <div className="page-content">
                <Navbar />
                <div className="mt-4 p-3">
                    <h5>Change Sidebar Icon</h5>
                    <input type="file" accept="image/*" onChange={handleIconChange} />
                    {tempIcon && (
                        <div className="mt-3">
                            <p>Preview:</p>
                            <img src={tempIcon} alt="Icon Preview" style={{ width: '40px', height: '40px' }} />
                            <br />
                            <button className="btn btn-primary mt-2" onClick={handleSubmit}>Submit</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default IdfSettingComponent;
