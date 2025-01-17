/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../index";

export interface CreateCommentResponseReactionAddressUser {
    id?: number;
    email?: string;
    isAdmin?: boolean;
    disableRichText?: boolean;
    emailVerified?: boolean;
    selected_community_id?: string;
    emailNotificationInterval?: CommonApi.CreateCommentResponseReactionAddressUserEmailNotificationInterval;
    promotional_emails_enabled?: boolean;
    is_welcome_onboard_flow_complete?: boolean;
    profile: CommonApi.CreateCommentResponseReactionAddressUserProfile;
    xp_points?: number;
    referral_eth_earnings?: number;
    ProfileTags?: CommonApi.CreateCommentResponseReactionAddressUserProfileTagsItem[];
    ApiKey?: CommonApi.CreateCommentResponseReactionAddressUserApiKey;
    created_at?: string;
    updated_at?: string;
}
