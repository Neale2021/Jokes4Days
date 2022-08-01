import '../App.css';
import { Nav, Navbar, NavLink } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { Link } from "react-router-dom";

const Navagationbar = ()=> {
    return (
      
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
          <NavbarToggle aria-controls="navbarScroll" data-bs-target="#navbarScroll"/>
          <NavbarCollapse id="navbarScroll">
          <Nav>
          <NavLink eventKey="1" as={Link} to='/Home'>Home</NavLink>
          <NavLink eventKey="2" as={Link} to='/dadJokes'>DadJokes</NavLink>
          <NavLink eventKey="3" as={Link} to='/geekJokes'>GeekJokes</NavLink>
          <NavLink eventKey="4" as={Link} to='/randomJokes'>RandomJokes</NavLink>
          </Nav>
          </NavbarCollapse>
      </Navbar>

  );
}


export default Navagationbar;
