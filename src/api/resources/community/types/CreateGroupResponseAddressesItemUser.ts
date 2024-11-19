/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../index";

export interface CreateGroupResponseAddressesItemUser {
    id?: number;
    email?: string;
    isAdmin?: boolean;
    disableRichText?: boolean;
    emailVerified?: boolean;
    selectedCommunityId?: string;
    emailNotificationInterval?: CommonApi.CreateGroupResponseAddressesItemUserEmailNotificationInterval;
    promotionalEmailsEnabled?: boolean;
    isWelcomeOnboardFlowComplete?: boolean;
    profile: CommonApi.CreateGroupResponseAddressesItemUserProfile;
    xpPoints?: number;
    profileTags?: CommonApi.CreateGroupResponseAddressesItemUserProfileTagsItem[];
    apiKey?: CommonApi.CreateGroupResponseAddressesItemUserApiKey;
    createdAt?: Date;
    updatedAt?: Date;
}
