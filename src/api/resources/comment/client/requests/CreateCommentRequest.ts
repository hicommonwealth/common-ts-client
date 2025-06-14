/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../../index";

/**
 * @example
 *     {
 *         thread_id: 1,
 *         body: "body"
 *     }
 */
export interface CreateCommentRequest {
    thread_id: number;
    thread_msg_id?: string;
    body: string;
    parent_id?: number;
    parent_msg_id?: string;
    canvas_signed_data?: string;
    canvas_msg_id?: string;
    discord_meta?: CommonApi.CreateCommentRequestDiscordMeta;
    turnstile_token?: string;
}
