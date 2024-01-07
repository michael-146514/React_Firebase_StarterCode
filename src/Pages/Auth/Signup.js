import { useState, useEffect } from "react";
import { auth, googleProvider } from "../../Config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Signup = ({}) => {
  const [UserEmail, setUserEmail] = useState("");
  const [UserPassword, setUserPassword] = useState("");
  const [UserConfirmPassword, setUserConfirmPassword] = useState("");
  const navigate = useNavigate(); // Hook from React Router
  const user = auth.currentUser;

  const signIn = async () => {
    try {
      if (UserPassword === UserConfirmPassword) {
        await createUserWithEmailAndPassword(auth, UserEmail, UserPassword);
        navigate("/profile");
      } else {
        console.log("Incorrect confirm password");
      }
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
    <div>
      <h1>Create Account</h1>
      <input
        placeholder="Email"
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setUserPassword(e.target.value)}
      />
      <input
        placeholder="Confirm Password"
        type="password"
        onChange={(e) => setUserConfirmPassword(e.target.value)}
      />
      <button onClick={signIn}>Sign In</button>
      <div>
        <button onClick={GoogleSignIn}>Google SignIn</button>
      </div>
      <a>Forgot Password?</a>
    </div>
  );
};

export default Signup;
