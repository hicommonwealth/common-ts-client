/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface DeleteCommentResponse {
    thread_id: number;
    comment_id: number;
    community_id: string;
    user_tier_at_creation?: number;
    canvas_signed_data?: string;
    canvas_msg_id?: string;
}
