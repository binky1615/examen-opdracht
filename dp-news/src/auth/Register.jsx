import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const saveData = () => {
    try {
      localStorage.setItem("userName", user);
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userPassword", password);
    } catch (e) {
      console.error("Error saving data", e);
    }
  };

  const handleRegister = () => {
    if (!user || !email || !password || !confirmPassword) {
      alert("All fields are required.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    saveData();
    navigate("/login");
  };

  return (
    <>
      <section className="h-screen flex flex-row justify-center items-center text-center">
        <section className="flex flex-col bg-gray-300 p-5 rounded-lg justify-start">
            <section className="flex flex-col mb-8">
                <input
                className=""
                placeholder="User"
                type="user"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                />
                <input
                className=""
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <input
                className=""
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <input
                className=""
                placeholder="Confirm Password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </section>
            <section className="flex flex-col gap-2">
                <button className="" onClick={handleRegister}>
                <p className="text-gray-600 hover:text-gray-800">Create Account</p>
                </button>
                <Link to="/login">  
                <p className="text-gray-600 hover:text-gray-800">Already have an account? Log in</p>
                </Link>
            </section>
      </section>
    </section>
    </>
  );
}

export default Register;
