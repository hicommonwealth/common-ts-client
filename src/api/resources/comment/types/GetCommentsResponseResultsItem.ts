/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../index";

export interface GetCommentsResponseResultsItem {
    id: number;
    thread_id: number;
    address_id: number;
    body: string;
    parent_id?: number;
    content_url?: string;
    comment_level: number;
    canvas_signed_data?: string;
    canvas_msg_id?: string;
    created_by?: string;
    created_at?: CommonApi.GetCommentsResponseResultsItemCreatedAt;
    updated_at?: CommonApi.GetCommentsResponseResultsItemUpdatedAt;
    deleted_at?: CommonApi.GetCommentsResponseResultsItemDeletedAt;
    marked_as_spam_at?: CommonApi.GetCommentsResponseResultsItemMarkedAsSpamAt;
    discord_meta?: CommonApi.GetCommentsResponseResultsItemDiscordMeta;
    reply_count: number;
    reaction_count: number;
    reaction_weights_sum?: string;
    search?: unknown;
    Address?: CommonApi.GetCommentsResponseResultsItemAddress;
    Thread?: unknown;
    Reaction?: CommonApi.GetCommentsResponseResultsItemReaction;
    CommentVersionHistories?: CommonApi.GetCommentsResponseResultsItemCommentVersionHistoriesItem[];
    community_id: string;
    last_active?: CommonApi.GetCommentsResponseResultsItemLastActive;
    address: string;
    profile_name?: string;
    profile_avatar?: string;
    user_id: number;
    reactions?: CommonApi.GetCommentsResponseResultsItemReactionsItem[];
}
