import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Navigate } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

function Login(propsLogin) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // Kiểm tra xem người dùng đã đăng nhập hay chưa mỗi khi component được render
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      // Nếu có thông tin đăng nhập trong localStorage, chuyển hướng người dùng đến trang chủ
      window.location = "/";
    }
  }, []);

  const changeUsername = (event) => {
    setUsername(event.target.value);
  };

  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      alert("Field is not empty !");
    } else {
      try {
        const response = await axios.get("http://localhost:3000/users");
        const users = response.data;
        const user = users.find(
          (user) => user.username === username && user.password === password
        );
        if (user) {
          // Lưu thông tin cần thiết của người dùng vào localStorage khi đăng nhập thành công
          const { id, username, role } = user;
          localStorage.setItem("user", JSON.stringify({ id, username, role }));
          alert("Login successful!");
          window.location = "/";
        } else {
          alert("Invalid username or password!");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while logging in.");
      }
    }
  };

  return (
    <div>
      <Header></Header>
      <div class="flex-form">
        <form class="form" onSubmit={handleLogin}>
          <p class="title">LOGIN </p>
          <p class="message">Sign In now and get full access to our app. </p>

          <label>
            <input
              class="input"
              type="text"
              placeholder=""
              required
              onChange={changeUsername}
              value={username}
            />
            <span>Username</span>
          </label>

          <label>
            <input
              class="input"
              type="password"
              placeholder=""
              required
              onChange={changePassword}
              value={password}
            />
            <span>Password</span>
          </label>

          <button class="submit" type="submit">
            Login
          </button>
          <p class="signin">
            You haven't an acount ? <a href="/register">Sign Up</a>
          </p>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Login;
