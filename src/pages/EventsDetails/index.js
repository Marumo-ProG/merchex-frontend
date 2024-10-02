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
                    src={event?.band.photo}
                    alt={event?.name}
                    sx={{ objectFit: "cover", height: 450, width: 450 }}
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

            <PageTitle title={"Included"} />
            <Stack direction={"row"} spacing={3}>
                <Stack width={"100%"} spacing={2}>
                    <Typography variant={"h4"} align="center">
                        Band
                    </Typography>
                    {!eventLoading && <BandBlock band={event.band} />}
                </Stack>
                <Stack width={"100%"} spacing={2}>
                    <Typography variant={"h4"} align="center">
                        Listings
                    </Typography>
                    <Stack width={400}>
                        {eventLoading
                            ? Array.from({ length: 3 }).map((_, index) => (
                                  <Skeleton key={index} variant="rectangular" height={400} />
                              ))
                            : event.listings.map((listing) => (
                                  <ListingBlock
                                      key={listing.id}
                                      listing={{
                                          ...listing,
                                          photo: process.env.REACT_APP_BASE_URL + listing.photo,
                                      }}
                                  />
                              ))}
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default EventsDetails;
