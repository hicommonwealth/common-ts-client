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
    orderBy?: CommonApi.GetCommunitiesRequestOrderBy;
    orderDirection?: CommonApi.GetCommunitiesRequestOrderDirection;
    relevanceBy?: CommonApi.GetCommunitiesRequestRelevanceBy;
    network?: CommonApi.GetCommunitiesRequestNetwork;
    base?: CommonApi.GetCommunitiesRequestBase;
    ethChainId?: number;
    cosmosChainId?: string;
    communityType?: CommonApi.GetCommunitiesRequestCommunityType;
    tagIds?: number | number[];
    includeNodeInfo?: boolean;
    stakeEnabled?: boolean;
    hasGroups?: boolean;
    includeLast30DayThreadCount?: boolean;
}
