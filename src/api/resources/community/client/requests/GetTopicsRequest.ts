/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         community_id: "community_id"
 *     }
 */
export interface GetTopicsRequest {
    community_id: string;
    with_contest_managers?: boolean;
    with_archived_topics?: boolean;
}
