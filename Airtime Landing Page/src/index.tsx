import React from "react";
import ReactDOMClient from "react-dom/client";
import { Phone } from "./screens/Phone";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Phone />);
