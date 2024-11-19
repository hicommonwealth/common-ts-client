/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetThreadsResponseThreadsItemReactionsItemAddressUserProfileBackgroundImage } from "./GetThreadsResponseThreadsItemReactionsItemAddressUserProfileBackgroundImage";

export const GetThreadsResponseThreadsItemReactionsItemAddressUserProfile: core.serialization.ObjectSchema<
    serializers.GetThreadsResponseThreadsItemReactionsItemAddressUserProfile.Raw,
    CommonApi.GetThreadsResponseThreadsItemReactionsItemAddressUserProfile
> = core.serialization.object({
    name: core.serialization.string().optional(),
    email: core.serialization.string().optional(),
    website: core.serialization.string().optional(),
    bio: core.serialization.string().optional(),
    avatarUrl: core.serialization.property("avatar_url", core.serialization.string().optional()),
    slug: core.serialization.string().optional(),
    socials: core.serialization.list(core.serialization.string()).optional(),
    backgroundImage: core.serialization.property(
        "background_image",
        GetThreadsResponseThreadsItemReactionsItemAddressUserProfileBackgroundImage.optional()
    ),
});

export declare namespace GetThreadsResponseThreadsItemReactionsItemAddressUserProfile {
    interface Raw {
        name?: string | null;
        email?: string | null;
        website?: string | null;
        bio?: string | null;
        avatar_url?: string | null;
        slug?: string | null;
        socials?: string[] | null;
        background_image?: GetThreadsResponseThreadsItemReactionsItemAddressUserProfileBackgroundImage.Raw | null;
    }
}
