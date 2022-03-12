import { FC } from "react";
import { Outlet } from "react-router-dom";
import { SidebarWrapper } from ".";

const Layout: FC = ({ children }) => {
    return (
        <>
            <SidebarWrapper>
                {children}
                <Outlet />
            </SidebarWrapper>
        </>
    );
};

export default Layout;
