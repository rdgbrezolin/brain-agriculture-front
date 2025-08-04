import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/atoms/Footer";
import "./App.css";

const Header = React.lazy(() => import("header/Header"));
const Dashboard = React.lazy(() => import("dashboard/Dashboard"));

const ProducersPage = React.lazy(() =>
  import("./components/pages/ProducersPage").then((module) => ({
    default: module.ProducersPage,
  }))
);
const RegisterPage = React.lazy(() =>
  import("./components/pages/RegisterPage").then((module) => ({
    default: module.RegisterPage,
  }))
);

const LoadingFallback = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      fontSize: "18px",
      color: "#666",
    }}
  >
    Carregando microfrontend...
  </div>
);

function App() {
  return (
    <Provider store={store}>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: "none",
          overflow: "hidden",
          position: "relative",
          paddingBottom: "400px",
        }}
      >
        <BrowserRouter>
          <Suspense fallback={<LoadingFallback />}>
            <Header />
            <main style={{ marginTop: "80px", flex: 1 }}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/produtores" element={<ProducersPage />} />
                <Route path="/cadastrar" element={<RegisterPage />} />
                <Route path="/editar/:id" element={<RegisterPage />} />
              </Routes>
            </main>
          </Suspense>
        </BrowserRouter>
      </div>
      <Footer />
    </Provider>
  );
}

export default App;
