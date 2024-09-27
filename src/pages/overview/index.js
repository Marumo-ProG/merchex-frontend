import { useEffect, useState } from "react";

// Services
import BandsService from "../../common/services/bands.service";

// MUI
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";

// components
import PageTitle from "../components/PageTitle";
import BandBlock from "../components/BandBlock";

const Overview = () => {
    const [bands, setBands] = useState([]);
    const [events, setEvents] = useState([]);
    const [bandsLoading, setBandsLoading] = useState(true);

    useEffect(() => {
        fetchBands();
    }, []);

    const fetchBands = async () => {
        const { status, data } = await BandsService.getBands();
        if (status) {
            setBands(data);
        }
        setBandsLoading(false);
    };
    return (
        <Stack spacing={3} flex={1}>
            <PageTitle title={"Home"} />
            <Stack gap={2} flexWrap={"wrap"} direction={"row"}>
                {bandsLoading
                    ? Array.from({ length: 3 }).map((_, index) => (
                          <Skeleton key={index} variant="rectangular" width={400} height={400} />
                      ))
                    : bands.map((band) => <BandBlock key={band.id} band={band} />)}
            </Stack>
        </Stack>
    );
};

export default Overview;
