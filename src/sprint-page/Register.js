import React, { useState } from "react";
import axios from "axios";
import Header from "../components/header";
import Footer from "../components/footer";
import Alert from "react-bootstrap/Alert";
function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Kiểm tra xem username đã tồn tại hay chưa
      const checkUsernameResponse = await axios.get(
        `http://localhost:3000/users?username=${username}`
      );
      if (checkUsernameResponse.data.length > 0) {
        // Nếu username đã tồn tại, hiển thị thông báo và không thực hiện đăng ký
        setErrorMessage(
          "Username already exists. Please choose a different username."
        );
      } else {
        // Nếu username chưa tồn tại, thực hiện đăng ký
        const response = await axios.post("http://localhost:3000/users", {
          username,
          email,
          password,
          role: 0, // Setting default value for 'role'
        });
        alert("Register succesfully !");
        window.location = "/login";
      }
    } catch (error) {
      console.error("Registration error:", error);
      // Handle registration error, display error message to user
      setErrorMessage("Registration error !");
    }
  };

  return (
    <div>
      <Header />
      <div className="flex-form">
        <form className="form" onSubmit={handleSubmit}>
          <p className="title">Register</p>
          <p className="message">Sign In now and get full access to our app.</p>
          {errorMessage ? (
            <Alert
              style={{ backgroundColor: "white", color: "red", border: "none" }}
            >
              {errorMessage}
            </Alert>
          ) : null}
          <label>
            <input
              className="input"
              type="text"
              placeholder=""
              required
              value={username}
              onChange={handleChangeUsername}
            />
            <span>Username</span>
          </label>

          <label>
            <input
              className="input"
              type="email"
              placeholder=""
              required
              value={email}
              onChange={handleChangeEmail}
            />
            <span>Email</span>
          </label>

          <label>
            <input
              className="input"
              type="password"
              placeholder=""
              required
              value={password}
              onChange={handleChangePassword}
            />
            <span>Password</span>
          </label>

          <button className="submit" type="submit">
            Register
          </button>

          <p className="signin">
            You haven't an account? <a href="#">Sign In</a>
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
