import api from "./api";
import { handleError } from "../utils/utils";

const getListings = async () => {
    try {
        const response = await api.get("listings/");
        return {
            status: true,
            data: response.data,
        };
    } catch (error) {
        return handleError(error);
    }
};

const ListingsService = {
    getListings,
};

export default ListingsService;
