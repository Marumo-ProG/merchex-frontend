import api from "./api";
import { handleError } from "../utils/utils";

const getBands = async () => {
    try {
        const response = await api.get("bands/");
        return {
            status: true,
            data: response.data,
        };
    } catch (error) {
        return handleError(error);
    }
};

const BandsService = {
    getBands,
};

export default BandsService;
