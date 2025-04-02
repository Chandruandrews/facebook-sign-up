import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const ChangeUser = () => {
    const { setUser } = useContext(UserContext);

    return (
        <button onClick={() => setUser("Alice Smith")}>Change User</button>
    );
};

export default ChangeUser;
