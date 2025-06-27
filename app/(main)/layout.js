import React from "react";

const MainLayout = ({ children }) => {
    return (
        <div className="relative z-10 container mx-auto mt-24 mb-20 pt-26">{children}</div>
    );
};

export default MainLayout;