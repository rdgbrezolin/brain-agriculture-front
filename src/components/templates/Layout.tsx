import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "../../../microfrontends/header/src/Header";

const LayoutContainer = styled.div`
  min-height: 100vh;
  background-color: #f8f9fa;
  width: 100%;
  max-width: none;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

const Main = styled.main`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 32px 24px;
  box-sizing: border-box;
  margin-top: 80px;
  flex: 1;

  @media (max-width: 768px) {
    padding: 24px 16px;
    margin-top: 100px;
  }

  @media (max-width: 480px) {
    padding: 16px 12px;
    margin-top: 120px;
  }
`;

export const Layout: React.FC = () => {
  return (
    <LayoutContainer>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </LayoutContainer>
  );
};
