/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetThreadsResponseThreadsItemCollaboratorsItemUserEmailNotificationInterval } from "./GetThreadsResponseThreadsItemCollaboratorsItemUserEmailNotificationInterval";
import { GetThreadsResponseThreadsItemCollaboratorsItemUserProfile } from "./GetThreadsResponseThreadsItemCollaboratorsItemUserProfile";
import { GetThreadsResponseThreadsItemCollaboratorsItemUserProfileTagsItem } from "./GetThreadsResponseThreadsItemCollaboratorsItemUserProfileTagsItem";
import { GetThreadsResponseThreadsItemCollaboratorsItemUserCreatedAt } from "./GetThreadsResponseThreadsItemCollaboratorsItemUserCreatedAt";
import { GetThreadsResponseThreadsItemCollaboratorsItemUserUpdatedAt } from "./GetThreadsResponseThreadsItemCollaboratorsItemUserUpdatedAt";

export const GetThreadsResponseThreadsItemCollaboratorsItemUser: core.serialization.ObjectSchema<
    serializers.GetThreadsResponseThreadsItemCollaboratorsItemUser.Raw,
    CommonApi.GetThreadsResponseThreadsItemCollaboratorsItemUser
> = core.serialization.object({
    id: core.serialization.number(),
    email: core.serialization.string().optional(),
    isAdmin: core.serialization.boolean().optional(),
    disableRichText: core.serialization.boolean().optional(),
    emailVerified: core.serialization.boolean().optional(),
    selectedCommunityId: core.serialization.property("selected_community_id", core.serialization.string().optional()),
    emailNotificationInterval: GetThreadsResponseThreadsItemCollaboratorsItemUserEmailNotificationInterval.optional(),
    promotionalEmailsEnabled: core.serialization.property(
        "promotional_emails_enabled",
        core.serialization.boolean().optional()
    ),
    isWelcomeOnboardFlowComplete: core.serialization.property(
        "is_welcome_onboard_flow_complete",
        core.serialization.boolean().optional()
    ),
    profile: GetThreadsResponseThreadsItemCollaboratorsItemUserProfile,
    xpPoints: core.serialization.property("xp_points", core.serialization.number().optional()),
    profileTags: core.serialization.property(
        "ProfileTags",
        core.serialization.list(GetThreadsResponseThreadsItemCollaboratorsItemUserProfileTagsItem).optional()
    ),
    apiKey: core.serialization.property("ApiKey", core.serialization.unknown().optional()),
    createdAt: core.serialization.property(
        "created_at",
        GetThreadsResponseThreadsItemCollaboratorsItemUserCreatedAt.optional()
    ),
    updatedAt: core.serialization.property(
        "updated_at",
        GetThreadsResponseThreadsItemCollaboratorsItemUserUpdatedAt.optional()
    ),
});

export declare namespace GetThreadsResponseThreadsItemCollaboratorsItemUser {
    interface Raw {
        id: number;
        email?: string | null;
        isAdmin?: boolean | null;
        disableRichText?: boolean | null;
        emailVerified?: boolean | null;
        selected_community_id?: string | null;
        emailNotificationInterval?: GetThreadsResponseThreadsItemCollaboratorsItemUserEmailNotificationInterval.Raw | null;
        promotional_emails_enabled?: boolean | null;
        is_welcome_onboard_flow_complete?: boolean | null;
        profile: GetThreadsResponseThreadsItemCollaboratorsItemUserProfile.Raw;
        xp_points?: number | null;
        ProfileTags?: GetThreadsResponseThreadsItemCollaboratorsItemUserProfileTagsItem.Raw[] | null;
        ApiKey?: unknown | null;
        created_at?: GetThreadsResponseThreadsItemCollaboratorsItemUserCreatedAt.Raw | null;
        updated_at?: GetThreadsResponseThreadsItemCollaboratorsItemUserUpdatedAt.Raw | null;
    }
}
