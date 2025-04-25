import SemesterCard from './SemesterCard';

function CourseResult() {
  const semesters = [
    {
      semester: "Spring, 2019",
      sgpa: "3.75",
      cgpa: "3.75",
      results: [
        { code: "CSE 101", title: "Computer and Programming Concepts", credit: "3", grade: "A+" },
        { code: "CSE 102", title: "Computer and Programming Concepts Lab", credit: "1.5", grade: "A-" },
        { code: "ENG 101", title: "English Language-I", credit: "3", grade: "A" },
        { code: "MAT 101", title: "Differential and Integral Calculus", credit: "3", grade: "A" },
      ]
    },
    {
      semester: "Summer, 2019",
      sgpa: "3.39",
      cgpa: "3.57",
      results: [
        { code: "CSE 111", title: "Structured Programming Language", credit: "3", grade: "A-" },
        { code: "CSE 112", title: "Structured Programming Language Lab", credit: "1.5", grade: "A+" },
        { code: "EEE 101", title: "Electrical Technology", credit: "3", grade: "B" },
        { code: "EEE 102", title: "Electrical Technology Lab", credit: "3", grade: "B" },
        { code: "MAT 111", title: "Co-ordinate Geomatry And Vector Calculus", credit: "3", grade: "A" },
        { code: "ENG 111", title: "English Language-II", credit: "3", grade: "B" }
      ]
    },
    {
      semester: "Fall, 2019-20",
      sgpa: "3.54",
      cgpa: "3.56",
      results: [
        { code: "CSE 100", title: "Software Development I", credit: "0.75", grade: "A+" },
        { code: "CSE 103", title: "Discrete Mathematics", credit: "3", grade: "A+" },
        { code: "CSE 121", title: "Object Oriented Programming Language", credit: "3", grade: "A-" },
        { code: "CSE 122", title: "Object Oriented Programming Language Lab", credit: "3", grade: "A-" },
        { code: "ECO 101", title: "Principles of Economics", credit: "3", grade: "C" },
        { code: "MAT 121", title: "Linear Algebra and Differential Equations", credit: "3", grade: "A-" }
      ]
    },
    {
      semester: "Spring, 2020",
      sgpa: "3.63",
      cgpa: "3.57",
      results: [
        { code: "CSE 213", title: "Theory of Computing and Automata Theory", credit: "3", grade: "A+" },
        { code: "CSE 231", title: "Data Structures", credit: "3", grade: "A-" },
        { code: "CSE 232", title: "Data Structures Lab", credit: "3", grade: "A" },
        { code: "EEE 211", title: "Electronic Devices and Circuits", credit: "3", grade: "A-" },
        { code: "EEE 212", title: "Electronic Devices and Circuits Lab", credit: "1.5", grade: "A-" },
        { code: "STA 231", title: "Statistics", credit: "1.5", grade: "A-" }
      ]
    },
    {
      semester: "Summer, 2020",
      sgpa: "3.66",
      cgpa: "3.59",
      results: [
        { code: "ACT 201", title: "Accounting Fundamentals", credit: "3", grade: "B" },
        { code: "CSE 205", title: "Digital Logic Design", credit: "3", grade: "A-" },
        { code: "CSE 206", title: "Digital Logic Design Lab", credit: "1.5", grade: "A" },
        { code: "CSE 241", title: "Algorithms", credit: "3", grade: "A" },
        { code: "CSE 242", title: "Algorithms Lab", credit: "1.5", grade: "A+" },
        { code: "MAT 231", title: "Complex Variable and Fourier Analysis", credit: "3", grade: "A+" }
      ]
    },
    {
      semester: "Fall, 2020-21",
      sgpa: "3.64",
      cgpa: "3.60",
      results: [
        { code: "CSE 200", title: "Software Development II", credit: "0.75", grade: "A+" },
        { code: "CSE 207", title: "Database Systems", credit: "3", grade: "A-" },
        { code: "CSE 208", title: "Database Systems Lab", credit: "1.5", grade: "A" },
        { code: "CSE 209", title: "Data Communication", credit: "3", grade: "A-" },
        { code: "CSE 215", title: "Computer Architecture", credit: "3", grade: "A-" },
        { code: "CSE 223", title: "Numerical Analysis", credit: "3", grade: "A-" },
        { code: "CSE 224", title: "Numerical Analysis Lab", credit: "3", grade: "A" }
      ]
    },
    {
      semester: "Spring, 2021",
      sgpa: "3.67",
      cgpa: "3.61",
      results: [
        { code: "CSE 315", title: "Microprocessor and Interfacing", credit: "3", grade: "A" },
        { code: "CSE 316", title: "Microprocessor and Interfacing Lab", credit: "1.5", grade: "A" },
        { code: "CSE 317", title: "System Analysis and Design", credit: "3", grade: "A-" },
        { code: "CSE 318", title: "System Analysis and Design Lab", credit: "1.5", grade: "A" },
        { code: "CSE 331", title: "Advanced Programming", credit: "3", grade: "A" },
        { code: "CSE 332", title: "Advanced Programming Lab", credit: "1.5", grade: "A" },
        { code: "PHY 101", title: "PHYSICS", credit: "3", grade: "A-" }
      ]
    },
    {
      semester: "Summer, 2021",
      sgpa: "3.71",
      cgpa: "3.62",
      results: [
        { code: "CSE 300", title: "Software Development III", credit: "0.75", grade: "A+" },
        { code: "CSE 309", title: "Operating Systems", credit: "3", grade: "A+" },
        { code: "CSE 310", title: "Operating Systems Lab", credit: "1.5", grade: "A+" },
        { code: "CSE 313", title: "Mathematical Analysis for Computer Science", credit: "3", grade: "A-" },
        { code: "CSE 323", title: "Compiler Design", credit: "3", grade: "A-" },
        { code: "CSE 324", title: "Compiler Design Lab", credit: "1.5", grade: "A-" },
        { code: "CSE 327", title: "Software Engineering", credit: "3", grade: "A-" },
        { code: "CSE 328", title: "Software Engineering Lab", credit: "1.5", grade: "A" },
      ]
    },
    {
      semester: "Fall, 2021-22",
      sgpa: "3.58",
      cgpa: "3.61",
      results: [
        { code: "CSE 319", title: "Computer Networks", credit: "3", grade: "A" },
        { code: "CSE 320", title: "Computer Networks Lab", credit: "1.5", grade: "A-" },
        { code: "CSE 341", title: "Computer Graphics", credit: "3", grade: "A-" },
        { code: "CSE 342", title: "Computer Graphics Lab", credit: "3", grade: "A-" },
        { code: "CSE 351", title: "Artificial Intelligence and Expert System", credit: "3", grade: "A-" },
        { code: "CSE 352", title: "Artificial Intelligence and Expert System Lab", credit: "1.5", grade: "A" }
      ]
    },
    {
      semester: "Spring, 2022",
      sgpa: "3.78",
      cgpa: "3.63",
      results: [
        { code: "CSE 400", title: "Software Development IV", credit: "0.75", grade: "A+" },
        { code: "CSE 407", title: "Project Management and Professional Ethics", credit: "2", grade: "A+" },
        { code: "CSE 417", title: "Distributed Database Management Systems", credit: "3", grade: "A" },
        { code: "CSE 418", title: "Distributed Database Management Systems Lab", credit: "1.5", grade: "A" },
        { code: "CSE 425", title: "Internet of Things", credit: "3", grade: "A" },
        { code: "CSE 426", title: "Internet of Things Lab", credit: "1.5", grade: "A+" },
        { code: "CSE 498", title: "Capston Project/Thesis", credit: "4", grade: "A+" }
      ]
    },
    {
      semester: "Summer, 2022",
      sgpa: "3.65",
      cgpa: "3.63",
      results: [
        { code: "CSE 413", title: "Cyber Security and Digital Forensic", credit: "3", grade: "A" },
        { code: "CSE 414", title: "Cyber Security and Digital Forensic Lab", credit: "1.5", grade: "A-" },
        { code: "CSE 465", title: "Machine Learning", credit: "3", grade: "A" },
        { code: "CSE 477", title: "Neural Network and Fuzzy Systems", credit: "3", grade: "A-" },
        { code: "CSE 478", title: "Neural Network and Fuzzy Systems Lab", credit: "1.5", grade: "A" }
      ]
    },
    {
      semester: "Fall, 2023-24",
      sgpa: "4.00",
      cgpa: "3.66",
      results: [
        { code: "CSE 467", title: "Pattern Recognition", credit: "3", grade: "A+" },
        { code: "CSE 475", title: "Data Mining", credit: "3", grade: "A+" },
        { code: "CSE 476", title: "Data Mining Lab", credit: "3", grade: "A+" },
      ]
    }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h3>📌 Semester Wise Results</h3>
      {semesters.map((sem, index) => (
        <SemesterCard key={index} {...sem} />
      ))}
    </div>
  );
}

export default CourseResult;
