/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../index";

export interface CreateCommentResponseThreadReaction {
    id?: number;
    address_id: number;
    reaction: "like";
    thread_id?: number;
    comment_id?: number;
    proposal_id?: number;
    calculated_voting_weight?: string;
    canvas_signed_data?: unknown;
    canvas_msg_id?: string;
    created_at?: string;
    updated_at?: string;
    Address?: CommonApi.CreateCommentResponseThreadReactionAddress;
}
