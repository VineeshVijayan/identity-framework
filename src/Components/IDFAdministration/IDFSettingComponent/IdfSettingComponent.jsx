import { useNavigate } from "react-router-dom";
import Navbar from '../../NavbarComponent/Navbar';
import Sidebar from '../../SidebarComponents/Sidebar';
import './IdfSettingComponent.scss';

function IdfSettingComponent() {
    const navigate = useNavigate();
    return (
        <div className="page-layout">
            <Sidebar />
            <div className="page-content">
                <Navbar />
                <div style={{ paddingLeft: "30px" }}>


                    <ul className="option-list">

                        <li>
                            <a className="list-group-item py-1 border-0"
                                onClick={() => navigate('/changeicon')}
                                style={{ cursor: "pointer" }}>Change Sidebar Icon
                            </a>

                        </li>

                        <li>
                            <a className="list-group-item py-1 border-0" onClick={() => navigate('/**')} style={{ cursor: "pointer" }}>
                                Option 1
                            </a>
                        </li>
                        <li>
                            <a className="list-group-item py-1 border-0" onClick={() => navigate('/**')} style={{ cursor: "pointer" }}>
                                Option 2
                            </a>
                        </li>
                        <li>
                            <a className="list-group-item py-1 border-0" onClick={() => navigate('/**')} style={{ cursor: "pointer" }}>
                                Option 3
                            </a>
                        </li>
                        <li>
                            <a className="list-group-item py-1 border-0" onClick={() => navigate('/**')} style={{ cursor: "pointer" }}>
                                Option 4
                            </a>
                        </li>
                        <li>
                            <a className="list-group-item py-1 border-0" onClick={() => navigate('/**')} style={{ cursor: "pointer" }}>
                                Option 5
                            </a>
                        </li>
                        <li>
                            <a className="list-group-item py-1 border-0" onClick={() => navigate('/**')} style={{ cursor: "pointer" }}>
                                Option 6
                            </a>
                        </li>
                        <li>
                            <a className="list-group-item py-1 border-0" onClick={() => navigate('/**')} style={{ cursor: "pointer" }}>
                                Option 7
                            </a>
                        </li>
                        <li>
                            <a className="list-group-item py-1 border-0" onClick={() => navigate('/**')} style={{ cursor: "pointer" }}>
                                Option 8
                            </a>
                        </li>
                        <li>
                            <a className="list-group-item py-1 border-0" onClick={() => navigate('/**')} style={{ cursor: "pointer" }}>
                                Option 9
                            </a>
                        </li>
                        <li>
                            <a className="list-group-item py-1 border-0" onClick={() => navigate('/**')} style={{ cursor: "pointer" }}>
                                Option 10
                            </a>
                        </li>
                    </ul>



                </div>

            </div>
        </div>
    );
}

export default IdfSettingComponent;
