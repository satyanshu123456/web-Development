import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("userName:", userName);
    console.log("userEmail:", userEmail);
    console.log("userNumber", userNumber);
    console.log("password:", password);
  };
  return (
    <>
      <div className=" d-flex justify-content-center">
        <div className="border p-3 w-50 mt-5 bg-light shadow rounded">
          <h1 className="text-center">Registartion</h1>
          <br />
          <form onSubmit={handleSubmit}>
            <label htmlFor="userName">Username</label>
            <input
              type="text"
              name="userName"
              className="form-control"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <br />
            <label htmlFor="userEmail">Email</label>
            <input
              type="email"
              name="userEmail"
              className="form-control"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <br />
            <label htmlFor="userNumber">Mobile</label>
            <input
              type="number"
              name="userNumber"
              className="form-control"
              value={userNumber}
              onChange={(e) => setUserNumber(e.target.value)}
            />
            <br />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <div className="float-end">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </form>
        </div>
        
      </div>
    </>
  );
}

export default Register;
