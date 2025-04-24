import ResultNav from './ResultNav';
import SemesterCard from './SemesterCard';

function CourseResult() {
  const semesters = [
    {
      semester: "Spring, 2017",
      sgpa: "3.65",
      cgpa: "3.24",
      results: [
        { code: "ENG 101", title: "English Language I", credit: "3", grade: "A" },
        { code: "HUM 101", title: "Bangladesh Studies", credit: "3", grade: "B" },
        { code: "MAT 101", title: "Differential and Integral Calculus", credit: "3", grade: "A" },
        { code: "PHY 101", title: "Thermodynamics, Materials, Waves and Oscillations, Optics", credit: "3", grade: "C" },
        { code: "PHY 102", title: "Physics I Lab", credit: "1.5", grade: "A-" }
      ]
    },
    {
      semester: "Summer, 2018",
      sgpa: "3.66",
      cgpa: "3.25",
      results: [
        { code: "ENG 101", title: "English Language I", credit: "3", grade: "A" },
        { code: "HUM 101", title: "Bangladesh Studies", credit: "3", grade: "B" },
        { code: "MAT 101", title: "Differential and Integral Calculus", credit: "3", grade: "A" },
        { code: "PHY 101", title: "Thermodynamics, Materials, Waves and Oscillations, Optics", credit: "3", grade: "C" },
        { code: "PHY 102", title: "Physics I Lab", credit: "1.5", grade: "A-" }
      ]
    },
    {
      semester: "Summer, 2018",
      sgpa: "3.66",
      cgpa: "3.25",
      results: [
        { code: "ENG 101", title: "English Language I", credit: "3", grade: "A" },
        { code: "HUM 101", title: "Bangladesh Studies", credit: "3", grade: "B" },
        { code: "MAT 101", title: "Differential and Integral Calculus", credit: "3", grade: "A" },
        { code: "PHY 101", title: "Thermodynamics, Materials, Waves and Oscillations, Optics", credit: "3", grade: "C" },
        { code: "PHY 102", title: "Physics I Lab", credit: "1.5", grade: "A-" }
      ]
    },
    {
      semester: "Summer, 2018",
      sgpa: "3.66",
      cgpa: "3.25",
      results: [
        { code: "ENG 101", title: "English Language I", credit: "3", grade: "A" },
        { code: "HUM 101", title: "Bangladesh Studies", credit: "3", grade: "B" },
        { code: "MAT 101", title: "Differential and Integral Calculus", credit: "3", grade: "A" },
        { code: "PHY 101", title: "Thermodynamics, Materials, Waves and Oscillations, Optics", credit: "3", grade: "C" },
        { code: "PHY 102", title: "Physics I Lab", credit: "1.5", grade: "A-" }
      ]
    },
    {
      semester: "Summer, 2018",
      sgpa: "3.66",
      cgpa: "3.25",
      results: [
        { code: "ENG 101", title: "English Language I", credit: "3", grade: "A" },
        { code: "HUM 101", title: "Bangladesh Studies", credit: "3", grade: "B" },
        { code: "MAT 101", title: "Differential and Integral Calculus", credit: "3", grade: "A" },
        { code: "PHY 101", title: "Thermodynamics, Materials, Waves and Oscillations, Optics", credit: "3", grade: "C" },
        { code: "PHY 102", title: "Physics I Lab", credit: "1.5", grade: "A-" }
      ]
    },
    {
      semester: "Summer, 2018",
      sgpa: "3.66",
      cgpa: "3.25",
      results: [
        { code: "ENG 101", title: "English Language I", credit: "3", grade: "A" },
        { code: "HUM 101", title: "Bangladesh Studies", credit: "3", grade: "B" },
        { code: "MAT 101", title: "Differential and Integral Calculus", credit: "3", grade: "A" },
        { code: "PHY 101", title: "Thermodynamics, Materials, Waves and Oscillations, Optics", credit: "3", grade: "C" },
        { code: "PHY 102", title: "Physics I Lab", credit: "1.5", grade: "A-" }
      ]
    },
    {
      semester: "Summer, 2018",
      sgpa: "3.66",
      cgpa: "3.25",
      results: [
        { code: "ENG 101", title: "English Language I", credit: "3", grade: "A" },
        { code: "HUM 101", title: "Bangladesh Studies", credit: "3", grade: "B" },
        { code: "MAT 101", title: "Differential and Integral Calculus", credit: "3", grade: "A" },
        { code: "PHY 101", title: "Thermodynamics, Materials, Waves and Oscillations, Optics", credit: "3", grade: "C" },
        { code: "PHY 102", title: "Physics I Lab", credit: "1.5", grade: "A-" }
      ]
    },
    {
      semester: "Summer, 2018",
      sgpa: "3.66",
      cgpa: "3.25",
      results: [
        { code: "ENG 101", title: "English Language I", credit: "3", grade: "A" },
        { code: "HUM 101", title: "Bangladesh Studies", credit: "3", grade: "B" },
        { code: "MAT 101", title: "Differential and Integral Calculus", credit: "3", grade: "A" },
        { code: "PHY 101", title: "Thermodynamics, Materials, Waves and Oscillations, Optics", credit: "3", grade: "C" },
        { code: "PHY 102", title: "Physics I Lab", credit: "1.5", grade: "A-" }
      ]
    },
    {
      semester: "Summer, 2018",
      sgpa: "3.66",
      cgpa: "3.25",
      results: [
        { code: "ENG 101", title: "English Language I", credit: "3", grade: "A" },
        { code: "HUM 101", title: "Bangladesh Studies", credit: "3", grade: "B" },
        { code: "MAT 101", title: "Differential and Integral Calculus", credit: "3", grade: "A" },
        { code: "PHY 101", title: "Thermodynamics, Materials, Waves and Oscillations, Optics", credit: "3", grade: "C" },
        { code: "PHY 102", title: "Physics I Lab", credit: "1.5", grade: "A-" }
      ]
    },
    {
      semester: "Summer, 2018",
      sgpa: "3.66",
      cgpa: "3.25",
      results: [
        { code: "ENG 101", title: "English Language I", credit: "3", grade: "A" },
        { code: "HUM 101", title: "Bangladesh Studies", credit: "3", grade: "B" },
        { code: "MAT 101", title: "Differential and Integral Calculus", credit: "3", grade: "A" },
        { code: "PHY 101", title: "Thermodynamics, Materials, Waves and Oscillations, Optics", credit: "3", grade: "C" },
        { code: "PHY 102", title: "Physics I Lab", credit: "1.5", grade: "A-" }
      ]
    },
    {
      semester: "Summer, 2018",
      sgpa: "3.66",
      cgpa: "3.25",
      results: [
        { code: "ENG 101", title: "English Language I", credit: "3", grade: "A" },
        { code: "HUM 101", title: "Bangladesh Studies", credit: "3", grade: "B" },
        { code: "MAT 101", title: "Differential and Integral Calculus", credit: "3", grade: "A" },
        { code: "PHY 101", title: "Thermodynamics, Materials, Waves and Oscillations, Optics", credit: "3", grade: "C" },
        { code: "PHY 102", title: "Physics I Lab", credit: "1.5", grade: "A-" }
      ]
    },
    {
      semester: "Summer, 2018",
      sgpa: "3.66",
      cgpa: "3.25",
      results: [
        { code: "ENG 101", title: "English Language I", credit: "3", grade: "A" },
        { code: "HUM 101", title: "Bangladesh Studies", credit: "3", grade: "B" },
        { code: "MAT 101", title: "Differential and Integral Calculus", credit: "3", grade: "A" },
        { code: "PHY 101", title: "Thermodynamics, Materials, Waves and Oscillations, Optics", credit: "3", grade: "C" },
        { code: "PHY 102", title: "Physics I Lab", credit: "1.5", grade: "A-" }
      ]
    }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ color: 'green' }}>📌 Course Result Info</h2>
      <ResultNav />
      <h3>📌 Semester Wise Results</h3>
      {semesters.map((sem, index) => (
        <SemesterCard key={index} {...sem} />
      ))}
    </div>
  );
}

export default CourseResult;
