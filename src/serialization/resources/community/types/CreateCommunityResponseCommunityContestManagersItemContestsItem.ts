/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
import { CreateCommunityResponseCommunityContestManagersItemContestsItemScoreItem } from "./CreateCommunityResponseCommunityContestManagersItemContestsItemScoreItem";
import { CreateCommunityResponseCommunityContestManagersItemContestsItemActionsItem } from "./CreateCommunityResponseCommunityContestManagersItemContestsItemActionsItem";

export const CreateCommunityResponseCommunityContestManagersItemContestsItem: core.serialization.ObjectSchema<
    serializers.CreateCommunityResponseCommunityContestManagersItemContestsItem.Raw,
    CommonApi.CreateCommunityResponseCommunityContestManagersItemContestsItem
> = core.serialization.object({
    contestAddress: core.serialization.property("contest_address", core.serialization.string()),
    contestId: core.serialization.property("contest_id", core.serialization.number()),
    startTime: core.serialization.property("start_time", core.serialization.date()),
    endTime: core.serialization.property("end_time", core.serialization.date()),
    scoreUpdatedAt: core.serialization.property("score_updated_at", core.serialization.date().optional()),
    score: core.serialization.list(CreateCommunityResponseCommunityContestManagersItemContestsItemScoreItem).optional(),
    actions: core.serialization
        .list(CreateCommunityResponseCommunityContestManagersItemContestsItemActionsItem)
        .optional(),
});

export declare namespace CreateCommunityResponseCommunityContestManagersItemContestsItem {
    interface Raw {
        contest_address: string;
        contest_id: number;
        start_time: string;
        end_time: string;
        score_updated_at?: string | null;
        score?: CreateCommunityResponseCommunityContestManagersItemContestsItemScoreItem.Raw[] | null;
        actions?: CreateCommunityResponseCommunityContestManagersItemContestsItemActionsItem.Raw[] | null;
    }
}
