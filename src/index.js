// src/main.jsx or src/index.js
import ReactDOM from "react-dom/client";
import App from "./App";
import notes from "./notes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <App notes={notes} />
);
