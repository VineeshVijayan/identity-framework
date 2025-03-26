import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import HomeComponent from './Components/HomeComponent/HomeComponent';
import Login from './Components/LoginComponent/LoginComponent';
import MyApprovalComponent from './Components/MyApprovalComponent/MyApprovalComponent';
import MyRequestComponent from './Components/MyRequestComponent/MyRequestComponent';
import RemoveAppComponent from './Components/RemoveAppComponent/RemoveAppComponent';
import RequestAppComponent from './Components/RequestAppComponent/RequestAppComponent';
import Sidebar from './Components/SidebarComponents/Sidebar';
import TerminateAccessComponent from './Components/TerminateAccessComponent/TerminateAccessComponent';
import UserComponent from './Components/UserComponent/UserComponent';

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
          {/* Create New User */}
          <Route path="/user" element={<UserComponent />} />
          {/* Request New User */}
          <Route path="/request" element={<RequestAppComponent />} />
          {/* Remove New User */}
          <Route path="/remove" element={<RemoveAppComponent />} />
          {/* Terminate New User */}
          <Route path="/terminate" element={<TerminateAccessComponent />} />
          {/* Terminate New User */}
          <Route path="/myrequest" element={<MyRequestComponent />} />
          {/* Terminate New User */}
          <Route path="/myapproval" element={<MyApprovalComponent />} />

        </Routes>
      </div>
    </Router>
  );
}

// Create a layout for Dashboard pages
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
