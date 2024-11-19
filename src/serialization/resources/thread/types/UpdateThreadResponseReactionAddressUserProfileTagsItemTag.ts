/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";

export const UpdateThreadResponseReactionAddressUserProfileTagsItemTag: core.serialization.ObjectSchema<
    serializers.UpdateThreadResponseReactionAddressUserProfileTagsItemTag.Raw,
    CommonApi.UpdateThreadResponseReactionAddressUserProfileTagsItemTag
> = core.serialization.object({
    id: core.serialization.number().optional(),
    name: core.serialization.string(),
});

export declare namespace UpdateThreadResponseReactionAddressUserProfileTagsItemTag {
    interface Raw {
        id?: number | null;
        name: string;
    }
}
