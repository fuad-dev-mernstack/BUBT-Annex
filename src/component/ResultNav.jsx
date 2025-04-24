import { NavLink } from 'react-router-dom';
import './ResultNav.css';

function ResultNav() {
  const tabs = [
    { label: "Incompleted Result", path: "/course-result/incompleted" },
    { label: "Failed Course", path: "/course-result/failed" },
    { label: "Pending Result", path: "/course-result/pending" },
    { label: "Retake History", path: "/course-result/retake" },
    { label: "All Published Result", path: "/course-result/published" },
    { label: "Semester Wise Result", path: "/course-result/semester" },
    { label: "Upcoming Course", path: "/course-result/upcoming" }
  ];

  return (
    <div className="result-nav">
      {tabs.map((tab, index) => (
        <NavLink
          key={index}
          to={tab.path}
          className={({ isActive }) => isActive ? "active" : ""}
        >
          {tab.label}
        </NavLink>
      ))}
    </div>
  );
}

export default ResultNav;
