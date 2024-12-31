/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../index";

export interface CreateGroupResponseAddressesItemUser {
    id?: number;
    email?: string;
    isAdmin?: boolean;
    disableRichText?: boolean;
    emailVerified?: boolean;
    selected_community_id?: string;
    emailNotificationInterval?: CommonApi.CreateGroupResponseAddressesItemUserEmailNotificationInterval;
    promotional_emails_enabled?: boolean;
    is_welcome_onboard_flow_complete?: boolean;
    profile: CommonApi.CreateGroupResponseAddressesItemUserProfile;
    xp_points?: number;
    referral_link?: string;
    ProfileTags?: CommonApi.CreateGroupResponseAddressesItemUserProfileTagsItem[];
    ApiKey?: CommonApi.CreateGroupResponseAddressesItemUserApiKey;
    created_at?: string;
    updated_at?: string;
}
