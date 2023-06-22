import React, { useState, useEffect } from "react";
import axios from "axios";

function UniversityForm() {
  const [university, setUniversity] = useState([]);
  const [item, setItem] = useState({ items: 10 });
  const [data1, setData1] = useState([5, 25, 50, 100]);

  useEffect(() => {
    axios
      .get("http://universities.hipolabs.com/search?country=United+States")
      .then((response) => {
        setUniversity(response.data.slice(0, 10));
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://universities.hipolabs.com/search?country=United+States")
      .then((response) => {
        setUniversity(response.data.slice(0, [data1]));
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [data1]);

  return (
    <>
        <select   value={data1} onChange={(e) => setData1((e.target.value))}>
          <option value={5}>5</option>
          <option value={item.items}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
      <h1>UniversityForm</h1>
      <h2>First {data1} University Names:</h2>
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
