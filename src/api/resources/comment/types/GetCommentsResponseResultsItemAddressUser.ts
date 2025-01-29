/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../index";

export interface GetCommentsResponseResultsItemAddressUser {
    id: number;
    email?: string;
    isAdmin?: boolean;
    disableRichText?: boolean;
    emailVerified?: boolean;
    selected_community_id?: string;
    emailNotificationInterval?: CommonApi.GetCommentsResponseResultsItemAddressUserEmailNotificationInterval;
    promotional_emails_enabled?: boolean;
    is_welcome_onboard_flow_complete?: boolean;
    profile: CommonApi.GetCommentsResponseResultsItemAddressUserProfile;
    xp_points?: number;
    created_at?: CommonApi.GetCommentsResponseResultsItemAddressUserCreatedAt;
    updated_at?: CommonApi.GetCommentsResponseResultsItemAddressUserUpdatedAt;
    ProfileTags?: CommonApi.GetCommentsResponseResultsItemAddressUserProfileTagsItem[];
    unsubscribe_uuid?: string;
}
