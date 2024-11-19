/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
import { CreateCommentResponseThreadLinksItem } from "./CreateCommentResponseThreadLinksItem";
import { CreateCommentResponseThreadDiscordMeta } from "./CreateCommentResponseThreadDiscordMeta";
import { CreateCommentResponseThreadSearch } from "./CreateCommentResponseThreadSearch";
import { CreateCommentResponseThreadAddress } from "./CreateCommentResponseThreadAddress";
import { CreateCommentResponseThreadReaction } from "./CreateCommentResponseThreadReaction";
import { CreateCommentResponseThreadTopic } from "./CreateCommentResponseThreadTopic";
import { CreateCommentResponseThreadCollaboratorsItem } from "./CreateCommentResponseThreadCollaboratorsItem";
import { CreateCommentResponseThreadReactionsItem } from "./CreateCommentResponseThreadReactionsItem";
import { CreateCommentResponseThreadThreadVersionHistoriesItem } from "./CreateCommentResponseThreadThreadVersionHistoriesItem";

export const CreateCommentResponseThread: core.serialization.ObjectSchema<
    serializers.CreateCommentResponseThread.Raw,
    CommonApi.CreateCommentResponseThread
> = core.serialization.object({
    id: core.serialization.number().optional(),
    addressId: core.serialization.property("address_id", core.serialization.number()),
    title: core.serialization.string(),
    kind: core.serialization.string(),
    stage: core.serialization.string().optional(),
    body: core.serialization.string(),
    url: core.serialization.string().optional(),
    topicId: core.serialization.property("topic_id", core.serialization.number()),
    pinned: core.serialization.boolean().optional(),
    communityId: core.serialization.property("community_id", core.serialization.string()),
    viewCount: core.serialization.property("view_count", core.serialization.number().optional()),
    links: core.serialization.list(CreateCommentResponseThreadLinksItem).optional(),
    contentUrl: core.serialization.property("content_url", core.serialization.string().optional()),
    readOnly: core.serialization.property("read_only", core.serialization.boolean().optional()),
    hasPoll: core.serialization.property("has_poll", core.serialization.boolean().optional()),
    canvasSignedData: core.serialization.property("canvas_signed_data", core.serialization.string().optional()),
    canvasMsgId: core.serialization.property("canvas_msg_id", core.serialization.string().optional()),
    createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
    updatedAt: core.serialization.property("updated_at", core.serialization.date().optional()),
    lastEdited: core.serialization.property("last_edited", core.serialization.date().optional()),
    deletedAt: core.serialization.property("deleted_at", core.serialization.date().optional()),
    lastCommentedOn: core.serialization.property("last_commented_on", core.serialization.date().optional()),
    markedAsSpamAt: core.serialization.property("marked_as_spam_at", core.serialization.date().optional()),
    archivedAt: core.serialization.property("archived_at", core.serialization.date().optional()),
    lockedAt: core.serialization.property("locked_at", core.serialization.date().optional()),
    discordMeta: core.serialization.property("discord_meta", CreateCommentResponseThreadDiscordMeta.optional()),
    reactionCount: core.serialization.property("reaction_count", core.serialization.number().optional()),
    reactionWeightsSum: core.serialization.property("reaction_weights_sum", core.serialization.string().optional()),
    commentCount: core.serialization.property("comment_count", core.serialization.number().optional()),
    activityRankDate: core.serialization.property("activity_rank_date", core.serialization.date().optional()),
    createdBy: core.serialization.property("created_by", core.serialization.string().optional()),
    profileName: core.serialization.property("profile_name", core.serialization.string().optional()),
    search: CreateCommentResponseThreadSearch,
    address: core.serialization.property("Address", CreateCommentResponseThreadAddress.optional()),
    reaction: core.serialization.property("Reaction", CreateCommentResponseThreadReaction.optional()),
    topic: CreateCommentResponseThreadTopic.optional(),
    collaborators: core.serialization.list(CreateCommentResponseThreadCollaboratorsItem).optional(),
    reactions: core.serialization.list(CreateCommentResponseThreadReactionsItem).optional(),
    threadVersionHistories: core.serialization.property(
        "ThreadVersionHistories",
        core.serialization.list(CreateCommentResponseThreadThreadVersionHistoriesItem).optional()
    ),
});

export declare namespace CreateCommentResponseThread {
    interface Raw {
        id?: number | null;
        address_id: number;
        title: string;
        kind: string;
        stage?: string | null;
        body: string;
        url?: string | null;
        topic_id: number;
        pinned?: boolean | null;
        community_id: string;
        view_count?: number | null;
        links?: CreateCommentResponseThreadLinksItem.Raw[] | null;
        content_url?: string | null;
        read_only?: boolean | null;
        has_poll?: boolean | null;
        canvas_signed_data?: string | null;
        canvas_msg_id?: string | null;
        created_at?: string | null;
        updated_at?: string | null;
        last_edited?: string | null;
        deleted_at?: string | null;
        last_commented_on?: string | null;
        marked_as_spam_at?: string | null;
        archived_at?: string | null;
        locked_at?: string | null;
        discord_meta?: CreateCommentResponseThreadDiscordMeta.Raw | null;
        reaction_count?: number | null;
        reaction_weights_sum?: string | null;
        comment_count?: number | null;
        activity_rank_date?: string | null;
        created_by?: string | null;
        profile_name?: string | null;
        search: CreateCommentResponseThreadSearch.Raw;
        Address?: CreateCommentResponseThreadAddress.Raw | null;
        Reaction?: CreateCommentResponseThreadReaction.Raw | null;
        topic?: CreateCommentResponseThreadTopic.Raw | null;
        collaborators?: CreateCommentResponseThreadCollaboratorsItem.Raw[] | null;
        reactions?: CreateCommentResponseThreadReactionsItem.Raw[] | null;
        ThreadVersionHistories?: CreateCommentResponseThreadThreadVersionHistoriesItem.Raw[] | null;
    }
}
