/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         community_id: "community_id"
 *     }
 */
export interface GetAllContestsRequest {
    community_id: string;
    contest_address?: string;
    contest_id?: number;
    running?: boolean;
}
