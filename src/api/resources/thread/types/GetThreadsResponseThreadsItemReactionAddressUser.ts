/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../index";

export interface GetThreadsResponseThreadsItemReactionAddressUser {
    id: number;
    email?: string;
    isAdmin?: boolean;
    disableRichText?: boolean;
    emailVerified?: boolean;
    selectedCommunityId?: string;
    emailNotificationInterval?: CommonApi.GetThreadsResponseThreadsItemReactionAddressUserEmailNotificationInterval;
    promotionalEmailsEnabled?: boolean;
    isWelcomeOnboardFlowComplete?: boolean;
    profile: CommonApi.GetThreadsResponseThreadsItemReactionAddressUserProfile;
    xpPoints?: number;
    profileTags?: CommonApi.GetThreadsResponseThreadsItemReactionAddressUserProfileTagsItem[];
    apiKey?: unknown;
    createdAt?: CommonApi.GetThreadsResponseThreadsItemReactionAddressUserCreatedAt;
    updatedAt?: CommonApi.GetThreadsResponseThreadsItemReactionAddressUserUpdatedAt;
}
