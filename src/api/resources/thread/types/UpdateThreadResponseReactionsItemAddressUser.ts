/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../index";

export interface UpdateThreadResponseReactionsItemAddressUser {
    id?: number;
    email?: string;
    isAdmin?: boolean;
    disableRichText?: boolean;
    emailVerified?: boolean;
    selectedCommunityId?: string;
    emailNotificationInterval?: CommonApi.UpdateThreadResponseReactionsItemAddressUserEmailNotificationInterval;
    promotionalEmailsEnabled?: boolean;
    isWelcomeOnboardFlowComplete?: boolean;
    profile: CommonApi.UpdateThreadResponseReactionsItemAddressUserProfile;
    xpPoints?: number;
    profileTags?: CommonApi.UpdateThreadResponseReactionsItemAddressUserProfileTagsItem[];
    apiKey?: CommonApi.UpdateThreadResponseReactionsItemAddressUserApiKey;
    createdAt?: Date;
    updatedAt?: Date;
}
