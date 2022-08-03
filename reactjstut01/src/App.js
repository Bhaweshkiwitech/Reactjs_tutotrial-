import React from "react";


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
  //map looping

  // students.map((item)=>{
  //   console.log('my name is ', item);
  // })

  // for(let i=0;i<=students.length;i++){
  //   console.log('for loop', students[i]);
  // }
  return (
    <div className="App">
      <h1>Handle Array with List</h1>
      <table border={12}>
        {/* use map in reactjs instead of for loop, while loop in reactjs*/}
        {students.map((data) => (
          <tr border={12}>
            <td border={12}>{data.name}</td>
            <td border={12}>{data.email}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
