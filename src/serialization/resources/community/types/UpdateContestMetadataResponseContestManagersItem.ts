/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
import { UpdateContestMetadataResponseContestManagersItemContestsItem } from "./UpdateContestMetadataResponseContestManagersItemContestsItem";
import { UpdateContestMetadataResponseContestManagersItemTopicsItem } from "./UpdateContestMetadataResponseContestManagersItemTopicsItem";

export const UpdateContestMetadataResponseContestManagersItem: core.serialization.ObjectSchema<
    serializers.UpdateContestMetadataResponseContestManagersItem.Raw,
    CommonApi.UpdateContestMetadataResponseContestManagersItem
> = core.serialization.object({
    contestAddress: core.serialization.property("contest_address", core.serialization.string()),
    communityId: core.serialization.property("community_id", core.serialization.string()),
    name: core.serialization.string(),
    imageUrl: core.serialization.property("image_url", core.serialization.string().optional()),
    fundingTokenAddress: core.serialization.property("funding_token_address", core.serialization.string().optional()),
    prizePercentage: core.serialization.property("prize_percentage", core.serialization.number().optional()),
    payoutStructure: core.serialization.property(
        "payout_structure",
        core.serialization.list(core.serialization.number())
    ),
    interval: core.serialization.number(),
    ticker: core.serialization.string().optional(),
    decimals: core.serialization.number().optional(),
    createdAt: core.serialization.property("created_at", core.serialization.date()),
    cancelled: core.serialization.boolean().optional(),
    ended: core.serialization.boolean().optional(),
    contests: core.serialization.list(UpdateContestMetadataResponseContestManagersItemContestsItem).optional(),
    farcasterFrameUrl: core.serialization.property("farcaster_frame_url", core.serialization.string().optional()),
    farcasterFrameHashes: core.serialization.property(
        "farcaster_frame_hashes",
        core.serialization.list(core.serialization.string()).optional()
    ),
    neynarWebhookId: core.serialization.property("neynar_webhook_id", core.serialization.string().optional()),
    neynarWebhookSecret: core.serialization.property("neynar_webhook_secret", core.serialization.string().optional()),
    topicId: core.serialization.property("topic_id", core.serialization.number().optional()),
    topics: core.serialization.list(UpdateContestMetadataResponseContestManagersItemTopicsItem).optional(),
    isFarcasterContest: core.serialization.property("is_farcaster_contest", core.serialization.boolean()),
});

export declare namespace UpdateContestMetadataResponseContestManagersItem {
    interface Raw {
        contest_address: string;
        community_id: string;
        name: string;
        image_url?: string | null;
        funding_token_address?: string | null;
        prize_percentage?: number | null;
        payout_structure: number[];
        interval: number;
        ticker?: string | null;
        decimals?: number | null;
        created_at: string;
        cancelled?: boolean | null;
        ended?: boolean | null;
        contests?: UpdateContestMetadataResponseContestManagersItemContestsItem.Raw[] | null;
        farcaster_frame_url?: string | null;
        farcaster_frame_hashes?: string[] | null;
        neynar_webhook_id?: string | null;
        neynar_webhook_secret?: string | null;
        topic_id?: number | null;
        topics?: UpdateContestMetadataResponseContestManagersItemTopicsItem.Raw[] | null;
        is_farcaster_contest: boolean;
    }
}
