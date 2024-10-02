// React
import { useEffect, useState } from "react";

// Services
import EventsService from "../../common/services/events.service";

// MUI
import Stack from "@mui/material/Stack";
import Grid2 from "@mui/material/Grid2";
import Skeleton from "@mui/material/Skeleton";

// Components
import Typography from "../../common/components/Typography";
import EventBlock from "../components/EventBlock";
import PageTitle from "../components/PageTitle";

const Events = () => {
    const [events, setEvents] = useState([]);
    const [eventsLoading, setEventsLoading] = useState(true);

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        const { status, data } = await EventsService.getEvents();
        if (status) {
            setEvents(data);
        }
        setEventsLoading(false);
    };
    return (
        <Stack spacing={3} flex={1}>
            <PageTitle title={"Events"} />

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
        </Stack>
    );
};

export default Events;
