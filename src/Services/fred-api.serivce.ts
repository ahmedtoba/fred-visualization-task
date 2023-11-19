import axios, { AxiosResponse } from "axios";
import { FredApiResponse } from "../Models/fred-api-response.model";

export default class FredApiService {
    private static fredApi = axios.create({
        baseURL: process.env.REACT_APP_FRED_API_URL,
        params: {
            api_key: process.env.REACT_APP_FRED_API_KEY,
            file_type: "json",
        },
    });

    static getSeries(seriesId: string, observationStart: string | null = null) {
        return this.fredApi.get<FredApiResponse>("", {
            params: {
                series_id: seriesId,
                observation_start: observationStart,
                frequency: "a",
            },
        }).then((response: AxiosResponse<FredApiResponse>) => {
            return response.data;
        }).catch((error) => {
            console.error(error);
        }); 
    }
}



