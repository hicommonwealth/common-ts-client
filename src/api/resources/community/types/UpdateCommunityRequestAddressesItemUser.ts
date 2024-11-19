/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../index";

export interface UpdateCommunityRequestAddressesItemUser {
    id?: number;
    email?: string;
    isAdmin?: boolean;
    disableRichText?: boolean;
    emailVerified?: boolean;
    selected_community_id?: string;
    emailNotificationInterval?: CommonApi.UpdateCommunityRequestAddressesItemUserEmailNotificationInterval;
    promotional_emails_enabled?: boolean;
    is_welcome_onboard_flow_complete?: boolean;
    profile: CommonApi.UpdateCommunityRequestAddressesItemUserProfile;
    xp_points?: number;
    ProfileTags?: CommonApi.UpdateCommunityRequestAddressesItemUserProfileTagsItem[];
    ApiKey?: CommonApi.UpdateCommunityRequestAddressesItemUserApiKey;
    created_at?: string;
    updated_at?: string;
}