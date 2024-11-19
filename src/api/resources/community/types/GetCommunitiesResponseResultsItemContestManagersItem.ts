/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../index";

/**
 * On-Chain Contest Manager
 */
export interface GetCommunitiesResponseResultsItemContestManagersItem {
    /** On-Chain contest manager address */
    contest_address: string;
    community_id: string;
    name: string;
    image_url?: string;
    /** Provided by admin on creation when stake funds are not used */
    funding_token_address?: string;
    /** Percentage of pool used for prizes in recurring contests */
    prize_percentage?: number;
    /** Sorted array of percentages for prize, from first to last */
    payout_structure: number[];
    /** Recurring contest interval, 0 when one-off */
    interval: number;
    ticker?: string;
    decimals?: number;
    created_at: string;
    /** Flags when contest policy is cancelled by admin */
    cancelled?: boolean;
    /** Flags when the one-off contest has ended and rollover was completed */
    ended?: boolean;
    contests?: CommonApi.GetCommunitiesResponseResultsItemContestManagersItemContestsItem[];
    farcaster_frame_url?: string;
    farcaster_frame_hashes?: string[];
    /** Neynar ID of the CastCreated webhook */
    neynar_webhook_id?: string;
    /** Neynar secret for the CastCreated webhook */
    neynar_webhook_secret?: string;
    topic_id?: number;
    topics?: CommonApi.GetCommunitiesResponseResultsItemContestManagersItemTopicsItem[];
    is_farcaster_contest: boolean;
}
