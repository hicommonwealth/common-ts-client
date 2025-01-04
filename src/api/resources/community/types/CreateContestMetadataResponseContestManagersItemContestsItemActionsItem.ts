/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../index";

/**
 * On-Chain content related actions on contest instance
 */
export interface CreateContestMetadataResponseContestManagersItemContestsItemActionsItem {
    /** On-Chain contest manager address */
    contest_address: string;
    /** On-Chain contest id, 0 when one-off */
    contest_id: number;
    /** On-Chain content id, 0 when adding */
    content_id: number;
    actor_address: string;
    /** Type of content action */
    action: CommonApi.CreateContestMetadataResponseContestManagersItemContestsItemActionsItemAction;
    /** Content url */
    content_url?: string;
    /** Thread id mapped from content url */
    thread_id?: number;
    thread_title?: string;
    /** Voting power of address when action was recorded */
    voting_power: string;
    /** Calculated  weight of the vote when action was recorded */
    calculated_voting_weight?: string;
    /** Date-time when action was recorded */
    created_at: string;
}
