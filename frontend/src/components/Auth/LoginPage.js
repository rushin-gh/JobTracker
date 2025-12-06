const LoginPage = (props) => {
  const { setMode } = props;
  return (
    <form>
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
          <span>No account? </span>
          <span className="link-css" onClick={() => setMode("register")}>
            Register
          </span>
        </div>
      </div>
    </form>
  );
};

export default LoginPage;
