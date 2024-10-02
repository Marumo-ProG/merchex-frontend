// React
import { useEffect, useState } from "react";

// date fns
import { format } from "date-fns";

// Router
import { useParams } from "react-router-dom";

// Services
import EventsService from "../../common/services/events.service";

// MUI
import Stack from "@mui/material/Stack";
import Grid2 from "@mui/material/Grid2";
import Skeleton from "@mui/material/Skeleton";
import CardMedia from "@mui/material/CardMedia";

// Components
import Typography from "../../common/components/Typography";
import PageTitle from "../components/PageTitle";
import EventTag from "./components/EventTag";

// Containers
import ListingBlock from "../components/ListingBlock";
import BandBlock from "../components/BandBlock";

// Icons
import LocationIcon from "@mui/icons-material/FmdGood";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import WatchIcon from "@mui/icons-material/Watch";
import BookOnlineIcon from "@mui/icons-material/BookOnline";

const EventsDetails = () => {
    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const [eventLoading, setEventLoading] = useState(true);

    useEffect(() => {
        fetchEvent();
    }, []);

    const fetchEvent = async () => {
        const { status, data } = await EventsService.getEventDetails(id);
        if (status) {
            setEvent(data);
        }
        setEventLoading(false);
    };
    return (
        <Stack spacing={3} flex={1}>
            <PageTitle title={"Events Details"} />
            <Stack direction="row" alignItems={"center"} spacing={3}>
                <CardMedia
                    component="img"
                    height="200px"
                    src={event?.band.photo}
                    alt={event?.name}
                    sx={{ objectFit: "cover", height: 300, width: 300 }}
                />
                <Stack spacing={2} flex={1}>
                    <Typography
                        variant="h4"
                        sx={{ textDecoration: "underline", textAlign: "center" }}
                    >
                        {event?.name}
                    </Typography>
                    <Typography variant="body1" align="center">
                        {event?.description}
                    </Typography>
                    <EventTag Icon={LocationIcon} text={event?.location} color={"red"} />
                    <Stack direction="row" spacing={3}>
                        <EventTag
                            Icon={InsertInvitationIcon}
                            text={event?.date && format(new Date(event?.date), "dd MMMM yyyy")}
                            color={"red"}
                        />
                        <EventTag Icon={WatchIcon} text={event?.time} color={"red"} />
                    </Stack>
                    <EventTag Icon={BookOnlineIcon} text={"R " + event?.price} color={"red"} />
                </Stack>
            </Stack>

            <PageTitle title={"Bands"} />
            <Stack width={500}>{!eventLoading && <BandBlock band={event.band} />}</Stack>
        </Stack>
    );
};

export default EventsDetails;
