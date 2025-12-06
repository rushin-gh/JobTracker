import React from "react";
import ReactDOM from "react-dom/client";
import AuthPage from "./components/Auth/AuthPage";

const App = () => {
  return (
    <div id="app">
      <AuthPage />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
