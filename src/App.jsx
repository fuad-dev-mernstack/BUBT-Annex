import { Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Profile from './component/Profile';
import CourseResult from './component/CourseResult'; // You'll create this next
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/course-result" element={<CourseResult />} />
    </Routes>
  );
}

export default App;

