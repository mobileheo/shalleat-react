import React, { Component } from "react";
import AuthPage from "./pages/AuthPage";

// const onSubmit = event => {
//   // console.log(event.target.value);
// };

class App extends Component {
  render() {
    return (
      <div className="container mt-4">
        <AuthPage />
      </div>
    );
  }
}

export default App;
