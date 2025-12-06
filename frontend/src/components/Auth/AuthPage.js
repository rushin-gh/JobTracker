import { useState } from "react";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";

const AuthPage = () => {
  const [mode, setMode] = useState("login");

  return (
    <div id="auth-page-ele">
      {mode === "login" ? (
        <LoginPage setMode={setMode} />
      ) : (
        <RegisterPage setMode={setMode} />
      )}
    </div>
  );
};

export default AuthPage;
