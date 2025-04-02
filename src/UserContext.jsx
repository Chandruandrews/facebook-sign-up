import React, { createContext, useState } from "react";

// Step 1: Create Context
export const UserContext = createContext();

// Step 2: Create Provider Component
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState("John Doe");

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
