import { AuthContextProvider } from "./_utilities/authContext";

function Layout ({children}) {
    return <AuthContextProvider>{children}</AuthContextProvider>
}

export default Layout;