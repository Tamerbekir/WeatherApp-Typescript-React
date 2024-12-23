import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar.tsx";
import "./index.css";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Navbar />
    <App />
  </BrowserRouter>
);
