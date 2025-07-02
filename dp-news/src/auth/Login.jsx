import react, { useState, useEffect } from "react";
import { useRouter } from 'expo-router';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [storedEmail, setStoredEmail] = useState(null);
  const [storedPassword, setStoredPassword] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const savedEmail = await AsyncStorage.getItem("userEmail");
      const savedPassword = await AsyncStorage.getItem("userPassword");
      if (savedEmail && savedPassword) {
        setStoredEmail(savedEmail);
        setStoredPassword(savedPassword);
      }
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "All fields are required.");
      return;
    }
    
    if (email === storedEmail && password === storedPassword) {
      router.push("/screens/tabs/home");
    } else {
      Alert.alert("Onjuiste gebruikersnaam of wachtwoord");
    }
  };

  return (
    <img
      className=""
      resizeMode="cover"
      src="/PRINCESS.png"
    >
      <div className="">
        <img
          className=""
          src="/PRINCESS.png"
        />
        <div className="">
          <input
            className=""
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <input
            className=""
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          <button className="" onClick={handleLogin}>
            <p style={styles.buttonText}>LOGIN</p>
          </button>
          <button onClick={() => router.push("/screens/auth/register")}>  
            <p className="">Don't have an account? Sign up</p>
          </button>
        </div>
      </div>
    </img>
  );
}