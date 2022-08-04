import './App.css';
import React from 'react'
import { Table } from 'react-bootstrap'
function App() {
  const users = [
    {
      name: 'Bhawesh', email: 'bp@test.com', address: [
        { hm: '101', city: 'Noida', country: 'India' },
        { hm: '10', city: 'Gurgaon', country: 'India' },
        { hm: '23', city: 'Noida', country: 'India' },
        { hm: '45', city: 'Delhi', country: 'India' },
      ]
    },
    {
      name: 'piyush sir', email: 'piyush@test.com', address: [
        { hm: '101', city: 'Noida', country: 'India' },
        { hm: '10', city: 'Gurgaon', country: 'India' },
        { hm: '23', city: 'Noida', country: 'India' },
        { hm: '45', city: 'Delhi', country: 'India' },
      ]
    },
    {
      name: 'Devesh', email: 'devesh@test.com', address: [
        { hm: '101', city: 'Noida', country: 'India' },
        { hm: '10', city: 'Gurgaon', country: 'India' },
        { hm: '23', city: 'Noida', country: 'India' },
        { hm: '45', city: 'Delhi', country: 'India' },
      ]
    },
    {
      name: 'Akhlaq sir', email: 'Ak@test.com', address: [
        { hm: '101', city: 'Noida', country: 'India' },
        { hm: '10', city: 'Gurgaon', country: 'India' },
        { hm: '23', city: 'Noida', country: 'India' },
        { hm: '45', city: 'Delhi', country: 'India' },
      ]
    },
  ]
  return (
    <div className="App">
      <h1>List with Nested Array</h1>
      <Table variant="dark"  >
        <tbody>
          <tr>
          <td>S.N</td>
            <td>Name</td>
            <td>Email</td>
            <td>Address</td>
          </tr>
          {
            users.map((item,i)=>
            <tr key={i}>
               <td>{i+1}</td>
            <td>{item.name}</td>
          <td>{item.email}</td>
            <td>
              {/*  */}
              <Table variant="dark"  >
        <tbody>
              {
                item.address.map((data)=>

                <tr>
                  <td>{data.hm}</td>
                  <td>{data.city}</td>
                  <td>{data.country}</td>
                </tr>
                )
              }
              </tbody>
              </Table>
              {/*  */}
            </td>
          </tr>
          )
          }
        </tbody>
      </Table>

    </div>
  );
}

export default App;