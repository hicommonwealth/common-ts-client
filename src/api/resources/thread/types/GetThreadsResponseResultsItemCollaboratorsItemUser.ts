/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../index";

export interface GetThreadsResponseResultsItemCollaboratorsItemUser {
    id: number;
    email?: string;
    isAdmin?: boolean;
    disableRichText?: boolean;
    emailVerified?: boolean;
    selected_community_id?: string;
    emailNotificationInterval?: CommonApi.GetThreadsResponseResultsItemCollaboratorsItemUserEmailNotificationInterval;
    promotional_emails_enabled?: boolean;
    is_welcome_onboard_flow_complete?: boolean;
    profile: CommonApi.GetThreadsResponseResultsItemCollaboratorsItemUserProfile;
    xp_points?: number;
    created_at?: CommonApi.GetThreadsResponseResultsItemCollaboratorsItemUserCreatedAt;
    updated_at?: CommonApi.GetThreadsResponseResultsItemCollaboratorsItemUserUpdatedAt;
    ProfileTags?: CommonApi.GetThreadsResponseResultsItemCollaboratorsItemUserProfileTagsItem[];
    unsubscribe_uuid?: string;
    tier?: number;
    referred_by_address?: string;
    xp_referrer_points?: number;
}
