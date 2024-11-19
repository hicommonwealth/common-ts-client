/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";

export const UpdateCommunityRequestContestManagersItemContestsItemScoreItem: core.serialization.ObjectSchema<
    serializers.UpdateCommunityRequestContestManagersItemContestsItemScoreItem.Raw,
    CommonApi.UpdateCommunityRequestContestManagersItemContestsItemScoreItem
> = core.serialization.object({
    creatorAddress: core.serialization.property("creator_address", core.serialization.string()),
    contentId: core.serialization.property("content_id", core.serialization.string()),
    votes: core.serialization.string(),
    prize: core.serialization.string(),
    tickerPrize: core.serialization.number().optional(),
});

export declare namespace UpdateCommunityRequestContestManagersItemContestsItemScoreItem {
    interface Raw {
        creator_address: string;
        content_id: string;
        votes: string;
        prize: string;
        tickerPrize?: number | null;
    }
}
