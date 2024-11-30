import LoginForm from "@/components/auth/LoginForm";
import React from "react";

const Login = () => {
  return (
    <div>
      <div id="wrapper">
        <div className="loader-wrapper">
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="card card-authentication1 mx-auto my-5 ">
          <div className="card-body">
            <div className="card-content p-2">
              <div className="text-center">
                <img src="../assets/images/logo-icon.png" alt="logo icon" />
              </div>
              <div className="card-title text-uppercase text-center py-3">
                Sign In
              </div>
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
