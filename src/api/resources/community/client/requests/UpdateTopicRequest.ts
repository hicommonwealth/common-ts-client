/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         topic_id: 1.1,
 *         community_id: "community_id"
 *     }
 */
export interface UpdateTopicRequest {
    topic_id: number;
    community_id: string;
    name?: string;
    description?: string;
    group_ids?: number[];
    telegram?: string;
    featured_in_sidebar?: boolean;
    featured_in_new_post?: boolean;
    default_offchain_template?: string;
}
