// Date fns
import { format } from "date-fns";

// MUI
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";

// Components
import Typography from "../../common/components/Typography";

const BandBlock = ({ band }) => {
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
                <CardMedia
                    component="img"
                    height="200px"
                    image={band.banner_image}
                    alt={band.name}
                />
                <Stack padding={1}>
                    <Typography variant={"h5"} bold align="center">
                        {band.name}
                    </Typography>
                    <Typography variant={"body1"} align="center">
                        {band.description}
                    </Typography>
                    <Stack direction={"row"} spacing={3} alignItems={"center"} alignSelf={"center"}>
                        <Typography variant={"body1"} align="center">
                            Genre: <strong>{band.genre}</strong>
                        </Typography>
                        <Typography variant={"body1"} align="center">
                            Year: <strong>{band.year_formed}</strong>
                        </Typography>
                    </Stack>
                    <Typography variant={"h6"} align="center" color="red">
                        Event Details
                    </Typography>
                    <Stack paddingX={1} alignSelf={"center"}>
                        <Typography variant={"body1"}>
                            Location: <strong>{band.location}</strong>
                        </Typography>
                        <Typography variant={"body1"}>
                            Price: <strong>{band.adult_ticket_price}</strong>
                        </Typography>
                        <Typography variant={"body1"}>
                            Date and Time:{" "}
                            <strong>{format(new Date(band.date_time), "dd-MM-YYY @ HH:MM")}</strong>
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Card>
    );
};

export default BandBlock;
