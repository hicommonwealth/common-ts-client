/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../index";

export interface GetCommentsResponseResultsItem {
    id?: number;
    thread_id: number;
    address_id: number;
    text: string;
    parent_id?: string;
    content_url?: string;
    canvas_signed_data?: string;
    canvas_msg_id?: string;
    created_by?: string;
    created_at?: string;
    updated_at?: string;
    deleted_at?: string;
    marked_as_spam_at?: string;
    discord_meta?: CommonApi.GetCommentsResponseResultsItemDiscordMeta;
    reaction_count: number;
    reaction_weights_sum?: string;
    search: CommonApi.GetCommentsResponseResultsItemSearch;
    Address?: CommonApi.GetCommentsResponseResultsItemAddress;
    Thread?: CommonApi.GetCommentsResponseResultsItemThread;
    Reaction?: CommonApi.GetCommentsResponseResultsItemReaction;
    CommentVersionHistories?: CommonApi.GetCommentsResponseResultsItemCommentVersionHistoriesItem[];
    last_edited?: string;
}
