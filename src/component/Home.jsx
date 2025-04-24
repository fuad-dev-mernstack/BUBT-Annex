import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import bubtLogo from '../assets/BUBT-Logo.png';
import aboutLogo from '../assets/about-logo.png';
// import loginLogo from '../assets/login-logo.png';
import registerLogo from '../assets/regstr_icon.png';
import loginCover from '../assets/unnamed.webp';
import './Styles.css';

function Home() {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy credentials for prototype
    const validId = '18192103128';
    const validPassword = '258456963';

    if (studentId === validId && password === validPassword) {
      navigate('/profile');
    } else {
      setError('Invalid ID or Password');
    }
  };

  return (
    <div>
      <nav>
        <a href="#"><img src={bubtLogo} alt="bubt-official-logo" /></a>
        <a href="#"><img src={aboutLogo} alt="about-logo" /></a>
        <a href="#"><img src={registerLogo} alt="register-icon" /></a>
      </nav>

      <main className="login-container">
        <div className="main-container">
          <section className="login-box">
            <h2>A NEW NEXUS OF EXCELLENCE</h2>
            <img className="image" src={loginCover} alt="bubt-logo" />
          </section>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Enter your Id"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
            {error && <p className="error-text">{error}</p>}
          </form>
        </div>
      </main>
    </div>
  );
}

export default Home;
