/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../index";

export interface UpdateCommentResponse {
    id?: number;
    thread_id: number;
    address_id: number;
    body: string;
    parent_id?: number;
    content_url?: string;
    comment_level: number;
    canvas_signed_data?: string;
    canvas_msg_id?: string;
    created_by?: string;
    created_at?: string;
    updated_at?: string;
    deleted_at?: string;
    marked_as_spam_at?: string;
    user_tier_at_creation?: number;
    discord_meta?: CommonApi.UpdateCommentResponseDiscordMeta;
    reply_count: number;
    reaction_count: number;
    reaction_weights_sum?: string;
    search?: CommonApi.UpdateCommentResponseSearch;
    Address?: CommonApi.UpdateCommentResponseAddress;
    Thread?: CommonApi.UpdateCommentResponseThread;
    Reaction?: CommonApi.UpdateCommentResponseReaction;
    CommentVersionHistories?: CommonApi.UpdateCommentResponseCommentVersionHistoriesItem[];
    community_id: string;
}
