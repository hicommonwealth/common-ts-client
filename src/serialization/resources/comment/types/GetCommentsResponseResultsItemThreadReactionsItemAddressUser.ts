/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetCommentsResponseResultsItemThreadReactionsItemAddressUserEmailNotificationInterval } from "./GetCommentsResponseResultsItemThreadReactionsItemAddressUserEmailNotificationInterval";
import { GetCommentsResponseResultsItemThreadReactionsItemAddressUserProfile } from "./GetCommentsResponseResultsItemThreadReactionsItemAddressUserProfile";
import { GetCommentsResponseResultsItemThreadReactionsItemAddressUserProfileTagsItem } from "./GetCommentsResponseResultsItemThreadReactionsItemAddressUserProfileTagsItem";
import { GetCommentsResponseResultsItemThreadReactionsItemAddressUserApiKey } from "./GetCommentsResponseResultsItemThreadReactionsItemAddressUserApiKey";

export const GetCommentsResponseResultsItemThreadReactionsItemAddressUser: core.serialization.ObjectSchema<
    serializers.GetCommentsResponseResultsItemThreadReactionsItemAddressUser.Raw,
    CommonApi.GetCommentsResponseResultsItemThreadReactionsItemAddressUser
> = core.serialization.object({
    id: core.serialization.number().optional(),
    email: core.serialization.string().optional(),
    isAdmin: core.serialization.boolean().optional(),
    disableRichText: core.serialization.boolean().optional(),
    emailVerified: core.serialization.boolean().optional(),
    selectedCommunityId: core.serialization.property("selected_community_id", core.serialization.string().optional()),
    emailNotificationInterval:
        GetCommentsResponseResultsItemThreadReactionsItemAddressUserEmailNotificationInterval.optional(),
    promotionalEmailsEnabled: core.serialization.property(
        "promotional_emails_enabled",
        core.serialization.boolean().optional()
    ),
    isWelcomeOnboardFlowComplete: core.serialization.property(
        "is_welcome_onboard_flow_complete",
        core.serialization.boolean().optional()
    ),
    profile: GetCommentsResponseResultsItemThreadReactionsItemAddressUserProfile,
    xpPoints: core.serialization.property("xp_points", core.serialization.number().optional()),
    profileTags: core.serialization.property(
        "ProfileTags",
        core.serialization.list(GetCommentsResponseResultsItemThreadReactionsItemAddressUserProfileTagsItem).optional()
    ),
    apiKey: core.serialization.property(
        "ApiKey",
        GetCommentsResponseResultsItemThreadReactionsItemAddressUserApiKey.optional()
    ),
    createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
    updatedAt: core.serialization.property("updated_at", core.serialization.date().optional()),
});

export declare namespace GetCommentsResponseResultsItemThreadReactionsItemAddressUser {
    interface Raw {
        id?: number | null;
        email?: string | null;
        isAdmin?: boolean | null;
        disableRichText?: boolean | null;
        emailVerified?: boolean | null;
        selected_community_id?: string | null;
        emailNotificationInterval?: GetCommentsResponseResultsItemThreadReactionsItemAddressUserEmailNotificationInterval.Raw | null;
        promotional_emails_enabled?: boolean | null;
        is_welcome_onboard_flow_complete?: boolean | null;
        profile: GetCommentsResponseResultsItemThreadReactionsItemAddressUserProfile.Raw;
        xp_points?: number | null;
        ProfileTags?: GetCommentsResponseResultsItemThreadReactionsItemAddressUserProfileTagsItem.Raw[] | null;
        ApiKey?: GetCommentsResponseResultsItemThreadReactionsItemAddressUserApiKey.Raw | null;
        created_at?: string | null;
        updated_at?: string | null;
    }
}
