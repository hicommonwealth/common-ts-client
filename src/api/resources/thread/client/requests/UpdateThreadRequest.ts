/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../../index";

/**
 * @example
 *     {
 *         thread_id: 1
 *     }
 */
export interface UpdateThreadRequest {
    thread_id: number;
    body?: string;
    title?: string;
    topic_id?: number;
    stage?: string;
    url?: string;
    locked?: boolean;
    pinned?: boolean;
    archived?: boolean;
    spam?: boolean;
    collaborators?: CommonApi.UpdateThreadRequestCollaborators;
    canvas_signed_data?: string;
    canvas_msg_id?: string;
}