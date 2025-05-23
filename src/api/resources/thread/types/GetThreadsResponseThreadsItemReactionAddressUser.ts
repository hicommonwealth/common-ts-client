/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../index";

export interface GetThreadsResponseThreadsItemReactionAddressUser {
    id?: number;
    email?: string;
    isAdmin?: boolean;
    disableRichText?: boolean;
    emailVerified?: boolean;
    selected_community_id?: string;
    emailNotificationInterval?: CommonApi.GetThreadsResponseThreadsItemReactionAddressUserEmailNotificationInterval;
    promotional_emails_enabled?: boolean;
    is_welcome_onboard_flow_complete?: boolean;
    profile: CommonApi.GetThreadsResponseThreadsItemReactionAddressUserProfile;
    xp_points?: number;
    ProfileTags?: CommonApi.GetThreadsResponseThreadsItemReactionAddressUserProfileTagsItem[];
    ApiKey?: CommonApi.GetThreadsResponseThreadsItemReactionAddressUserApiKey;
    created_at?: string;
    updated_at?: string;
}
