import React, { createContext, useState } from "react";

// Creating Theme Context
export const ThemeContext = createContext();

// Creating Theme Provider Component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // Default theme: Light

  // Function to Toggle Theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
