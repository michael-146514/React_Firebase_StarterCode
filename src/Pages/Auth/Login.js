import { useState, useEffect } from "react";
import { auth, googleProvider } from "../../Config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [UserEmail, setUserEmail] = useState("");
  const [UserPassword, setUserPassword] = useState("");
  const navigate = useNavigate(); // Hook from React Router
  const user = auth.currentUser;

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, UserEmail, UserPassword);
      navigate("/profile");
    } catch (error) {
      console.error(error);
    }
  };

  const GoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/profile");
    } catch (error) {
      console.error(error);
    }
  };

  const CheckUser = async () => {
    if (!user) {
      navigate("/profile");
    }
  };

  useEffect(() => {
    CheckUser();
  }, []);
  return (
    <div className="AuthBox">
      <h1>Login</h1>
      <div>
        {" "}
        <input
          placeholder="Email"
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setUserPassword(e.target.value)}
        />
        <button onClick={signIn}>Sign In</button>
      </div>
      <div>
        <button onClick={GoogleSignIn}>Google SignIn</button>
      </div>
    </div>
  );
};

export default Login;
