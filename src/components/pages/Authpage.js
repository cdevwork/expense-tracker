import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [isSignin, setIsSignin] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsSignin(!isSignin);
    setUsername("");
    setPassword("");
    setEmail("");
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    if (isSignin) {
      if (email && password) {
        const userExists = storedUsers.find(
          (user) => user.email === email && user.password === password
        );
        if (userExists) {
          localStorage.setItem("loggedIn", "true");
          alert("Sign-In Successful!");
          navigate("/expenseform");
        } else {
          alert("Invalid credentials!");
        }
      } else {
        alert("Please fill in all fields.");
      }
    } else {
      if (!username || !email || !password) {
        alert("Please fill in all fields.");
        return;
      }
      if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return;
      }
      const userExists = storedUsers.find(
        (user) => user.email === email || user.username === username
      );
      if (userExists) {
        alert("User already exists! Please Sign-In.");
      } else {
        storedUsers.push({ username, email, password });
        localStorage.setItem("users", JSON.stringify(storedUsers));
        alert("Sign-Up Successful! Please Sign-In.");
        setIsSignin(true);
      }
    }
  };

  return (
    <div className="form-sign">
      <div className="wer">
        <h1>{isSignin ? "Sign-In" : "Sign-Up"}</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          {!isSignin && (
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          )}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button type="submit">{isSignin ? "Sign-In" : "Sign-Up"}</button>
        </form>
        <p>
          {isSignin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button onClick={handleToggle}>
            {isSignin ? "Sign-Up" : "Sign-In"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
