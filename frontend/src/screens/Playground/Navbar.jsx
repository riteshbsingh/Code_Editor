import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo1.png";
import { useNavigate } from "react-router-dom";
const NavbarContainer = styled.div`
  height: ${({ isFullScreen }) => (isFullScreen ? "0" : "4.5rem")};
  background: rgba(15, 15, 16, 1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavbarContent = styled.button`
  background: transparent;
  border: 0;

  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
`;

const Logo = styled.img`
  width: 60px;
  height: 60px;
`;

const MainHeading = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  color: #fff;

  span {
    font-weight: 700;
  }
`;

const Navbar = ({ isFullScreen }) => {
  const navigate = useNavigate();
  return (
    <NavbarContainer isFullScreen={isFullScreen}>
      <NavbarContent
        onClick={() => {
          navigate("/");
        }}
      >
        <Logo src={logo} />
        <MainHeading>
          <span>Co</span> Coder
        </MainHeading>
      </NavbarContent>
    </NavbarContainer>
  );
};

export default Navbar;
