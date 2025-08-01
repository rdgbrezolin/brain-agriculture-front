import React from "react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#1a1a1a",
        color: "#ffffff",
        padding: "32px 0",
        borderTop: "1px solid #333",
        width: "100vw",
        position: "absolute",
        left: "0",
        right: "0",
        bottom: "0",
        boxSizing: "border-box",
        zIndex: 1000,
        marginTop: "auto",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 24px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <h3
              style={{
                margin: 0,
                fontSize: "16px",
                fontWeight: 600,
                color: "#ffffff",
              }}
            >
              Brain Agriculture
            </h3>
            <p
              style={{
                margin: 0,
                fontSize: "14px",
                color: "#cccccc",
                lineHeight: 1.5,
              }}
            >
              Sistema de gestão de produtores rurais
            </p>
            <p
              style={{
                margin: 0,
                fontSize: "14px",
                color: "#cccccc",
                lineHeight: 1.5,
              }}
            >
              Simplificando o controle agrícola
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <h3
              style={{
                margin: 0,
                fontSize: "16px",
                fontWeight: 600,
                color: "#ffffff",
              }}
            >
              Funcionalidades
            </h3>
            <p
              style={{
                margin: 0,
                fontSize: "14px",
                color: "#cccccc",
                lineHeight: 1.5,
              }}
            >
              Cadastro de Produtores
            </p>
            <p
              style={{
                margin: 0,
                fontSize: "14px",
                color: "#cccccc",
                lineHeight: 1.5,
              }}
            >
              Gestão de Fazendas
            </p>
            <p
              style={{
                margin: 0,
                fontSize: "14px",
                color: "#cccccc",
                lineHeight: 1.5,
              }}
            >
              Dashboard Analítico
            </p>
            <p
              style={{
                margin: 0,
                fontSize: "14px",
                color: "#cccccc",
                lineHeight: 1.5,
              }}
            >
              Controle de Culturas
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <h3
              style={{
                margin: 0,
                fontSize: "16px",
                fontWeight: 600,
                color: "#ffffff",
              }}
            >
              Suporte
            </h3>
            <p
              style={{
                margin: 0,
                fontSize: "14px",
                color: "#cccccc",
                lineHeight: 1.5,
              }}
            >
              Documentação
            </p>
            <p
              style={{
                margin: 0,
                fontSize: "14px",
                color: "#cccccc",
                lineHeight: 1.5,
              }}
            >
              Contato
            </p>
            <p
              style={{
                margin: 0,
                fontSize: "14px",
                color: "#cccccc",
                lineHeight: 1.5,
              }}
            >
              FAQ
            </p>
            <a
              href="mailto:suporte@brainagriculture.com"
              style={{
                color: "#007bff",
                textDecoration: "none",
                fontSize: "14px",
                transition: "color 0.2s ease",
              }}
            >
              suporte@brainagriculture.com
            </a>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <h3
              style={{
                margin: 0,
                fontSize: "16px",
                fontWeight: 600,
                color: "#ffffff",
              }}
            >
              Desenvolvimento
            </h3>
            <p
              style={{
                margin: 0,
                fontSize: "14px",
                color: "#cccccc",
                lineHeight: 1.5,
              }}
            >
              React + TypeScript
            </p>
            <p
              style={{
                margin: 0,
                fontSize: "14px",
                color: "#cccccc",
                lineHeight: 1.5,
              }}
            >
              Styled Components
            </p>
            <p
              style={{
                margin: 0,
                fontSize: "14px",
                color: "#cccccc",
                lineHeight: 1.5,
              }}
            >
              Redux Toolkit
            </p>
            <p
              style={{
                margin: 0,
                fontSize: "14px",
                color: "#cccccc",
                lineHeight: 1.5,
              }}
            >
              React Router
            </p>
          </div>
        </div>

        <div
          style={{
            height: "1px",
            background: "#333",
            margin: "24px 0",
          }}
        />

        <div
          style={{
            textAlign: "center",
            fontSize: "12px",
            color: "#999999",
            marginTop: "16px",
          }}
        >
          © {currentYear} Brain Agriculture. Todos os direitos reservados.
          <br />
          Desenvolvido com ❤️ para o teste por{" "}
          <a
            href="https://www.linkedin.com/in/rodrigobrezolin/"
            target="_blank"
            style={{
              color: "#007bff",
              textDecoration: "none",
            }}
          >
            Rodrigo Brezolin
          </a>
          .
        </div>
      </div>
    </footer>
  );
};
