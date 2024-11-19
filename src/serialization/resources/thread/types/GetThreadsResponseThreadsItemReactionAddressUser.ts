/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetThreadsResponseThreadsItemReactionAddressUserEmailNotificationInterval } from "./GetThreadsResponseThreadsItemReactionAddressUserEmailNotificationInterval";
import { GetThreadsResponseThreadsItemReactionAddressUserProfile } from "./GetThreadsResponseThreadsItemReactionAddressUserProfile";
import { GetThreadsResponseThreadsItemReactionAddressUserProfileTagsItem } from "./GetThreadsResponseThreadsItemReactionAddressUserProfileTagsItem";
import { GetThreadsResponseThreadsItemReactionAddressUserCreatedAt } from "./GetThreadsResponseThreadsItemReactionAddressUserCreatedAt";
import { GetThreadsResponseThreadsItemReactionAddressUserUpdatedAt } from "./GetThreadsResponseThreadsItemReactionAddressUserUpdatedAt";

export const GetThreadsResponseThreadsItemReactionAddressUser: core.serialization.ObjectSchema<
    serializers.GetThreadsResponseThreadsItemReactionAddressUser.Raw,
    CommonApi.GetThreadsResponseThreadsItemReactionAddressUser
> = core.serialization.object({
    id: core.serialization.number(),
    email: core.serialization.string().optional(),
    isAdmin: core.serialization.boolean().optional(),
    disableRichText: core.serialization.boolean().optional(),
    emailVerified: core.serialization.boolean().optional(),
    selectedCommunityId: core.serialization.property("selected_community_id", core.serialization.string().optional()),
    emailNotificationInterval: GetThreadsResponseThreadsItemReactionAddressUserEmailNotificationInterval.optional(),
    promotionalEmailsEnabled: core.serialization.property(
        "promotional_emails_enabled",
        core.serialization.boolean().optional()
    ),
    isWelcomeOnboardFlowComplete: core.serialization.property(
        "is_welcome_onboard_flow_complete",
        core.serialization.boolean().optional()
    ),
    profile: GetThreadsResponseThreadsItemReactionAddressUserProfile,
    xpPoints: core.serialization.property("xp_points", core.serialization.number().optional()),
    profileTags: core.serialization.property(
        "ProfileTags",
        core.serialization.list(GetThreadsResponseThreadsItemReactionAddressUserProfileTagsItem).optional()
    ),
    apiKey: core.serialization.property("ApiKey", core.serialization.unknown().optional()),
    createdAt: core.serialization.property(
        "created_at",
        GetThreadsResponseThreadsItemReactionAddressUserCreatedAt.optional()
    ),
    updatedAt: core.serialization.property(
        "updated_at",
        GetThreadsResponseThreadsItemReactionAddressUserUpdatedAt.optional()
    ),
});

export declare namespace GetThreadsResponseThreadsItemReactionAddressUser {
    interface Raw {
        id: number;
        email?: string | null;
        isAdmin?: boolean | null;
        disableRichText?: boolean | null;
        emailVerified?: boolean | null;
        selected_community_id?: string | null;
        emailNotificationInterval?: GetThreadsResponseThreadsItemReactionAddressUserEmailNotificationInterval.Raw | null;
        promotional_emails_enabled?: boolean | null;
        is_welcome_onboard_flow_complete?: boolean | null;
        profile: GetThreadsResponseThreadsItemReactionAddressUserProfile.Raw;
        xp_points?: number | null;
        ProfileTags?: GetThreadsResponseThreadsItemReactionAddressUserProfileTagsItem.Raw[] | null;
        ApiKey?: unknown | null;
        created_at?: GetThreadsResponseThreadsItemReactionAddressUserCreatedAt.Raw | null;
        updated_at?: GetThreadsResponseThreadsItemReactionAddressUserUpdatedAt.Raw | null;
    }
}
