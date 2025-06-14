/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../index";

export interface GetGlobalActivityResponseResultsItemCommentsItemReactionAddressUser {
    id: number;
    email?: string;
    isAdmin?: boolean;
    disableRichText?: boolean;
    emailVerified?: boolean;
    selected_community_id?: string;
    emailNotificationInterval?: CommonApi.GetGlobalActivityResponseResultsItemCommentsItemReactionAddressUserEmailNotificationInterval;
    promotional_emails_enabled?: boolean;
    is_welcome_onboard_flow_complete?: boolean;
    profile: CommonApi.GetGlobalActivityResponseResultsItemCommentsItemReactionAddressUserProfile;
    xp_points?: number;
    created_at?: CommonApi.GetGlobalActivityResponseResultsItemCommentsItemReactionAddressUserCreatedAt;
    updated_at?: CommonApi.GetGlobalActivityResponseResultsItemCommentsItemReactionAddressUserUpdatedAt;
    ProfileTags?: CommonApi.GetGlobalActivityResponseResultsItemCommentsItemReactionAddressUserProfileTagsItem[];
    unsubscribe_uuid?: string;
    tier?: number;
    referred_by_address?: string;
    xp_referrer_points?: number;
}
