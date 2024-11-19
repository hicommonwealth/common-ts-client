/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../../index";

/**
 * @example
 *     {
 *         communityId: "community_id"
 *     }
 */
export interface GetThreadsRequest {
    communityId: string;
    page?: number;
    limit?: number;
    stage?: string;
    topicId?: number;
    includePinnedThreads?: boolean;
    orderBy?: CommonApi.GetThreadsRequestOrderBy;
    fromDate?: string;
    toDate?: string;
    archived?: boolean;
    contestAddress?: string;
    status?: CommonApi.GetThreadsRequestStatus;
    withXRecentComments?: number;
}
