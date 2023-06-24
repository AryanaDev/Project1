import React, { useState, useEffect } from "react"
import axios from "axios"

function UniversityForm() {
  const [university, setUniversity] = useState([])
  const [item, setItem] = useState({ items: 10 })
  const [allData, setAllData] = useState([])

  useEffect(() => {
    axios
      .get("http://universities.hipolabs.com/search?country=United+States")
      .then((response) => {
        setUniversity(response.data.slice(0,item.items))
        setAllData(response.data)
        console.log(response.data)
      })
      .catch((error) => {
        console.error(error)
      });
  },[item.items]);

  useEffect(() => {
    setAllData(allData)
  },[allData])

  return (
    <>
      <h1>UniversityForm</h1>
      <h2>First {item.items} University Names:</h2>
      <select
        value={item.items}
        onChange={(e) => setItem({ items: (e.target.value) })}
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </select>
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
