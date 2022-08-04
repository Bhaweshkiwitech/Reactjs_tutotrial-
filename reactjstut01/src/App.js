import React from "react";

import Table from 'react-bootstrap/Table';
function App() {


  const students = [
    { id:1,name: "Bhawesh", contact: 888, email: "bp@gmail.com" },
    {  id:2,name: "Devesh", contact: 11, email: "dp22@gmail.com" },
    { id:3, name: "piyush sir", contact: 220, email: "pi232@gmail.com" },
    {  id:4,name: "akhlaq sir", contact: 212, email: "akp31232@gmail.com" },
  ];
  
  return (
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
          {
            students.map((item)=>
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.contact}</td>
            </tr>
            
            )
          }
           
      
          </tbody>
        </Table>
   
   
   );
  }

export default App;
