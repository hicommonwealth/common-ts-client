/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../index";

/**
 * On-Chain content related actions on contest instance
 */
export interface GetThreadsResponseThreadsItemContestActionsItem {
    /** On-Chain content id, 0 when adding */
    content_id: number;
    /** Thread id mapped from content url */
    thread_id?: number;
    Contest: CommonApi.GetThreadsResponseThreadsItemContestActionsItemContest;
}