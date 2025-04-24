import ResultTable from './ResultTable';
import './SemesterCard.css';

function SemesterCard({ semester, sgpa, cgpa, results }) {
  return (
    <div className="semester-card">
      <div className="semester-header">Semester: {semester}</div>
      <div className="semester-sgpa">
        <span>SGPA: {sgpa}</span>
        <span>CGPA: {cgpa}</span>
      </div>
      <ResultTable results={results} />
    </div>
  );
}

export default SemesterCard;
