import { Provider } from "react-redux";
import { store } from "./store";
import { AppRouter } from "./routes";
import { Footer } from "./components/atoms/Footer";
import "./App.css";

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
        <AppRouter />
      </div>
      <Footer />
    </Provider>
  );
}

export default App;
