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
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
