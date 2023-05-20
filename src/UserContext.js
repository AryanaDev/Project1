import React from "react";
import App from "./App";
import Account from "./Account";
const UserContext = React.createContext([]);

const UserProvider = UserContext.Provider;

const UserConsumer = UserContext.Consumer;

export {UserProvider,UserConsumer}

export default UserContext