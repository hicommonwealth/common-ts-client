/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../index";

export interface GetUserActivityResponseResultsItem {
    community_id: string;
    community_icon?: string;
    id: number;
    user_id: number;
    user_address: string;
    profile_name?: string;
    profile_avatar?: string;
    body: string;
    content_url?: string;
    title: string;
    kind: string;
    stage: string;
    number_of_comments: number;
    created_at?: string;
    updated_at?: string;
    deleted_at?: string;
    locked_at?: string;
    archived_at?: string;
    marked_as_spam_at?: string;
    read_only: boolean;
    has_poll?: boolean;
    discord_meta?: CommonApi.GetUserActivityResponseResultsItemDiscordMeta;
    topic: CommonApi.GetUserActivityResponseResultsItemTopic;
    recent_comments?: CommonApi.GetUserActivityResponseResultsItemRecentCommentsItem[];
}
