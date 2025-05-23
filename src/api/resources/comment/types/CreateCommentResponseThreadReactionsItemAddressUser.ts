/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../index";

export interface CreateCommentResponseThreadReactionsItemAddressUser {
    id?: number;
    email?: string;
    isAdmin?: boolean;
    disableRichText?: boolean;
    emailVerified?: boolean;
    selected_community_id?: string;
    emailNotificationInterval?: CommonApi.CreateCommentResponseThreadReactionsItemAddressUserEmailNotificationInterval;
    promotional_emails_enabled?: boolean;
    is_welcome_onboard_flow_complete?: boolean;
    profile: CommonApi.CreateCommentResponseThreadReactionsItemAddressUserProfile;
    xp_points?: number;
    ProfileTags?: CommonApi.CreateCommentResponseThreadReactionsItemAddressUserProfileTagsItem[];
    ApiKey?: CommonApi.CreateCommentResponseThreadReactionsItemAddressUserApiKey;
    created_at?: string;
    updated_at?: string;
}
