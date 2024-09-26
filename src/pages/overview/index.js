// MUI
import Stack from "@mui/material/Stack";

// components
import PageTitle from "../components/PageTitle";
import BandBlock from "../components/BandBlock";

const Overview = () => {
    const bands = [
        {
            id: 1,
            name: "The Crackheads",
            genre: "Punk Rock",
            description: "The Crackheads are a South African hip hop group formed in 2019.",
            biography: "The Crackheads are a South African hip hop group formed in 2019.",
            year_formed: 2019,
            active: true,
            banner_image:
                "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEghXBoDUjuGoZx9A-RNnKEXEDizhtX_LyxG-JB7CEGxD0mkJKsb6wzh0nihmBTCAMR92eAGftAxt4LbMN-wpPQHTSVndQdmelcYaSbRBhjyhBWeNyerkq-YHijmzU1T_W8CVjrFnCPOl0I/w1200-h630-p-k-no-nu/Slum+Lords+(band+pic)+72dpi.jpg",
            official_homepage: "http://www.ohmashu.co.za",
            location: "Johannesburg, South Africa",
            adult_ticket_price: 250,
            tickets_left: 43,
            date_time: "2022-12-12T19:00:00",
        },
    ];
    return (
        <Stack spacing={3}>
            <PageTitle title={"Home"} />
            <Stack gap={2} flexWrap={"wrap"} direction={"row"}>
                {bands.map((band) => (
                    <BandBlock key={band.id} band={band} />
                ))}
            </Stack>
        </Stack>
    );
};

export default Overview;
