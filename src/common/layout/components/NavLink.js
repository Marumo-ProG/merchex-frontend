// MUI
import Box from "@mui/material/Box";

// Components
import Typography from "../../components/Typography";

const NavLink = ({ title, href }) => {
    return (
        <Box
            component={"a"}
            href={href}
            sx={{
                textDecoration: "none",
                height: "100%",
                color: "white",
                padding: 3,
                "&:hover": {
                    backgroundColor: "white",
                    color: "black",
                },
            }}
        >
            <Typography variant={"body1"}>{title}</Typography>
        </Box>
    );
};

export default NavLink;
