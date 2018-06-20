import React, { Component } from "react";
import AuthPage from "./pages/AuthPage";

class App extends Component {
  render() {
    onSubmit = () => {};
    return (
      <div className="container mt-4">
        <AuthPage />
      </div>
    );
  }
}

export default App;
