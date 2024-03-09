import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
    const location = useLocation();
    const currentPath = location.pathname;
    return (
        <>
            <header className="header">
                <Header currentPath={currentPath}/>
            </header>
            <main>
                <Outlet />
            </main>
            <footer className="footer">
                <Footer />
            </footer>
        </>
    )
}