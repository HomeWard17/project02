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
          <label htmlFor="password">User Name:</label>
          <input type="password" name="password" />
        </div>
        <div id="confirmPassword">
          <label htmlFor="confirmPassword">User Name:</label>
          <input type="password" name="confirmPassword" />
        </div>
        <div>
          <label htmlFor="dateOfBirth">Date of birth</label>
          <input type="date" />
        </div>
        <div></div>
      </form>
    </div>
  );
}

export default RegisterForm;
