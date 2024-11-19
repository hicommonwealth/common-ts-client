/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../index";

export interface GetThreadsResponseThreadsItemReactionsItemAddressUser {
    id: number;
    email?: string;
    isAdmin?: boolean;
    disableRichText?: boolean;
    emailVerified?: boolean;
    selected_community_id?: string;
    emailNotificationInterval?: CommonApi.GetThreadsResponseThreadsItemReactionsItemAddressUserEmailNotificationInterval;
    promotional_emails_enabled?: boolean;
    is_welcome_onboard_flow_complete?: boolean;
    profile: CommonApi.GetThreadsResponseThreadsItemReactionsItemAddressUserProfile;
    xp_points?: number;
    ProfileTags?: CommonApi.GetThreadsResponseThreadsItemReactionsItemAddressUserProfileTagsItem[];
    ApiKey?: unknown;
    created_at?: CommonApi.GetThreadsResponseThreadsItemReactionsItemAddressUserCreatedAt;
    updated_at?: CommonApi.GetThreadsResponseThreadsItemReactionsItemAddressUserUpdatedAt;
}