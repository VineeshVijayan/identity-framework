import { useState } from 'react';
import Navbar from '../../NavbarComponent/Navbar';
import Sidebar from '../../SidebarComponents/Sidebar';
import './ChangeSideBarIcon.scss';
function ChangeSideBarIcon() {
    const [tempIcon, setTempIcon] = useState(null);
    const [setIconPreview] = useState(localStorage.getItem("sidebarIcon") || "");
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
        <div className="d-flex" margin="auto">
            <Sidebar />
            <div className="flex-grow-1">
                <Navbar />


                <div className="container mt-4">

                    <div className="card p-6 shadow-sm">
                        <div>
                            <h5>Select Icon from System</h5>
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
            </div >
        </div >
    );
}


export default ChangeSideBarIcon