import { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../Config/firebase";

const EmailPasswordReset = () => {
  const [email, setEmail] = useState("");
  const [resetSuccess, setResetSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handlePasswordReset = async () => {
    try {
      const authInstance = getAuth(auth);
      await sendPasswordResetEmail(authInstance, email);
      setResetSuccess(true);
      setError(null);
    } catch (error) {
      setError(error.message);
      setResetSuccess(false);
    }
  };

  return (
    <div>
      <h1>Password Reset</h1>
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handlePasswordReset}>Submit</button>
      {resetSuccess && <p>Password reset email sent!</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default EmailPasswordReset;
