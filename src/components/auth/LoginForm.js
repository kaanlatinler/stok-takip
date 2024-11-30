"use client";

import { useRouter } from "next/navigation";
import React from "react";

const LoginForm = () => {
  const router = useRouter();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const username = document.getElementById("exampleInputUsername").value;
    const password = document.getElementById("exampleInputPassword").value;
    console.log(username, password);
    router.push("/");
  };

  return (
    <div>
      {" "}
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <div className="form-group">
          <label htmlFor="exampleInputUsername" className="sr-only">
            Username
          </label>
          <div className="position-relative has-icon-right">
            <input
              type="text"
              id="exampleInputUsername"
              className="form-control input-shadow"
              placeholder="Enter Username"
            />
            <div className="form-control-position">
              <i className="icon-user"></i>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword" className="sr-only">
            Password
          </label>
          <div className="position-relative has-icon-right">
            <input
              type="password"
              id="exampleInputPassword"
              className="form-control input-shadow"
              placeholder="Enter Password"
            />
            <div className="form-control-position">
              <i className="icon-lock"></i>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-12 text-right">
            <a href="reset-password.html">Reset Password</a>
          </div>
        </div>
        <button type="submit" className="btn btn-light btn-block">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
