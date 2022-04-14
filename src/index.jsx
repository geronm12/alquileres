import { createRoot } from "react-dom/client";
import HomePage from "./Pages/Home";

import "./Sass/BootstrapSass.scss";
import "./index.css";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<HomePage />);
