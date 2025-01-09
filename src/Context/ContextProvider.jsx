import store from "./store";

const ContextProvider = ({ children }) => {

    return (
        <store.Provider>
            {children}
        </store.Provider>
    )
}