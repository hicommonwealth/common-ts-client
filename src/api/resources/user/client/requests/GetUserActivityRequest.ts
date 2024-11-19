/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../../index";

/**
 * @example
 *     {}
 */
export interface GetUserActivityRequest {
    limit?: string;
    /**
     * required for tRPC useInfiniteQuery hook, equivalent to page number
     */
    cursor?: string;
    order_by?: string;
    order_direction?: CommonApi.GetUserActivityRequestOrderDirection;
    thread_limit?: number;
    comment_limit?: number;
}