import React from "react";
import ReactDOM from "react-dom/client";
import LoginPage from "./components/loginPage";

const App = () => {
  return (
    <div id="app">
      <LoginPage />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
