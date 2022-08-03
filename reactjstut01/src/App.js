import React from "react";

import Table from 'react-bootstrap/Table';
function App() {
  // const students = [
  //   "Bhawesh",
  //   "Devesh",
  //   "piyush sir",
  //   "yuvraj sir",
  //   "Akhlaq sir",
  // ];

  const students = [
    { name: "Bhawesh", contact: 888, email: "bp@gmail.com" },
    { name: "Devesh", contact: 11, email: "dp22@gmail.com" },
    { name: "piyush sir", contact: 220, email: "pi232@gmail.com" },
    { name: "akhlaq sir", contact: 212, email: "akp31232@gmail.com" },
  ];
  
  return (
    <div className="App">
      <h1>Handle Array with List</h1>
      <Table striped bordered hover>
      <tr>
          
          <th> Name</th>
          <th> Contact</th>
          <th>Email</th>
        </tr>

        {/* use map in reactjs instead of for loop, while loop in reactjs*/}
        {students.map((data) => (
          <tr>
            <td>{data.name}</td>
            <td>{data.contact}</td>
            <td>{data.email}</td>
          </tr>
        ))}
        </Table>
    </div>
  );
}

export default App;
