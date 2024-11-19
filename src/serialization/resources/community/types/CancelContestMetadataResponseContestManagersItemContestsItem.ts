/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
import { CancelContestMetadataResponseContestManagersItemContestsItemScoreItem } from "./CancelContestMetadataResponseContestManagersItemContestsItemScoreItem";
import { CancelContestMetadataResponseContestManagersItemContestsItemActionsItem } from "./CancelContestMetadataResponseContestManagersItemContestsItemActionsItem";

export const CancelContestMetadataResponseContestManagersItemContestsItem: core.serialization.ObjectSchema<
    serializers.CancelContestMetadataResponseContestManagersItemContestsItem.Raw,
    CommonApi.CancelContestMetadataResponseContestManagersItemContestsItem
> = core.serialization.object({
    contestAddress: core.serialization.property("contest_address", core.serialization.string()),
    contestId: core.serialization.property("contest_id", core.serialization.number()),
    startTime: core.serialization.property("start_time", core.serialization.date()),
    endTime: core.serialization.property("end_time", core.serialization.date()),
    scoreUpdatedAt: core.serialization.property("score_updated_at", core.serialization.date().optional()),
    score: core.serialization.list(CancelContestMetadataResponseContestManagersItemContestsItemScoreItem).optional(),
    actions: core.serialization
        .list(CancelContestMetadataResponseContestManagersItemContestsItemActionsItem)
        .optional(),
});

export declare namespace CancelContestMetadataResponseContestManagersItemContestsItem {
    interface Raw {
        contest_address: string;
        contest_id: number;
        start_time: string;
        end_time: string;
        score_updated_at?: string | null;
        score?: CancelContestMetadataResponseContestManagersItemContestsItemScoreItem.Raw[] | null;
        actions?: CancelContestMetadataResponseContestManagersItemContestsItemActionsItem.Raw[] | null;
    }
}
