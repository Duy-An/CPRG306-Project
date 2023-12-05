import { AuthContextProvider } from "./utilities/authContext";

function Layout ({children}) {
    return <AuthContextProvider>{children}</AuthContextProvider>
}

export default Layout;