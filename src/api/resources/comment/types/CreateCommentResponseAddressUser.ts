/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../index";

export interface CreateCommentResponseAddressUser {
    id?: number;
    email?: string;
    isAdmin?: boolean;
    disableRichText?: boolean;
    emailVerified?: boolean;
    selected_community_id?: string;
    emailNotificationInterval?: CommonApi.CreateCommentResponseAddressUserEmailNotificationInterval;
    promotional_emails_enabled?: boolean;
    is_welcome_onboard_flow_complete?: boolean;
    profile: CommonApi.CreateCommentResponseAddressUserProfile;
    xp_points?: number;
    referral_eth_earnings?: number;
    ProfileTags?: CommonApi.CreateCommentResponseAddressUserProfileTagsItem[];
    ApiKey?: CommonApi.CreateCommentResponseAddressUserApiKey;
    created_at?: string;
    updated_at?: string;
}
