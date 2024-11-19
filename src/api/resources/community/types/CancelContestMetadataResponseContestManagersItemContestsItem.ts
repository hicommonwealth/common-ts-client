/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../index";

/**
 * On-Chain contest instance
 */
export interface CancelContestMetadataResponseContestManagersItemContestsItem {
    /** On-Chain contest manager address */
    contest_address: string;
    /** On-Chain contest id, 0 when one-off */
    contest_id: number;
    start_time: string;
    end_time: string;
    score_updated_at?: string;
    /** Contest score, sorted from first to last */
    score?: CommonApi.CancelContestMetadataResponseContestManagersItemContestsItemScoreItem[];
    actions?: CommonApi.CancelContestMetadataResponseContestManagersItemContestsItemActionsItem[];
}
