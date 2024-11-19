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
    selectedCommunityId?: string;
    emailNotificationInterval?: CommonApi.CreateCommentResponseReactionAddressUserEmailNotificationInterval;
    promotionalEmailsEnabled?: boolean;
    isWelcomeOnboardFlowComplete?: boolean;
    profile: CommonApi.CreateCommentResponseReactionAddressUserProfile;
    xpPoints?: number;
    profileTags?: CommonApi.CreateCommentResponseReactionAddressUserProfileTagsItem[];
    apiKey?: CommonApi.CreateCommentResponseReactionAddressUserApiKey;
    createdAt?: Date;
    updatedAt?: Date;
}
