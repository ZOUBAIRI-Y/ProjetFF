import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
    return (
        <>
            <header className="header">
                <Header/>
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