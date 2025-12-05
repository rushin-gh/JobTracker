import { useState } from "react";

const LoginPage = () => {
  const [mode, setMode] = useState("login");

  return (
    <div id="auth-page-ele">
      {mode === "login" ? (
        <>
          <div id="login-page-ele">
            <div className="login-page-field" id="username-ele">
              <span>Login</span>
            </div>
            <div className="login-page-field" id="username-ele">
              <input type="text" id="username-inp" placeholder="Username" />
            </div>
            <div className="login-page-field" id="password-ele">
              <input type="password" id="password-inp" placeholder="Password" />
            </div>
            <div className="login-page-field">
              <button type="submit">Submit</button>
            </div>
            <div className="login-page-field">
              No account?
              <span onClick={() => setMode("register")}>Register</span>
            </div>
          </div>
        </>
      ) : (
        <>
          <div id="login-page-ele">
            <div className="login-page-field" id="username-ele">
              <span>Login</span>
            </div>
            <div className="login-page-field" id="username-ele">
              <input type="text" id="username-inp" placeholder="Username" />
            </div>
            <div className="login-page-field" id="password-ele">
              <input type="password" id="password-inp" placeholder="Password" />
            </div>
            <div className="login-page-field">
              <button type="submit">Submit</button>
            </div>
            <div className="login-page-field">
              Already have account?
              <span onClick={() => setMode("login")}>Register</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LoginPage;
