/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../index";

export interface UpdateCommentResponseThreadAddressUser {
    id?: number;
    email?: string;
    isAdmin?: boolean;
    disableRichText?: boolean;
    emailVerified?: boolean;
    selected_community_id?: string;
    emailNotificationInterval?: CommonApi.UpdateCommentResponseThreadAddressUserEmailNotificationInterval;
    promotional_emails_enabled?: boolean;
    is_welcome_onboard_flow_complete?: boolean;
    profile: CommonApi.UpdateCommentResponseThreadAddressUserProfile;
    xp_points?: number;
    ProfileTags?: CommonApi.UpdateCommentResponseThreadAddressUserProfileTagsItem[];
    ApiKey?: CommonApi.UpdateCommentResponseThreadAddressUserApiKey;
    created_at?: string;
    updated_at?: string;
}
