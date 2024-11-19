/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
import { CreateGroupResponseContestManagersItemContestsItemActionsItemAction } from "./CreateGroupResponseContestManagersItemContestsItemActionsItemAction";

export const CreateGroupResponseContestManagersItemContestsItemActionsItem: core.serialization.ObjectSchema<
    serializers.CreateGroupResponseContestManagersItemContestsItemActionsItem.Raw,
    CommonApi.CreateGroupResponseContestManagersItemContestsItemActionsItem
> = core.serialization.object({
    contestAddress: core.serialization.property("contest_address", core.serialization.string()),
    contestId: core.serialization.property("contest_id", core.serialization.number()),
    contentId: core.serialization.property("content_id", core.serialization.number()),
    actorAddress: core.serialization.property("actor_address", core.serialization.string()),
    action: CreateGroupResponseContestManagersItemContestsItemActionsItemAction,
    contentUrl: core.serialization.property("content_url", core.serialization.string().optional()),
    threadId: core.serialization.property("thread_id", core.serialization.number().optional()),
    threadTitle: core.serialization.property("thread_title", core.serialization.string().optional()),
    votingPower: core.serialization.property("voting_power", core.serialization.string()),
    createdAt: core.serialization.property("created_at", core.serialization.date()),
});

export declare namespace CreateGroupResponseContestManagersItemContestsItemActionsItem {
    interface Raw {
        contest_address: string;
        contest_id: number;
        content_id: number;
        actor_address: string;
        action: CreateGroupResponseContestManagersItemContestsItemActionsItemAction.Raw;
        content_url?: string | null;
        thread_id?: number | null;
        thread_title?: string | null;
        voting_power: string;
        created_at: string;
    }
}
