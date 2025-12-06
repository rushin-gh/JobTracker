const RegisterPage = (props) => {
  const { setMode } = props;
  return (
    <form>
      <div id="register-page-ele">
        <div className="register-page-field" id="username-ele">
          <span>Register</span>
        </div>
        <div className="register-page-field" id="username-ele">
          <input type="text" id="username-inp" placeholder="Username" />
        </div>
        <div className="register-page-field" id="password-ele">
          <input type="password" id="password-inp" placeholder="Password" />
        </div>
        <div className="register-page-field">
          <button type="submit">Submit</button>
        </div>
        <div className="register-page-field">
          <span>Already have account? </span>{" "}
          <span className="link-css" onClick={() => setMode("login")}>
            Login
          </span>
        </div>
      </div>
    </form>
  );
};

export default RegisterPage;
