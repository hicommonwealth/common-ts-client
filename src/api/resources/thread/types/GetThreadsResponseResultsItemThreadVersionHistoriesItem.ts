/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../index";

export interface GetThreadsResponseResultsItemThreadVersionHistoriesItem {
    id: number;
    thread_id: number;
    /** Address of the creator of the post or the collaborator */
    address: string;
    body: string;
    timestamp: CommonApi.GetThreadsResponseResultsItemThreadVersionHistoriesItemTimestamp;
    content_url?: string;
}
