/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../index";

export interface GetGlobalActivityResponse {
    limit: number;
    page: number;
    totalPages: number;
    totalResults: number;
    results: CommonApi.GetGlobalActivityResponseResultsItem[];
}