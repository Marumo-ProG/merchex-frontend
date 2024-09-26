// MUI
import Stack from "@mui/material/Stack";

import { Outlet } from "react-router-dom";

// Components
import Typography from "../components/Typography";
import NavLink from "./components/NavLink";

// Containers

const MainLayout = () => {
    return (
        <Stack>
            <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                height={80}
                sx={{ background: "black" }}
                paddingX={2}
            >
                <Typography color={"white"} bold={true} variant={"h6"}>
                    Merchex trading
                </Typography>
                <Stack direction="row" spacing={2} alignItems={"center"}>
                    <NavLink title={"Home"} href={"/"} />
                    <NavLink title={"Listings"} href={"/listings"} />
                    <NavLink title={"About"} href={"/about"} />
                    <NavLink title={"Contact"} href={"/contact"} />
                </Stack>
            </Stack>
            <Stack minHeight="calc(100vh - 80px - 70px - 72px - 16px)" padding={2}>
                <Outlet />
            </Stack>
            <Stack
                height={70}
                sx={{ background: "black" }}
                alignItems={"center"}
                justifyContent={"center"}
                padding={2}
            >
                <Typography color={"white"} variant={"body1"}>
                    © 2024 Merchex trading. All rights reserved.
                </Typography>
            </Stack>
        </Stack>
    );
};

export default MainLayout;
