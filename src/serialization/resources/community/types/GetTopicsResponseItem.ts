/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetTopicsResponseItemWeightedVoting } from "./GetTopicsResponseItemWeightedVoting";
import { GetTopicsResponseItemActiveContestManagersItem } from "./GetTopicsResponseItemActiveContestManagersItem";

export const GetTopicsResponseItem: core.serialization.ObjectSchema<
    serializers.GetTopicsResponseItem.Raw,
    CommonApi.GetTopicsResponseItem
> = core.serialization.object({
    id: core.serialization.number().optional(),
    name: core.serialization.string().optional(),
    communityId: core.serialization.property("community_id", core.serialization.string()),
    description: core.serialization.string().optional(),
    telegram: core.serialization.string().optional(),
    featuredInSidebar: core.serialization.property("featured_in_sidebar", core.serialization.boolean().optional()),
    featuredInNewPost: core.serialization.property("featured_in_new_post", core.serialization.boolean().optional()),
    defaultOffchainTemplate: core.serialization.property(
        "default_offchain_template",
        core.serialization.string().optional()
    ),
    order: core.serialization.number().optional(),
    channelId: core.serialization.property("channel_id", core.serialization.string().optional()),
    groupIds: core.serialization.property("group_ids", core.serialization.list(core.serialization.number()).optional()),
    defaultOffchainTemplateBackup: core.serialization.property(
        "default_offchain_template_backup",
        core.serialization.string().optional()
    ),
    weightedVoting: core.serialization.property("weighted_voting", GetTopicsResponseItemWeightedVoting.optional()),
    tokenAddress: core.serialization.property("token_address", core.serialization.string().optional()),
    tokenSymbol: core.serialization.property("token_symbol", core.serialization.string().optional()),
    voteWeightMultiplier: core.serialization.property("vote_weight_multiplier", core.serialization.number().optional()),
    createdAt: core.serialization.property("created_at", core.serialization.string().optional()),
    updatedAt: core.serialization.property("updated_at", core.serialization.string().optional()),
    deletedAt: core.serialization.property("deleted_at", core.serialization.string().optional()),
    archivedAt: core.serialization.property("archived_at", core.serialization.string().optional()),
    contestTopics: core.serialization.property("contest_topics", core.serialization.unknown().optional()),
    totalThreads: core.serialization.property("total_threads", core.serialization.number().optional()),
    activeContestManagers: core.serialization.property(
        "active_contest_managers",
        core.serialization.list(GetTopicsResponseItemActiveContestManagersItem).optional()
    ),
});

export declare namespace GetTopicsResponseItem {
    interface Raw {
        id?: number | null;
        name?: string | null;
        community_id: string;
        description?: string | null;
        telegram?: string | null;
        featured_in_sidebar?: boolean | null;
        featured_in_new_post?: boolean | null;
        default_offchain_template?: string | null;
        order?: number | null;
        channel_id?: string | null;
        group_ids?: number[] | null;
        default_offchain_template_backup?: string | null;
        weighted_voting?: GetTopicsResponseItemWeightedVoting.Raw | null;
        token_address?: string | null;
        token_symbol?: string | null;
        vote_weight_multiplier?: number | null;
        created_at?: string | null;
        updated_at?: string | null;
        deleted_at?: string | null;
        archived_at?: string | null;
        contest_topics?: unknown | null;
        total_threads?: number | null;
        active_contest_managers?: GetTopicsResponseItemActiveContestManagersItem.Raw[] | null;
    }
}
