import { Link } from 'react-router-dom';
import './Profile.css';
import studentImage from '../assets/fuad.jpg'; // replace with your actual image path
import bubtLogo from '../assets/BUBT-Logo.png';

function Profile() {
  return (
    <div className="profile-wrapper">
      <header className="profile-header">
        <img src={bubtLogo} alt="bubt logo" className="bubt-logo" />

        <div className="profile-card">
          <div className="left">
            <img src={studentImage} alt="student" className="profile-pic" />
          </div>
          <div className="center">
            <p>Name: <strong className="highlight">Abdullah Al Muttasim</strong></p>
            <p>ID: <strong className="highlight">18192103128</strong> &nbsp; Intake/Section: <strong>20 - 2</strong></p>
            <p>Program: <strong className="highlight">B.Sc. in CSE (Tri-Semester)</strong></p>
            <p><strong>Alumni</strong></p>
          </div>
          <div className="right">
              <button className="btn home">Dashboard</button>
            <Link to="/academic-info">
              <button className="btn settings">Academic Info</button>
            </Link>
            <button className="btn logout">Log Out</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Profile;
