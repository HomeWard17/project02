import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

function Register() {
  return (
    <div>
      <Header></Header>
      <div className="register-page">
        <RegisterForm></RegisterForm>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Register;
