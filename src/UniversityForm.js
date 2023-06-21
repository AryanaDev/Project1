import React, { useState, useEffect } from "react";
import axios from "axios";

function UniversityForm() {
  const [university, setUniversity] = useState([]);
  const [newUniversities, setNewUniversities] = useState([]);

  useEffect(() => {
    axios.get("http://universities.hipolabs.com/search?country=United+States")
      .then((response) => {
        setUniversity(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (university.length > 0) {
      setNewUniversities(university.slice(0, 10));
    }
  });

  return (
    <>
      <h1>UniversityForm</h1>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Name</th>
            <th style={tableHeaderStyle}>Country</th>
            <th style={tableHeaderStyle}>State-Province</th>
          </tr>
        </thead>
        <tbody>
          {university.map((uni) => (
            <tr key={uni.name}>
              <td style={tableDataStyle}>{uni.name}</td>
              <td style={tableDataStyle}>{uni.country}</td>
              <td style={tableDataStyle}>{uni["state-province"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>First 10 University Names:</h2>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Name</th>
            <th style={tableHeaderStyle}>Country</th>
            <th style={tableHeaderStyle}>State-Province</th>
          </tr>
        </thead>
        <tbody>
          {newUniversities.map((uni) => (
            <tr key={uni.name}>
              <td style={tableDataStyle}>{uni.name}</td>
              <td style={tableDataStyle}>{uni.country}</td>
              <td style={tableDataStyle}>{uni["state-province"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

const tableHeaderStyle = {
  backgroundColor: "#f2f2f2",
  padding: "8px",
};

const tableDataStyle = {
  padding: "8px",
  borderBottom: "1px solid #ddd",
};

export default UniversityForm;
