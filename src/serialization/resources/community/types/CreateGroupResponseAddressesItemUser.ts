/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
import { CreateGroupResponseAddressesItemUserEmailNotificationInterval } from "./CreateGroupResponseAddressesItemUserEmailNotificationInterval";
import { CreateGroupResponseAddressesItemUserProfile } from "./CreateGroupResponseAddressesItemUserProfile";
import { CreateGroupResponseAddressesItemUserProfileTagsItem } from "./CreateGroupResponseAddressesItemUserProfileTagsItem";
import { CreateGroupResponseAddressesItemUserApiKey } from "./CreateGroupResponseAddressesItemUserApiKey";

export const CreateGroupResponseAddressesItemUser: core.serialization.ObjectSchema<
    serializers.CreateGroupResponseAddressesItemUser.Raw,
    CommonApi.CreateGroupResponseAddressesItemUser
> = core.serialization.object({
    id: core.serialization.number().optional(),
    email: core.serialization.string().optional(),
    isAdmin: core.serialization.boolean().optional(),
    disableRichText: core.serialization.boolean().optional(),
    emailVerified: core.serialization.boolean().optional(),
    selectedCommunityId: core.serialization.property("selected_community_id", core.serialization.string().optional()),
    emailNotificationInterval: CreateGroupResponseAddressesItemUserEmailNotificationInterval.optional(),
    promotionalEmailsEnabled: core.serialization.property(
        "promotional_emails_enabled",
        core.serialization.boolean().optional()
    ),
    isWelcomeOnboardFlowComplete: core.serialization.property(
        "is_welcome_onboard_flow_complete",
        core.serialization.boolean().optional()
    ),
    profile: CreateGroupResponseAddressesItemUserProfile,
    xpPoints: core.serialization.property("xp_points", core.serialization.number().optional()),
    profileTags: core.serialization.property(
        "ProfileTags",
        core.serialization.list(CreateGroupResponseAddressesItemUserProfileTagsItem).optional()
    ),
    apiKey: core.serialization.property("ApiKey", CreateGroupResponseAddressesItemUserApiKey.optional()),
    createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
    updatedAt: core.serialization.property("updated_at", core.serialization.date().optional()),
});

export declare namespace CreateGroupResponseAddressesItemUser {
    interface Raw {
        id?: number | null;
        email?: string | null;
        isAdmin?: boolean | null;
        disableRichText?: boolean | null;
        emailVerified?: boolean | null;
        selected_community_id?: string | null;
        emailNotificationInterval?: CreateGroupResponseAddressesItemUserEmailNotificationInterval.Raw | null;
        promotional_emails_enabled?: boolean | null;
        is_welcome_onboard_flow_complete?: boolean | null;
        profile: CreateGroupResponseAddressesItemUserProfile.Raw;
        xp_points?: number | null;
        ProfileTags?: CreateGroupResponseAddressesItemUserProfileTagsItem.Raw[] | null;
        ApiKey?: CreateGroupResponseAddressesItemUserApiKey.Raw | null;
        created_at?: string | null;
        updated_at?: string | null;
    }
}
