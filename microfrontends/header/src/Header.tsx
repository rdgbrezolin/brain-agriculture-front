import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
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
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

const Logo = styled.div`
  color: #1a1a1a;
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #007bff;
  }
`;

const Navigation = styled.nav`
  display: flex;
  gap: 8px;
  align-items: center;

  @media (max-width: 768px) {
    gap: 4px;
  }
`;

const NavButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "active",
})<{ active?: boolean }>`
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
    padding: 6px 12px;
    font-size: 13px;
  }

  @media (max-width: 480px) {
    padding: 4px 8px;
    font-size: 12px;
  }
`;

export interface HeaderProps {
  title?: string;
  onLogoClick?: () => void;
  customNavigation?: React.ReactNode;
  showNavigation?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  title = "Brain Agriculture",
  onLogoClick,
  customNavigation,
  showNavigation = true,
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const getCurrentPage = () => {
    const path = location.pathname;
    if (path === "/") return "dashboard";
    if (path === "/produtores") return "producers";
    if (path === "/cadastrar" || path.startsWith("/editar")) return "register";
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

  const handleLogoClick = () => {
    if (onLogoClick) {
      onLogoClick();
    } else {
      navigate("/");
    }
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo onClick={handleLogoClick}>{title}</Logo>

        {showNavigation && (
          <Navigation>
            {customNavigation || (
              <>
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
              </>
            )}
          </Navigation>
        )}
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
