import React from "react";
import "./RegisterForm.css";
function RegisterForm() {
  return (
    <div>
      <form action="">
        <div id="email">
          <label htmlFor="email">email: </label>
          <input type="text" name="email" />
        </div>
        <div id="userName">
          <label htmlFor="userName">User Name:</label>
          <input type="text" name="userName" />
        </div>
        <div id="password">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" />
        </div>
        <div id="confirmPassword">
          <label htmlFor="confirmPassword">Confirm Password: </label>
          <input type="password" name="confirmPassword" />
        </div>
        <div>
          <label htmlFor="dateOfBirth">Date of birth: </label>
          <input type="date" />
        </div>
        <div>
          <button
            style={{
              backgroundColor: "pink",
              borderRadius: "5px",
              boxSizing: "5px",
            }}
          >
            Register
          </button>
          <p>
            Already got account? <a href="./login">Log in</a> now
          </p>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
