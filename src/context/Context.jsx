import { createContext } from "react";

export const AppContext = createContext();

const ContextProvider = (props) => {
    const phone = "+1-12345968";
    const name = "React tutorial";
    return (
        <AppContext.Provider value={{ phone, name }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider;