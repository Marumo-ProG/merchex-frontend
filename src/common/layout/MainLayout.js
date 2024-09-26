// MUI
import Stack from "@mui/material/Stack";

import { Outlet } from "react-router-dom";

// Containers

const MainLayout = () => {
    return (
        <Stack>
            <Outlet />
        </Stack>
    );
};

export default MainLayout;
