/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         thread_id: 1
 *     }
 */
export interface CreateThreadReactionRequest {
    thread_id: number;
    thread_msg_id?: string;
    canvas_signed_data?: string;
    canvas_msg_id?: string;
}
