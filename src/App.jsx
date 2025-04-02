import React, { useContext } from "react";
import { ThemeProvider, ThemeContext } from "./ThemeContext";
import ThemeToggle from "./ThemeToggle";
import "./APP.css"; // Add some CSS

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app-container ${theme}`}>
      <h1>Welcome to Themed App</h1>
      <ThemeToggle />
    </div>
  );
}

export default function WrappedApp() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
