import { Outlet, useLocation } from "react-router-dom";
import LessorSidebar from "./LessorSidebar";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
    const location = useLocation();
    const currentPath = location.pathname;
    const shouldShowSidebar = currentPath.startsWith("/lessor");
    return (
        <div className="layout_container">
            <header className="header">
                <Header currentPath={currentPath} />
            </header>
            {shouldShowSidebar ? (
                <>
                    <div className="content-container">
                        <LessorSidebar/>
                        <main className="mainPage_content">
                            <Outlet />
                        </main>
                    </div>
                </>
            ) : (
                <>
                    <main className="mainPage_content">
                        <Outlet />
                    </main>
                </>
            )}
            <footer className="footer">
                <Footer />
            </footer>
        </div>
    );
}
