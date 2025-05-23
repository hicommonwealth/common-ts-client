/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../index";

export interface GetCommentsResponseResultsItemThreadAddressUser {
    id?: number;
    email?: string;
    isAdmin?: boolean;
    disableRichText?: boolean;
    emailVerified?: boolean;
    selected_community_id?: string;
    emailNotificationInterval?: CommonApi.GetCommentsResponseResultsItemThreadAddressUserEmailNotificationInterval;
    promotional_emails_enabled?: boolean;
    is_welcome_onboard_flow_complete?: boolean;
    profile: CommonApi.GetCommentsResponseResultsItemThreadAddressUserProfile;
    xp_points?: number;
    ProfileTags?: CommonApi.GetCommentsResponseResultsItemThreadAddressUserProfileTagsItem[];
    ApiKey?: CommonApi.GetCommentsResponseResultsItemThreadAddressUserApiKey;
    created_at?: string;
    updated_at?: string;
}
