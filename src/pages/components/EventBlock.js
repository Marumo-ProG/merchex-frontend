// Date fns
import { format } from "date-fns";

// MUI
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";

// Components
import Typography from "../../common/components/Typography";

const EventBlock = ({ event }) => {
    return (
        <Card
            sx={{
                width: 400,
                height: "auto",
                boxShadow: "none",
                border: "1px solid #999",
                "&:hover": {
                    boxShadow: "0 10px 10px 0 #000000",
                },
            }}
        >
            <Stack spacing={1}>
                <Stack padding={1}>
                    <Typography variant={"h5"} bold align="center">
                        {event.name}
                    </Typography>
                    <Typography variant={"body1"} align="center">
                        {event.description}
                    </Typography>
                    <Typography variant={"h6"} align="center" color="red">
                        Event Details
                    </Typography>
                    <Stack paddingX={1} alignSelf={"center"}>
                        <Typography variant={"body1"}>
                            Location: <strong>{event.location}</strong>
                        </Typography>
                        <Typography variant={"body1"}>
                            Price: <strong>{event.price}</strong>
                        </Typography>
                        <Typography variant={"body1"}>
                            Date and Time:{" "}
                            <strong>
                                {format(new Date(event.date), "dd-MM-YYY") + " @ " + event.time}
                            </strong>
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Card>
    );
};

export default EventBlock;
