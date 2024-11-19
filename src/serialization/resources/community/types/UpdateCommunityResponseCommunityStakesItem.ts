/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
import { UpdateCommunityResponseCommunityStakesItemStakeTransactionsItem } from "./UpdateCommunityResponseCommunityStakesItemStakeTransactionsItem";

export const UpdateCommunityResponseCommunityStakesItem: core.serialization.ObjectSchema<
    serializers.UpdateCommunityResponseCommunityStakesItem.Raw,
    CommonApi.UpdateCommunityResponseCommunityStakesItem
> = core.serialization.object({
    id: core.serialization.number().optional(),
    communityId: core.serialization.property("community_id", core.serialization.string()),
    stakeId: core.serialization.property("stake_id", core.serialization.number().optional()),
    stakeToken: core.serialization.property("stake_token", core.serialization.string().optional()),
    voteWeight: core.serialization.property("vote_weight", core.serialization.number().optional()),
    stakeEnabled: core.serialization.property("stake_enabled", core.serialization.boolean().optional()),
    stakeTransactions: core.serialization.property(
        "StakeTransactions",
        core.serialization.list(UpdateCommunityResponseCommunityStakesItemStakeTransactionsItem).optional()
    ),
    createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
    updatedAt: core.serialization.property("updated_at", core.serialization.date().optional()),
});

export declare namespace UpdateCommunityResponseCommunityStakesItem {
    interface Raw {
        id?: number | null;
        community_id: string;
        stake_id?: number | null;
        stake_token?: string | null;
        vote_weight?: number | null;
        stake_enabled?: boolean | null;
        StakeTransactions?: UpdateCommunityResponseCommunityStakesItemStakeTransactionsItem.Raw[] | null;
        created_at?: string | null;
        updated_at?: string | null;
    }
}
