import api from "./api";
import { handleError } from "../utils/utils";

const getEvents = async () => {
    try {
        const response = await api.get("events/");
        return {
            status: true,
            data: response.data,
        };
    } catch (error) {
        return handleError(error);
    }
};

const EventsService = {
    getEvents,
};

export default EventsService;
