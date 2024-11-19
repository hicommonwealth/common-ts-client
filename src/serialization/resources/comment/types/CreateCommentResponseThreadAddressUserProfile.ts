/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
import { CreateCommentResponseThreadAddressUserProfileBackgroundImage } from "./CreateCommentResponseThreadAddressUserProfileBackgroundImage";

export const CreateCommentResponseThreadAddressUserProfile: core.serialization.ObjectSchema<
    serializers.CreateCommentResponseThreadAddressUserProfile.Raw,
    CommonApi.CreateCommentResponseThreadAddressUserProfile
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
        CreateCommentResponseThreadAddressUserProfileBackgroundImage.optional()
    ),
});

export declare namespace CreateCommentResponseThreadAddressUserProfile {
    interface Raw {
        name?: string | null;
        email?: string | null;
        website?: string | null;
        bio?: string | null;
        avatar_url?: string | null;
        slug?: string | null;
        socials?: string[] | null;
        background_image?: CreateCommentResponseThreadAddressUserProfileBackgroundImage.Raw | null;
    }
}
