import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [storedEmail, setStoredEmail] = useState(null);
  const [storedPassword, setStoredPassword] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const savedEmail = localStorage.getItem("userEmail");
    const savedPassword = localStorage.getItem("userPassword");
    if (savedEmail && savedPassword) {
      setStoredEmail(savedEmail);
      setStoredPassword(savedPassword);
    }
  }, []);

  const handleLogin = () => {
    if (!email || !password) {
      alert("All fields are required.");
      return;
    }

    if (email === storedEmail && password === storedPassword) {
      navigate("/");
      localStorage.setItem("isLoggedIn", "true");
      window.location.reload();
    } else {
      alert("Onjuiste gebruikersnaam of wachtwoord");
    }
  };

  return ( 
    <>
      <section className="h-screen flex flex-row justify-center items-center text-center ">
        <section className="flex flex-col bg-gray-300 p-5 rounded-lg justify-start">
            <section className="flex flex-col mb-8">
                <input
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </section>
            <section className="flex flex-col gap-2">
                <button className="text-gray-600 hover:text-gray-800" onClick={handleLogin}>
                <p>LOGIN</p>
                </button>
                <Link to="/register">  
                <p className="text-gray-600 hover:text-gray-800">Don't have an account? Sign up</p>
                </Link>
            </section>
        </section>
      </section>
      </>
  );
}

export default Login;