/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetCommentsResponseResultsItemThreadCollaboratorsItemUserEmailNotificationInterval } from "./GetCommentsResponseResultsItemThreadCollaboratorsItemUserEmailNotificationInterval";
import { GetCommentsResponseResultsItemThreadCollaboratorsItemUserProfile } from "./GetCommentsResponseResultsItemThreadCollaboratorsItemUserProfile";
import { GetCommentsResponseResultsItemThreadCollaboratorsItemUserProfileTagsItem } from "./GetCommentsResponseResultsItemThreadCollaboratorsItemUserProfileTagsItem";
import { GetCommentsResponseResultsItemThreadCollaboratorsItemUserApiKey } from "./GetCommentsResponseResultsItemThreadCollaboratorsItemUserApiKey";

export const GetCommentsResponseResultsItemThreadCollaboratorsItemUser: core.serialization.ObjectSchema<
    serializers.GetCommentsResponseResultsItemThreadCollaboratorsItemUser.Raw,
    CommonApi.GetCommentsResponseResultsItemThreadCollaboratorsItemUser
> = core.serialization.object({
    id: core.serialization.number().optional(),
    email: core.serialization.string().optional(),
    isAdmin: core.serialization.boolean().optional(),
    disableRichText: core.serialization.boolean().optional(),
    emailVerified: core.serialization.boolean().optional(),
    selectedCommunityId: core.serialization.property("selected_community_id", core.serialization.string().optional()),
    emailNotificationInterval:
        GetCommentsResponseResultsItemThreadCollaboratorsItemUserEmailNotificationInterval.optional(),
    promotionalEmailsEnabled: core.serialization.property(
        "promotional_emails_enabled",
        core.serialization.boolean().optional()
    ),
    isWelcomeOnboardFlowComplete: core.serialization.property(
        "is_welcome_onboard_flow_complete",
        core.serialization.boolean().optional()
    ),
    profile: GetCommentsResponseResultsItemThreadCollaboratorsItemUserProfile,
    xpPoints: core.serialization.property("xp_points", core.serialization.number().optional()),
    profileTags: core.serialization.property(
        "ProfileTags",
        core.serialization.list(GetCommentsResponseResultsItemThreadCollaboratorsItemUserProfileTagsItem).optional()
    ),
    apiKey: core.serialization.property(
        "ApiKey",
        GetCommentsResponseResultsItemThreadCollaboratorsItemUserApiKey.optional()
    ),
    createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
    updatedAt: core.serialization.property("updated_at", core.serialization.date().optional()),
});

export declare namespace GetCommentsResponseResultsItemThreadCollaboratorsItemUser {
    interface Raw {
        id?: number | null;
        email?: string | null;
        isAdmin?: boolean | null;
        disableRichText?: boolean | null;
        emailVerified?: boolean | null;
        selected_community_id?: string | null;
        emailNotificationInterval?: GetCommentsResponseResultsItemThreadCollaboratorsItemUserEmailNotificationInterval.Raw | null;
        promotional_emails_enabled?: boolean | null;
        is_welcome_onboard_flow_complete?: boolean | null;
        profile: GetCommentsResponseResultsItemThreadCollaboratorsItemUserProfile.Raw;
        xp_points?: number | null;
        ProfileTags?: GetCommentsResponseResultsItemThreadCollaboratorsItemUserProfileTagsItem.Raw[] | null;
        ApiKey?: GetCommentsResponseResultsItemThreadCollaboratorsItemUserApiKey.Raw | null;
        created_at?: string | null;
        updated_at?: string | null;
    }
}
