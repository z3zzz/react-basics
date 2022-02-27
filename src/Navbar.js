import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Page = styled.div`
  margin-top: 2rem;
  padding-top: 3.5rem;
  height: 6.5rem;
  width: 10rem;
  font-size: 1.5rem;
  color: ${(props) => props.color || "black"};
  background-color: ${(props) => props.backgroundColor || "white"};
  text-align: center;
`;

const Nav = styled.div`
  display: inline-block;
  padding: 24px;

  & > a:not(:first-of-type) {
    margin-left: 24px;
  }
`;

const NavLink = styled.a`
  font-size: 1.5rem;
  color: lightblue;
  text-decoration: none;
`;

function Navbar() {
  return (
    <>
      <Nav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </Nav>
      <BrowserRouter>
        <Routes>
          <Route
            path="/about"
            element={
              <Page color="red" backgroundColor="pink">
                About
              </Page>
            }
          />
          <Route
            path="/contact"
            element={
              <Page color="blue" backgroundColor="lightblue">
                Contact
              </Page>
            }
          />
          <Route
            path="/"
            element={
              <Page color="green" backgroundColor="lightgreen">
                Home
              </Page>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Navbar;
