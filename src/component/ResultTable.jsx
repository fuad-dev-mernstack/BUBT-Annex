import './ResultTable.css';

function ResultTable({ results }) {
  return (
    <table className="result-table">
      <thead>
        <tr>
          <th>COURSE NO</th>
          <th>COURSE TITLE</th>
          <th>CREDIT</th>
          <th>GRADE</th>
        </tr>
      </thead>
      <tbody>
        {results.map((course, index) => (
          <tr key={index}>
            <td>{course.code}</td>
            <td>{course.title}</td>
            <td>{course.credit}</td>
            <td>{course.grade}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ResultTable;
