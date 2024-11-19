/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../index";

export interface CreateGroupResponseCommunityStakesItem {
    id?: number;
    communityId: string;
    stakeId?: number;
    stakeToken?: string;
    voteWeight?: number;
    stakeEnabled?: boolean;
    stakeTransactions?: CommonApi.CreateGroupResponseCommunityStakesItemStakeTransactionsItem[];
    createdAt?: Date;
    updatedAt?: Date;
}
