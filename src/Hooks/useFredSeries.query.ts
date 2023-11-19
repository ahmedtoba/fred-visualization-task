import { useQuery } from "react-query";
import FredApiService from "../Services/fred-api.serivce"

export function useFredSeries(
    seriesId: string,
    observationStart: string | null = null,
) {
    const query = useQuery(
        ["fred-series", seriesId, observationStart],
        () => FredApiService.getSeries(seriesId, observationStart)
    );

    return query;
}