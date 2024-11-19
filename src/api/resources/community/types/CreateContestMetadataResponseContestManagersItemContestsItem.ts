/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../index";

/**
 * On-Chain contest instance
 */
export interface CreateContestMetadataResponseContestManagersItemContestsItem {
    /** On-Chain contest manager address */
    contestAddress: string;
    /** On-Chain contest id, 0 when one-off */
    contestId: number;
    startTime: Date;
    endTime: Date;
    scoreUpdatedAt?: Date;
    /** Contest score, sorted from first to last */
    score?: CommonApi.CreateContestMetadataResponseContestManagersItemContestsItemScoreItem[];
    actions?: CommonApi.CreateContestMetadataResponseContestManagersItemContestsItemActionsItem[];
}
