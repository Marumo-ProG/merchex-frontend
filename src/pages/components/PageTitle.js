// MUI
import Stack from "@mui/material/Stack";

// Components
import Typography from "../../common/components/Typography";

const PageTitle = ({ title }) => {
    return (
        <Stack
            direction={"row"}
            alignItems={"flex-end"}
            paddingX={2}
            sx={{ borderBottom: "1px solid #999" }}
        >
            <Typography bold={true} variant={"h3"}>
                {title}
            </Typography>
        </Stack>
    );
};

export default PageTitle;
