/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../index";

export interface GetCommunitiesResponseResultsItemCommunityStakesItem {
    id?: number;
    community_id: string;
    stake_id?: number;
    stake_token?: string;
    vote_weight?: number;
    stake_enabled?: boolean;
    StakeTransactions?: CommonApi.GetCommunitiesResponseResultsItemCommunityStakesItemStakeTransactionsItem[];
    created_at?: string;
    updated_at?: string;
}
