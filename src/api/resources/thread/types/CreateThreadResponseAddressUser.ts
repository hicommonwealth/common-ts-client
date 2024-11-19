/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../index";

export interface CreateThreadResponseAddressUser {
    id?: number;
    email?: string;
    isAdmin?: boolean;
    disableRichText?: boolean;
    emailVerified?: boolean;
    selectedCommunityId?: string;
    emailNotificationInterval?: CommonApi.CreateThreadResponseAddressUserEmailNotificationInterval;
    promotionalEmailsEnabled?: boolean;
    isWelcomeOnboardFlowComplete?: boolean;
    profile: CommonApi.CreateThreadResponseAddressUserProfile;
    xpPoints?: number;
    profileTags?: CommonApi.CreateThreadResponseAddressUserProfileTagsItem[];
    apiKey?: CommonApi.CreateThreadResponseAddressUserApiKey;
    createdAt?: Date;
    updatedAt?: Date;
}
