// Date fns
import { format } from "date-fns";

// MUI
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";

// Components
import Typography from "../../common/components/Typography";

const ListingBlock = ({ listing }) => {
    return (
        <Card
            sx={{
                width: "100%",
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
                    image={listing.photo}
                    alt={listing.name}
                    sx={{ objectFit: "cover" }}
                />
                <Stack padding={1}>
                    <Typography variant={"h5"} bold align="center">
                        {listing.name}
                    </Typography>
                    <Typography variant={"body1"} align="center">
                        {listing.description}
                    </Typography>
                    <Stack direction={"row"} spacing={3} alignItems={"center"} alignSelf={"center"}>
                        <Typography variant={"body1"} align="center">
                            Price: <strong>{listing.price}</strong>
                        </Typography>
                        <Typography variant={"body1"} align="center">
                            Posted:{" "}
                            <strong>{format(new Date(listing.created_at), "dd-MM-yyyy")}</strong>
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Card>
    );
};

export default ListingBlock;
