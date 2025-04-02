import React from "react";
import { UserProvider } from "./UserContext";
import UserProfile from "./UserProfile";
import ChangeUser from "./ChangeUser";

const App = () => {
    return (
        <UserProvider>
            <UserProfile />
            <ChangeUser />
        </UserProvider>
    );
};

export default App;
