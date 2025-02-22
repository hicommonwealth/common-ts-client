/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../index";

export interface GetThreadsResponseThreadsItemCommentsItemReactionAddressUser {
    id: number;
    email?: string;
    isAdmin?: boolean;
    disableRichText?: boolean;
    emailVerified?: boolean;
    selected_community_id?: string;
    emailNotificationInterval?: CommonApi.GetThreadsResponseThreadsItemCommentsItemReactionAddressUserEmailNotificationInterval;
    promotional_emails_enabled?: boolean;
    is_welcome_onboard_flow_complete?: boolean;
    profile: CommonApi.GetThreadsResponseThreadsItemCommentsItemReactionAddressUserProfile;
    xp_points?: number;
    created_at?: CommonApi.GetThreadsResponseThreadsItemCommentsItemReactionAddressUserCreatedAt;
    updated_at?: CommonApi.GetThreadsResponseThreadsItemCommentsItemReactionAddressUserUpdatedAt;
    ProfileTags?: CommonApi.GetThreadsResponseThreadsItemCommentsItemReactionAddressUserProfileTagsItem[];
    unsubscribe_uuid?: string;
}
