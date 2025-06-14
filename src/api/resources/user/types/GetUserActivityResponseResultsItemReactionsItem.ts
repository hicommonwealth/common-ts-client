/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../index";

export interface GetUserActivityResponseResultsItemReactionsItem {
    id: number;
    address_id: number;
    reaction: "like";
    thread_id?: number;
    comment_id?: number;
    proposal_id?: number;
    calculated_voting_weight?: string;
    canvas_signed_data?: unknown;
    canvas_msg_id?: string;
    created_at?: CommonApi.GetUserActivityResponseResultsItemReactionsItemCreatedAt;
    updated_at?: CommonApi.GetUserActivityResponseResultsItemReactionsItemUpdatedAt;
    Address?: CommonApi.GetUserActivityResponseResultsItemReactionsItemAddress;
    address?: string;
    last_active?: CommonApi.GetUserActivityResponseResultsItemReactionsItemLastActive;
    profile_name?: string;
    avatar_url?: string;
}
