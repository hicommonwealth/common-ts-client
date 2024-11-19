/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
import { CreateGroupResponseContestManagersItemContestsItemScoreItem } from "./CreateGroupResponseContestManagersItemContestsItemScoreItem";
import { CreateGroupResponseContestManagersItemContestsItemActionsItem } from "./CreateGroupResponseContestManagersItemContestsItemActionsItem";

export const CreateGroupResponseContestManagersItemContestsItem: core.serialization.ObjectSchema<
    serializers.CreateGroupResponseContestManagersItemContestsItem.Raw,
    CommonApi.CreateGroupResponseContestManagersItemContestsItem
> = core.serialization.object({
    contestAddress: core.serialization.property("contest_address", core.serialization.string()),
    contestId: core.serialization.property("contest_id", core.serialization.number()),
    startTime: core.serialization.property("start_time", core.serialization.date()),
    endTime: core.serialization.property("end_time", core.serialization.date()),
    scoreUpdatedAt: core.serialization.property("score_updated_at", core.serialization.date().optional()),
    score: core.serialization.list(CreateGroupResponseContestManagersItemContestsItemScoreItem).optional(),
    actions: core.serialization.list(CreateGroupResponseContestManagersItemContestsItemActionsItem).optional(),
});

export declare namespace CreateGroupResponseContestManagersItemContestsItem {
    interface Raw {
        contest_address: string;
        contest_id: number;
        start_time: string;
        end_time: string;
        score_updated_at?: string | null;
        score?: CreateGroupResponseContestManagersItemContestsItemScoreItem.Raw[] | null;
        actions?: CreateGroupResponseContestManagersItemContestsItemActionsItem.Raw[] | null;
    }
}
