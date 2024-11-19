/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../index";

export interface GetThreadsResponseThreadsItemCommentsItemAddressUser {
    id: number;
    email?: string;
    isAdmin?: boolean;
    disableRichText?: boolean;
    emailVerified?: boolean;
    selected_community_id?: string;
    emailNotificationInterval?: CommonApi.GetThreadsResponseThreadsItemCommentsItemAddressUserEmailNotificationInterval;
    promotional_emails_enabled?: boolean;
    is_welcome_onboard_flow_complete?: boolean;
    profile: CommonApi.GetThreadsResponseThreadsItemCommentsItemAddressUserProfile;
    xp_points?: number;
    ProfileTags?: CommonApi.GetThreadsResponseThreadsItemCommentsItemAddressUserProfileTagsItem[];
    ApiKey?: unknown;
    created_at?: CommonApi.GetThreadsResponseThreadsItemCommentsItemAddressUserCreatedAt;
    updated_at?: CommonApi.GetThreadsResponseThreadsItemCommentsItemAddressUserUpdatedAt;
}