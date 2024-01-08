import { Link, Navigate } from "react-router-dom";
import { auth } from "../../Config/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { Navbar, Nav, Container } from "react-bootstrap";

const NavBar = ({}) => {
  const user = auth.currentUser;
  const nav = useNavigate();

  const Logout = async () => {
    try {
      await signOut(auth);
      nav("/");

      console.log("Signed Out");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <Link to={`/profile`}>Profile</Link>
      <button onClick={Logout}>Logout</button>
    </div>
  );
};

export default NavBar;
