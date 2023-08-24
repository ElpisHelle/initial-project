import React from "react";
import "./login.css";
export default function index() {
  return (
    <>
      <div className="sample">
        <div class="login-box">
          <form className="login-form" autocomplete="off">
            <h2 className="mt-5">Sign in</h2>
            <div class="inputBox">
              <input type="text" required="required" />
              <span>Userame</span>
              <i></i>
            </div>
            <div class="inputBox">
              <input type="password" required="required" />
              <span>Password</span>
              <i></i>
            </div>
            <div class="links">
              <a href="#">Forgot Password ?</a>
              {/* <a href="#">Signup</a> */}
            </div>
            <button href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </button>
          </form>
        </div>
      </div>

      <div class="star-field">
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
      </div>
    </>
  );
}
