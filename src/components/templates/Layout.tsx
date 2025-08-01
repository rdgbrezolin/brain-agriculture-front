import React from "react";
import styled from "styled-components";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const LayoutContainer = styled.div`
  min-height: 100vh;
  background-color: #f8f9fa;
  width: 100%;
  max-width: none;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

const Header = styled.header`
  background: #ffffff;
  color: #1a1a1a;
  padding: 16px 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  border-bottom: 1px solid #f0f0f0;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    padding: 0 16px;
  }
`;

const Logo = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: 600;
  color: #1a1a1a;
  letter-spacing: -0.3px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Navigation = styled.nav`
  display: flex;
  gap: 4px;
  align-items: center;

  @media (max-width: 768px) {
    gap: 2px;
  }
`;

const NavButton = styled.button<{ active?: boolean }>`
  background: ${(props) => (props.active ? "#1a1a1a" : "transparent")};
  border: none;
  color: ${(props) => (props.active ? "#ffffff" : "#666666")};
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;

  &:hover {
    background: ${(props) => (props.active ? "#1a1a1a" : "#f5f5f5")};
    color: ${(props) => (props.active ? "#ffffff" : "#1a1a1a")};
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 6px 12px;
    border-radius: 4px;
  }
`;

const Main = styled.main`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 32px 24px;
  box-sizing: border-box;
  margin-top: 80px; /* Altura do header + padding */
  flex: 1;

  @media (max-width: 768px) {
    padding: 24px 16px;
    margin-top: 100px; /* Altura maior no mobile devido ao layout em coluna */
  }

  @media (max-width: 480px) {
    padding: 16px 12px;
    margin-top: 120px; /* Altura ainda maior para telas muito pequenas */
  }
`;

export const Layout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const getCurrentPage = () => {
    const path = location.pathname;
    if (path === "/") return "dashboard";
    if (path === "/produtores") return "producers";
    if (path === "/cadastrar") return "register";
    if (path.startsWith("/editar/")) return "register";
    return "dashboard";
  };

  const handleNavigate = (page: string) => {
    switch (page) {
      case "dashboard":
        navigate("/");
        break;
      case "producers":
        navigate("/produtores");
        break;
      case "register":
        navigate("/cadastrar");
        break;
      default:
        navigate("/");
    }
  };

  return (
    <LayoutContainer>
      <Header>
        <HeaderContent>
          <Logo>Brain Agriculture</Logo>
          <Navigation>
            <NavButton
              active={getCurrentPage() === "dashboard"}
              onClick={() => handleNavigate("dashboard")}
            >
              Dashboard
            </NavButton>
            <NavButton
              active={getCurrentPage() === "producers"}
              onClick={() => handleNavigate("producers")}
            >
              Produtores
            </NavButton>
            <NavButton
              active={getCurrentPage() === "register"}
              onClick={() => handleNavigate("register")}
            >
              Cadastrar
            </NavButton>
          </Navigation>
        </HeaderContent>
      </Header>
      <Main>
        <Outlet />
      </Main>
    </LayoutContainer>
  );
};
