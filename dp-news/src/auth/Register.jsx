import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const saveData = () => {
    try {
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userPassword", password);
    } catch (e) {
      console.error("Error saving data", e);
    }
  };

  const handleRegister = () => {
    if (!email || !password || !confirmPassword) {
      alert("All fields are required.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    saveData();
    navigate("/auth/login");
  };

  return (
    <>
      <section className="bg-gray-400 h-screen flex flex-row justify-center items-center text-center">
        <section className="flex flex-col bg-gray-300 p-5 rounded-lg justify-start">
            <section className="flex flex-col mb-8">
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
                <p className="">Create Account</p>
                </button>
                <button onClick={() => navigate("/login")}>  
                <p className="">Already have an account? Log in</p>
                </button>
            </section>
      </section>
    </section>
    </>
  );
}

export default Register;
