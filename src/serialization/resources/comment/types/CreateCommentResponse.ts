/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
import { CreateCommentResponseDiscordMeta } from "./CreateCommentResponseDiscordMeta";
import { CreateCommentResponseSearch } from "./CreateCommentResponseSearch";
import { CreateCommentResponseAddress } from "./CreateCommentResponseAddress";
import { CreateCommentResponseThread } from "./CreateCommentResponseThread";
import { CreateCommentResponseReaction } from "./CreateCommentResponseReaction";
import { CreateCommentResponseCommentVersionHistoriesItem } from "./CreateCommentResponseCommentVersionHistoriesItem";

export const CreateCommentResponse: core.serialization.ObjectSchema<
    serializers.CreateCommentResponse.Raw,
    CommonApi.CreateCommentResponse
> = core.serialization.object({
    id: core.serialization.number().optional(),
    threadId: core.serialization.property("thread_id", core.serialization.number()),
    addressId: core.serialization.property("address_id", core.serialization.number()),
    body: core.serialization.string(),
    parentId: core.serialization.property("parent_id", core.serialization.string().optional()),
    contentUrl: core.serialization.property("content_url", core.serialization.string().optional()),
    canvasSignedData: core.serialization.property("canvas_signed_data", core.serialization.string().optional()),
    canvasMsgId: core.serialization.property("canvas_msg_id", core.serialization.string().optional()),
    createdBy: core.serialization.property("created_by", core.serialization.string().optional()),
    createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
    updatedAt: core.serialization.property("updated_at", core.serialization.date().optional()),
    deletedAt: core.serialization.property("deleted_at", core.serialization.date().optional()),
    markedAsSpamAt: core.serialization.property("marked_as_spam_at", core.serialization.date().optional()),
    discordMeta: core.serialization.property("discord_meta", CreateCommentResponseDiscordMeta.optional()),
    reactionCount: core.serialization.property("reaction_count", core.serialization.number()),
    reactionWeightsSum: core.serialization.property("reaction_weights_sum", core.serialization.string().optional()),
    search: CreateCommentResponseSearch,
    address: core.serialization.property("Address", CreateCommentResponseAddress.optional()),
    thread: core.serialization.property("Thread", CreateCommentResponseThread.optional()),
    reaction: core.serialization.property("Reaction", CreateCommentResponseReaction.optional()),
    commentVersionHistories: core.serialization.property(
        "CommentVersionHistories",
        core.serialization.list(CreateCommentResponseCommentVersionHistoriesItem).optional()
    ),
    communityId: core.serialization.property("community_id", core.serialization.string()),
});

export declare namespace CreateCommentResponse {
    interface Raw {
        id?: number | null;
        thread_id: number;
        address_id: number;
        body: string;
        parent_id?: string | null;
        content_url?: string | null;
        canvas_signed_data?: string | null;
        canvas_msg_id?: string | null;
        created_by?: string | null;
        created_at?: string | null;
        updated_at?: string | null;
        deleted_at?: string | null;
        marked_as_spam_at?: string | null;
        discord_meta?: CreateCommentResponseDiscordMeta.Raw | null;
        reaction_count: number;
        reaction_weights_sum?: string | null;
        search: CreateCommentResponseSearch.Raw;
        Address?: CreateCommentResponseAddress.Raw | null;
        Thread?: CreateCommentResponseThread.Raw | null;
        Reaction?: CreateCommentResponseReaction.Raw | null;
        CommentVersionHistories?: CreateCommentResponseCommentVersionHistoriesItem.Raw[] | null;
        community_id: string;
    }
}
