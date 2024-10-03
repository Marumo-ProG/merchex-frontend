import { useState } from "react";

// MUI
import Stack from "@mui/material/Stack";

import { Outlet } from "react-router-dom";

// Components
import Typography from "../components/Typography";
import NavLink from "./components/NavLink";

// Containers
import LoginModal from "./containers/LoginModal";
import SignupModal from "./containers/SignupModal";

const MainLayout = () => {
    const [openLoginModal, setOpenLoginModal] = useState(false);
    const [openSignupModal, setOpenSignupModal] = useState(false);
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
                <Typography sx={{ fontFamily: "cursive", color: "white" }} variant={"h3"}>
                    Merchex trading
                </Typography>
                <Stack direction="row" spacing={2} alignItems={"center"}>
                    <NavLink title={"Home"} href={"/"} />
                    <NavLink title={"Listings"} href={"/listings"} />
                    <Stack
                        onClick={() => setOpenLoginModal(true)}
                        sx={{
                            height: "100%",
                            color: "white",
                            padding: 3,
                            cursor: "pointer",
                            "&:hover": {
                                backgroundColor: "white",
                                color: "black",
                            },
                        }}
                    >
                        <Typography variant={"body1"}>Login</Typography>
                    </Stack>
                    <Stack
                        onClick={() => setOpenSignupModal(true)}
                        sx={{
                            height: "100%",
                            color: "white",
                            padding: 3,
                            cursor: "pointer",
                            "&:hover": {
                                backgroundColor: "white",
                                color: "black",
                            },
                        }}
                    >
                        <Typography variant={"body1"}>Register</Typography>
                    </Stack>
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
                <Typography sx={{ color: "red", textDecoration: "underline" }} variant={"body1"}>
                    Lenny Thobejane
                </Typography>
            </Stack>
            <LoginModal open={openLoginModal} handleClose={() => setOpenLoginModal(false)} />
            <SignupModal open={openSignupModal} handleClose={() => setOpenSignupModal(false)} />
        </Stack>
    );
};

export default MainLayout;
