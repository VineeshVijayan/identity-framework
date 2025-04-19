import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';

import HomeComponent from './Components/HomeComponent/HomeComponent';
import MyApprovalComponent from './Components/HomeComponent/MyApprovalComponent/MyApprovalComponent';
import MyRequestComponent from './Components/HomeComponent/MyRequestComponent/MyRequestComponent';
import ManageAuthoritativeComponent from './Components/IDFAdministration/ManageAuthoritativeComponent/ManageAuthoritativeComponent';
import ManageOutboundConnectors from './Components/IDFAdministration/ManageOutboundConnectorsComponent/ManageOutboundConnectors';
import UserAdministrationComponent from './Components/IDFAdministration/UserAdministrationComponent/UserAdministrationComponent';

import Login from './Components/LoginComponent/LoginComponent';
import UserProfile from './Components/NavbarComponent/UserProfileComponent/UserProfile';
import ManageExistingRoleComponent from './Components/RoleBasedAccessComponent/ManageExistingRoleComponent/ManageExistingRoleComponent';
import NewRoleComponent from './Components/RoleBasedAccessComponent/NewRoleComponent/NewRoleComponent';
import Sidebar from './Components/SidebarComponents/Sidebar';
import RemoveAppComponent from './Components/UserManagementComponent/RemoveAppComponent/RemoveAppComponent';
import RequestAppComponent from './Components/UserManagementComponent/RequestAppComponent/RequestAppComponent';
import TerminateAccessComponent from './Components/UserManagementComponent/TerminateAccessComponent/TerminateAccessComponent';
import UserComponent from './Components/UserManagementComponent/UserComponent/UserComponent';

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Routes>
          {/* Login Page */}
          <Route path="/" element={<Login />} />

          {/* Dashboard Route */}
          <Route path="/dashboard" element={<DashboardLayout />} />
          <Route path="/" element={<HomeComponent />} />
          {/* HomePage-NavBar Create User */}
          <Route path="/user" element={<UserComponent />} />
          {/* UserManagement.RequestAppComponent */}
          <Route path="/request" element={<RequestAppComponent />} />
          {/* UserManagement.RemoveAppComponent */}
          <Route path="/remove" element={<RemoveAppComponent />} />
          {/* UserManagement.TerminateComponent */}
          <Route path="/terminate" element={<TerminateAccessComponent />} />
          {/* HomePage-Navbar MyRequest */}
          <Route path="/myrequest" element={<MyRequestComponent />} />
          {/* HomePage-Navbar MyApproval */}
          <Route path="/myapproval" element={<MyApprovalComponent />} />
          {/* RoleBased Access.Create New Role */}
          <Route path="/newrole" element={<NewRoleComponent />} />
          {/* RoleBased.ManageExistingRole */}
          <Route path="/managerole" element={<ManageExistingRoleComponent />} />
          {/* IDF Administration.UserAdministration */}
          <Route path="/useradministration" element={<UserAdministrationComponent />} />
          {/* IDF Administration.ManageAuthoritative */}
          <Route path="/manageauthoritative" element={<ManageAuthoritativeComponent />} />
          {/* IDF Administration.ManageOutBound */}
          <Route path="/manageoutbound" element={<ManageOutboundConnectors />} />
          {/* Navbar.UserProfile*/}
          <Route path="/userprofile" element={<UserProfile />} />


        </Routes>
      </div>
    </Router>
  );
}

const DashboardLayout = () => {
  return (
    <div className="container-fluid app-background d-flex flex-column min-vh-100">
      <div className="row flex-grow-1">
        <div className="col-2 bg-white min-vh-100">
          <Sidebar />
        </div>
        <div className="col d-flex flex-column">
          <HomeComponent />
        </div>
      </div>
    </div>
  );
};

export default App;
