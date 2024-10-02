// MUI
import Stack from "@mui/material/Stack";

// Components
import Typography from "../../../common/components/Typography";

const EventTag = ({ Icon, text, color = "black" }) => {
    return (
        <Stack direction="row" spacing={1} alignItems={"center"}>
            <Stack
                height="50px"
                width="50px"
                alignItems={"center"}
                justifyContent={"center"}
                sx={{ backgroundColor: "#F1F1F1", borderRadius: "10px" }}
            >
                <Icon sx={{ fontSize: 30, color: "black" }} />
            </Stack>
            <Stack
                alignItems={"center"}
                justifyContent={"center"}
                sx={{ backgroundColor: "#F1F1F1", borderRadius: "10px", padding: 1 }}
            >
                <Typography variant="body1" align="center" color={color}>
                    {text}
                </Typography>
            </Stack>
        </Stack>
    );
};

export default EventTag;
