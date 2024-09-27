import { useEffect, useState } from "react";

// Services
import BandsService from "../../common/services/bands.service";
import EventsService from "../../common/services/events.service";
import ListingsService from "../../common/services/listings.service";

// MUI
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";
import Grid2 from "@mui/material/Grid2";

// components
import PageTitle from "../components/PageTitle";
import BandBlock from "../components/BandBlock";
import EventBlock from "../components/EventBlock";
import ListingBlock from "../components/ListingBlock";
import Typography from "../../common/components/Typography";

const Overview = () => {
    const [bands, setBands] = useState([]);
    const [events, setEvents] = useState([]);
    const [listings, setListings] = useState([]);
    const [bandsLoading, setBandsLoading] = useState(true);
    const [eventsLoading, setEventsLoading] = useState(true);
    const [listingsLoading, setListingsLoading] = useState(true);

    useEffect(() => {
        fetchBands();
        fetchEvents();
        fetchListings();
    }, []);

    const fetchBands = async () => {
        const { status, data } = await BandsService.getBands();
        if (status) {
            setBands(data);
        }
        setBandsLoading(false);
    };
    const fetchEvents = async () => {
        const { status, data } = await EventsService.getEvents();
        if (status) {
            setEvents(data);
        }
        setEventsLoading(false);
    };
    const fetchListings = async () => {
        const { status, data } = await ListingsService.getListings();
        if (status) {
            setListings(data);
        }
        setListingsLoading(false);
    };
    return (
        <Stack spacing={3} flex={1}>
            <PageTitle title={"Home"} />

            <Typography variant={"h4"} align="center">
                Events
            </Typography>
            <Grid2 container spacing={2}>
                {eventsLoading
                    ? Array.from({ length: 3 }).map((_, index) => (
                          <Grid2 key={index} size={{ xs: 12, sm: 6, md: 4, xl: 3 }}>
                              <Skeleton variant="rectangular" height={400} />
                          </Grid2>
                      ))
                    : events.map((event) => (
                          <Grid2 item size={{ xs: 12, sm: 6, md: 4, xl: 3 }} key={event.id}>
                              <EventBlock event={event} />
                          </Grid2>
                      ))}
            </Grid2>

            <Typography variant={"h4"} align="center">
                Bands
            </Typography>
            <Grid2 container spacing={2}>
                {bandsLoading
                    ? Array.from({ length: 3 }).map((_, index) => (
                          <Grid2 item size={{ xs: 12, sm: 6, md: 4, xl: 3 }}>
                              <Skeleton
                                  key={index}
                                  variant="rectangular"
                                  width={400}
                                  height={400}
                              />
                          </Grid2>
                      ))
                    : bands.map((band) => (
                          <Grid2 item size={{ xs: 12, sm: 6, md: 4, xl: 3 }}>
                              <BandBlock key={band.id} band={band} />
                          </Grid2>
                      ))}
            </Grid2>

            <Typography variant={"h4"} align="center">
                Listings
            </Typography>

            <Grid2 container spacing={2}>
                {listingsLoading
                    ? Array.from({ length: 3 }).map((_, index) => (
                          <Grid2 key={index} size={{ xs: 12, sm: 6, md: 4, xl: 3 }}>
                              <Skeleton variant="rectangular" height={400} />
                          </Grid2>
                      ))
                    : listings.map((listing) => (
                          <Grid2 item size={{ xs: 12, sm: 6, md: 4, xl: 3 }} key={listing.id}>
                              <ListingBlock listing={listing} />
                          </Grid2>
                      ))}
            </Grid2>
        </Stack>
    );
};

export default Overview;
