function User(props) {
  const data = { name: "Bhawesh Pratap Singh" };
  return (
    <>
      <h1>child </h1>
      <h1>user name:</h1>
      <button onClick={()=>props.alert(data)}>CLick Me</button>
    </>
  );
}
export default User;
