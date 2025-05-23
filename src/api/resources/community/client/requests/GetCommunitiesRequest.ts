/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../../index";

/**
 * @example
 *     {}
 */
export interface GetCommunitiesRequest {
    limit?: string;
    /**
     * required for tRPC useInfiniteQuery hook, equivalent to page number
     */
    cursor?: string;
    order_by?: CommonApi.GetCommunitiesRequestOrderBy;
    order_direction?: CommonApi.GetCommunitiesRequestOrderDirection;
    relevance_by?: CommonApi.GetCommunitiesRequestRelevanceBy;
    network?: CommonApi.GetCommunitiesRequestNetwork;
    base?: CommonApi.GetCommunitiesRequestBase;
    tag_ids?: number | number[];
    include_node_info?: boolean;
    stake_enabled?: boolean;
    has_groups?: boolean;
    include_last_30_day_thread_count?: boolean;
}
